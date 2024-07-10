
'use client'

import { UploadCloudIcon, X, EyeIcon } from 'lucide-react'
import React, { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from './ui/button'
import { Skeleton } from "@/components/ui/skeleton"
import { Loader } from './loader'
import { storageRef } from '@/lib/firebase'
import { deleteObject, getDownloadURL, uploadBytes } from 'firebase/storage'
import Image from 'next/image'
import Link from 'next/link'

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
            <div className='flex flex-col w-full'>
                <div {...getRootProps()}
                    className='text-center p-2 cursor-pointer border-2 border-dashed border-slate-200'>
                    <input {...getInputProps()} />
                    <div className='flex flex-col items-center justify-center 
                text-xs text-gray-400 h-full'>
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
                    pdfStates.map((pdf, index) => {

                        return (
                        <div key={index}
                            className='border-0 p-0 w-full relative shadow-md bg-slate-200 
                rounded-md aspect-square h-16 my-2'>
                            {
                                pdf.state === 'complete' ?
                                <div className='flex items-center p-4'>
                                            <Button variant='ghost' onClick={(e) => {
                                                e.preventDefault();
                                                window.open(pdf.downloadURL, '_blank');
                                            }}>
                                                <EyeIcon className='w-4 h-4 text-blue-500' />
                                            </Button>
                                        <Button variant='ghost' onClick={(e) => {
                                            e.stopPropagation()
                                            _handleDelete(pdf.downloadURL)
                                        }}>
                                            <X className='w-4 h-4 text-blue-500' />
                                        </Button>
                                        <div className='text-gray-700' >{pdf.filename || pdf.file?.name}</div>
                                </div>
                                :
                                <Skeleton className='h-full wi-full' />
                            }

                            {/* loader */}
                            {
                                uploading && pdf.state === 'pending' &&
                                <div className="absolute top-0 left-0 flex w-full items-center
                            justify-center rounded-md bg-black bg-opacity-70">
                                    <Loader />
                                </div>
                            }
                        </div>
                    ) } )
    
                }
            </div>
            {/* error */}
            {error && <p className='text-red-500 font-bold'>{error}</p>}
        </>
    )
}

export default PdfDropZone