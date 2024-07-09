'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { useMyAgentStore } from '../my-agent-store'

const FormSchema = z.object({
    agentdescription: z.string().min(100, {
        message: 'Agent description must be at least 100 characters.'
    })
})

type AgentDescriptionInput = z.infer<typeof FormSchema>

function AgentDescription({
    onNext,
    onPrev
}: {
    onNext: () => void,
    onPrev?: () => void
}) {
    const agent = useMyAgentStore()

    const form = useForm<AgentDescriptionInput>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            agentdescription: agent.data.description
        }
    })

    function onSubmit(data: AgentDescriptionInput) {
        agent.updateState({
            description: data.agentdescription
        })
        onNext()
    }

    return (
        <div className="grid w-full gap-1 5">
            <h2 className='text-xl sm:text-2xl py-4 font-semibold'>Description</h2>
        
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='agentdescription'
                        render={({ field}) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea {...field} 
                                    maxLength={1000}
                                    placeholder='Tell job seekers a little bit about about yourself :) This may include who you are, your experience applying to jobs for seekers, and what types of roles/locations/industries you speicalize in for applications.' />
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

export default AgentDescription