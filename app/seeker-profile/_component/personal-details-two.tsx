'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { useSeekerProfile } from '../seeker-profile'
import { Input } from '@/components/ui/input'
import { Switch } from "@/components/ui/switch"

const FormSchema = z.object({
    education: z.string().min(50, {
        message: 'Description must be at least 50 characters.'
    }),
    workAuthorization: z.boolean(),
    requiresSponsorship: z.boolean(),
    disability: z.boolean(),
    veteran: z.boolean(),
    ethnicity: z.string(),
    gender: z.string(),
})

type ItemDescriptionInput = z.infer<typeof FormSchema>

function PersonalDetailsTwo({
    onNext,
    onPrev
}: {
    onNext: () => void,
    onPrev?: () => void
}) {
    const seekerProfile = useSeekerProfile()

    const form = useForm<ItemDescriptionInput>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            education: seekerProfile.data.education,
            workAuthorization: seekerProfile.data.workAuthorization,
            requiresSponsorship: seekerProfile.data.requiresSponsorship,
            disability: seekerProfile.data.disability,
            veteran: seekerProfile.data.veteran,
            ethnicity: seekerProfile.data.ethnicity,
            gender: seekerProfile.data.gender,
        }
    })

    function onSubmit(data: ItemDescriptionInput) {
        seekerProfile.updateState({
            education: data.education,
            workAuthorization: data.workAuthorization,
            requiresSponsorship: data.requiresSponsorship,
            disability: data.disability,
            veteran: data.veteran,
            ethnicity: data.ethnicity,
            gender: data.gender,
        })
        onNext()
    }

    return (
        <div className="grid w-full gap-1 5">        
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>

                    <div className="bg-slate-100 p-2 rounded-md">
                        <FormField
                            control={form.control}
                            name='education'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Education
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea {...field}
                                            maxLength={1000}
                                            placeholder="For each education, please include the institution name, degree, major(s), duration, and gpa. E.g., University of Toronto, BSc, Computer Science, September 2023-May 2027" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="bg-slate-100 p-2 rounded-md">
                        <FormField
                            control={form.control}
                            name="workAuthorization"
                            render={({ field }) => (
                                <FormItem className='flex items-center justify-between font-bold'>
                                    <FormLabel>
                                    Equal Employment: authorized to work in the application country?
                                    </FormLabel>
                                    <FormLabel>
                                        {field.value ? 'Yes ' : 'No '}
                                    </FormLabel>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="bg-slate-100 p-2 rounded-md">
                        <FormField
                            control={form.control}
                            name="requiresSponsorship"
                            render={({ field }) => (
                                <FormItem className='flex items-center justify-between font-bold'>
                                    <FormLabel>
                                    Equal Employment: now or in the future require sponsorship?
                                    </FormLabel>
                                    <FormLabel>
                                        {field.value ? 'Yes ' : 'No '}
                                    </FormLabel>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="bg-slate-100 p-2 rounded-md">
                        <FormField
                            control={form.control}
                            name="disability"
                            render={({ field }) => (
                                <FormItem className='flex items-center justify-between font-bold'>
                                    <FormLabel>
                                    Equal Employment: do you have a disability?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </FormLabel>
                                    <FormLabel>
                                        {field.value ? 'Yes ' : 'No '}
                                    </FormLabel>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="bg-slate-100 p-2 rounded-md">
                        <FormField
                            control={form.control}
                            name="veteran"
                            render={({ field }) => (
                                <FormItem className='flex items-center justify-between font-bold'>
                                    <FormLabel>
                                    Equal Employment: are you a veteran?&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </FormLabel>
                                    <FormLabel>
                                        {field.value ? 'Yes' : 'No'}
                                    </FormLabel>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="bg-slate-100 p-2 rounded-md">
                        <FormField
                            control={form.control}
                            name="ethnicity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                    Ethnicity
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
                            name="gender"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                    Gender
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

export default PersonalDetailsTwo