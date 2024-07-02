'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { useSeekerProfile } from '../seeker-profile'
import { Input } from '@/components/ui/input'
import PdfDropZone from '@/components/pdfDropZone'

const FormSchema = z.object({
    resumeLink: z.string()
})

type WorkHistoryInput = z.infer<typeof FormSchema>

function Resume({
    onNext,
    onPrev
}: {
    onNext: () => void,
    onPrev?: () => void
}) {
    const seekerProfile = useSeekerProfile()

    const handleFileAdd = async (filesToUpload: string[]) => {
        console.log("Addeding now!")
        seekerProfile.updateState({ resumes: [...seekerProfile.data.resumes ?? [], ...filesToUpload]})
    }

    const handleFileDelete = (url: string) => {
        const updatedResumes = seekerProfile.data.resumes?.filter(resume => resume !== url) ?? []
        seekerProfile.updateState({ resumes: updatedResumes })
    }

    const form = useForm<WorkHistoryInput>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            resumeLink: seekerProfile.data.resumeLink
        }
    })

    function onSubmit(data: WorkHistoryInput) {
        seekerProfile.updateState({
            resumeLink: data.resumeLink
        })
        onNext()
    }

    return (
        <div className="grid w-full gap-1 5">
            <h2 className='text-xl sm:text-2xl py-4 font-semibold'>Your Resume</h2>
        
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormItem>
                        <h4>If you are using the second tier and want the Agent to tailor your resume, then posted an editable link to your resume here. For example, a link to an editable google/word doc or latex file.</h4>
                        <div className="bg-slate-100 p-2 rounded-md">
                            <FormField
                                control={form.control}
                                name="resumeLink"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                        Resume Link
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <h4>If you are using the base tier without resume tailoring, upload your resume here.</h4>
                        <PdfDropZone
                            onFilesAdded={handleFileAdd}
                            onFileDelete={handleFileDelete}
                        />
                    </FormItem>
                        
                    <div className='flex justify-between items-center py-4' style={{marginBottom: '-30px'}}>
                        <Button type='button' variant='ghost' onClick={onPrev}>Prev</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default Resume