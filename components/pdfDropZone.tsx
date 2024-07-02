
'use client'

import { UploadCloudIcon, X } from 'lucide-react'
import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from './ui/button'
import { Skeleton } from "@/components/ui/skeleton"
import { Loader } from './loader'
import { storageRef } from '@/lib/firebase'
import { deleteObject, getDownloadURL, uploadBytes } from 'firebase/storage'

type UploadInterface = {
    file: File | null
    downloadURL: string
    filename: string
    state: 'pending' | 'complete' | 'error'
}

interface InputProps {
    onFilesAdded?: (addedFiles: string[]) => Promise<void>
    onFileDelete?: (url: string) => void
    pdfs?: string[]
}

function PdfDropZone({
    onFilesAdded,
    onFileDelete,
    pdfs
}: InputProps) {

    const [pdfStates, setPdfStates] = useState<UploadInterface[]>([])
    const [uploading, setUploading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (pdfs?.length) {
            const p: UploadInterface[] = []

            pdfs.map( pdf => (
                p.push({
                    file: null,
                    downloadURL: pdf,
                    state: 'complete',
                    filename: ''
                })
            ))

            setPdfStates(p)
        }
    }, [pdfs])

    // on file drop
    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        setUploading(true)
        setError(null)

        const Promises: Promise<UploadInterface>[] = []

        try {
            const addedFiles = acceptedFiles.map<UploadInterface>((file) => ({
                file,
                downloadURL: '',
                filename:
                    `${Math.random().toString(36).slice(2, 10)}_${Date.now()}.${file.name.split('.').pop()}`,
                state: 'pending'
            }))

            setPdfStates(prevPdfs => [...prevPdfs, ...addedFiles])

            addedFiles.map(async file => {
                Promises.push(
                    new Promise(async resolve => {
                        const fileRef = storageRef(file.filename)

                        // wait for upload
                        await uploadBytes(fileRef, file.file as File)

                        const downloadurl = await getDownloadURL(fileRef)

                        resolve({
                            file: file.file,
                            filename: file.filename,
                            state: file.state,
                            downloadURL: downloadurl
                        })
                    })
                )
            })

            // wait for all promises to finish
            const result = await Promise.all(Promises)
            const urls: string[] = []

            result.map(f => {
                urls.push(f.downloadURL)

                setPdfStates(pdfStates => {
                    const newFileStates = structuredClone(pdfStates)
                    const pdfState = newFileStates.find(pdf => pdf.filename === f.filename)

                    if (pdfState) {
                        pdfState.downloadURL = f.downloadURL
                        pdfState.state = 'complete'
                    }

                    return newFileStates
                })
            })


            // call the caller/host
            await onFilesAdded?.(urls)

        } catch (error: any) {
            console.log(error)
            setError(error.message)
        } finally {
            setUploading(false)
        }

    }, [])

    const { getRootProps, getInputProps } = useDropzone({
        accept: { 'application/pdf': [] },
        onDrop
    })

    const _handleDelete = async (pdfurl: string) => {
        const ref = storageRef(pdfurl)
        await deleteObject(ref)

        const newState = pdfStates.filter(state => state.downloadURL !== pdfurl)
        setPdfStates(newState)

        onFileDelete?.(pdfurl)
    }
    return (
        <>
            {/* upload box */}
            <div className='grid 
        gap-2
        grid-cols-[repeat(1,1fr)]
        sm:grid-cols-[repeat(2,1fr)]
        lg:grid-cols-[repeat(3,1fr)]
        xl:grid-cols-[repeat(4,1fr)]
        '>
                <div {...getRootProps()}
                    className='text-center p-2 cursor-pointer border-2 border-dashed border-slate-200'>
                    <input {...getInputProps()} />
                    <div className='flex flex-col items-center justify-center 
                text-xs text-gray-400' style={{ height: '50px', overflow: 'hidden', maxWidth: '100%' }}>>
                        <UploadCloudIcon className='mb-4 w-8 h-8' />
                        <div className="text-gray-400">drag &amp; drop to upload</div>
                        <div className="mt-2">
                            <Button
                                disabled={uploading}
                                type='button' variant='ghost' >Select</Button>
                        </div>
                    </div>
                </div>


                {
                    pdfStates.map((pdf, index) => (
                        <div key={index}
                            className='border-0 p-0 w-full relative shadow-md bg-slate-200 
                rounded-md aspect-square h-full' style={{ height: '70px', overflow: 'hidden', maxWidth: '100%' }}>
                            {
                                pdf.state === 'complete' ?
                                    // <Image
                                    //     fill
                                    //     src={pdf.downloadURL}
                                    //     alt={`listing pdfs ${index + 1}`}
                                    //     sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                                    //     className='h-full w-full rounded-md object-cover'
                                    // />
                                    <div className='flex items-center justify-between p-4'>
                                        <div className='text-gray-700' >{pdf.filename}</div>
                                        <Button variant='ghost' onClick={(e) => {
                                            e.stopPropagation()
                                            _handleDelete(pdf.downloadURL)
                                        }}>
                                            <X className='w-4 h-4 text-red-500' />
                                        </Button>
                                    </div>
                                    :
                                    <Skeleton className='h-full wi-full' />
                            }

                            {/* loader */}
                            {
                                uploading && pdf.state === 'pending' &&
                                <div className="absolute top-0 left-0 flex h-full w-full items-center
                            justify-center rounded-md bg-black bg-opacity-70">
                                    <Loader />
                                </div>
                            }

                            {/* delete button */}
                            <div
                                className="group absolute right-0 top-0"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    _handleDelete(pdf.downloadURL)
                                }}
                            >
                                <div className="flex h-4 w-4 
                        -translate-x-2
                        translate-y-2
                        cursor-pointer items-center justify-center">
                                    <X
                                        className='bg-red-500 text-white rounded-lg'
                                        width={16} height={16}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* error */}
            {error && <p className='text-red-500 font-bold'>{error}</p>}
        </>
    )
}

export default PdfDropZone