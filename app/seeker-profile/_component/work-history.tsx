'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { useSeekerProfile } from '../seeker-profile'

const FormSchema = z.object({
    workHistory: z.string().min(50, {
        message: 'Work history must be at least 50 characters.'
    })
})

type WorkHistoryInput = z.infer<typeof FormSchema>

function WorkHistory({
    onNext,
    onPrev
}: {
    onNext: () => void,
    onPrev?: () => void
}) {
    const seekerProfile = useSeekerProfile()

    const form = useForm<WorkHistoryInput>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            workHistory: seekerProfile.data.workHistory
        }
    })

    function onSubmit(data: WorkHistoryInput) {
        seekerProfile.updateState({
            workHistory: data.workHistory
        })
        onNext()
    }

    return (
        <div className="grid w-full gap-1 5">
            <h2 className='text-xl sm:text-2xl py-4 font-semibold'>Your work history</h2>
        
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='workHistory'
                        render={({ field}) => (
                            <FormItem>
                                <h4>At the bare minimum, for each experience, please provide your title, company name, employment term, and location. Please provide a few paragraphs explaining what you accomplished/did at each role--<b>this content will enable the Agent to tailor your resume</b>. The more, the better! Include Projects too, if relevant.</h4>
                                <FormControl>
                                    <Textarea {...field} 
                                    maxLength={5000}
                                    placeholder="e.g., Company One, Software Engineer Intern, May 2024-Present, San Francisco, CA. During my internship at a tech company, I helped develop and optimize an internal data analysis tool using Python, Django, and PostgreSQL. I collaborated with senior engineers to implement a new data visualization feature with D3.js and fix critical bugs, improving the tool's performance by 20%. I wrote comprehensive unit tests with PyTest, ensuring 95% code coverage, and actively participated in code reviews. By the end of my internship, my contributions had streamlined the data analysis process and increased efficiency by 30%." />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='flex justify-between items-center py-4'>
                        <Button type='button' variant='ghost' onClick={onPrev}>Prev</Button>
                        <Button type='submit' variant='ghost'>Next</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default WorkHistory