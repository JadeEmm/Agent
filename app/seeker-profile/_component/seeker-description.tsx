'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { useSeekerProfile } from '../seeker-profile'

const FormSchema = z.object({
    seekerDescription: z.string().min(50, {
        message: 'Description must be at least 50 characters.'
    })
})

type SeekerDescriptionInput = z.infer<typeof FormSchema>

function SeekerDescription({
    onNext,
    onPrev
}: {
    onNext: () => void,
    onPrev?: () => void
}) {
    const seekerProfile = useSeekerProfile()

    const form = useForm<SeekerDescriptionInput>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            seekerDescription: seekerProfile.data.description
        }
    })

    function onSubmit(data: SeekerDescriptionInput) {
        seekerProfile.updateState({
            description: data.seekerDescription
        })
        onNext()
    }

    return (
        <div className="grid w-full gap-1 5">
            <h2 className='text-xl sm:text-2xl py-4 font-semibold'>What are you looking for?</h2>
        
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        control={form.control}
                        name='seekerDescription'
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

export default SeekerDescription