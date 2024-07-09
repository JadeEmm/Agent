'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useMyAgentStore } from '../my-agent-store'

const FormSchema = z.object({
    agentname: z.string().min(4, {
        message: 'Name must be at least 4 characters.'
    })
})

type AgentNameInput = z.infer<typeof FormSchema>

function AgentName({
    onNext,
    onPrev
}: {
    onNext: () => void,
    onPrev?: () => void
}) {

    const agent = useMyAgentStore()

    const form = useForm<AgentNameInput>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            agentname: agent.data.name
        }
    })

    function onSubmit(data: AgentNameInput) {
        agent.updateState({
            name: data.agentname
        })
        onNext()
    }

    return (
        <div className="grid w-full gap-1 5">
            <h2 className='text-xl sm:text-2xl py-4 font-semibold'>Name</h2>
        
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='agentname'
                        render={({ field}) => (
                            <FormItem>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='flex justify-between items-center py-4'>
                        {/* <Button type='button'>Prev</Button> */}
                        <Button type='submit' variant='ghost'>Next</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default AgentName