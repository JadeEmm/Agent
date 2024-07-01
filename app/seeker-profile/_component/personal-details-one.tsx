'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { useSeekerProfile } from '../seeker-profile'
import { Input } from '@/components/ui/input'

const FormSchema = z.object({
    fullName: z.string(),
    address: z.string(),
    phoneNumber: z.string(),
    emailAddress: z.string(), 
})

type personalDetailsOne = z.infer<typeof FormSchema>

function PersonalDetailsOne({
    onNext,
    onPrev
}: {
    onNext: () => void,
    onPrev?: () => void
}) {
    const seekerProfile = useSeekerProfile()

    const form = useForm<personalDetailsOne>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            fullName: seekerProfile.data.fullName,
            address: seekerProfile.data.address,
            phoneNumber: seekerProfile.data.phoneNumber,
            emailAddress: seekerProfile.data.emailAddress,
        }
    })

    function onSubmit(data: personalDetailsOne) {
        seekerProfile.updateState({
            fullName: data.fullName,
            address: data.address,
            phoneNumber: data.phoneNumber,
            emailAddress: data.emailAddress,
        })
        onNext()
    }

    return (
        <div className="grid w-full gap-1 5">
            <h2 className='text-xl sm:text-2xl py-4 font-semibold'>Your Personal Information</h2>
        
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <h4>This information is required to fill out job applications.</h4>
                    <div className="bg-slate-100 p-2 rounded-md">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                    Full name
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div> 
                    <div className="bg-slate-100 p-2 rounded-md">
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                    Full address
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div> 
                    <div className="bg-slate-100 p-2 rounded-md">
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                    Phone number
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div> 
                    <div className="bg-slate-100 p-2 rounded-md">
                        <FormField
                            control={form.control}
                            name="emailAddress"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                    Email address
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div> 
                    <div className='flex justify-between items-center py-4'>
                        <Button type='button' variant='ghost' onClick={onPrev}>Prev</Button>
                        <Button type='submit' variant='ghost'>Next</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default PersonalDetailsOne