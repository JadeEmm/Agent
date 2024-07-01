'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { useMyListingStore } from '../my-listing-store'

const FormSchema = z.object({
    itemdescription: z.string().min(50, {
        message: 'Description must be at least 50 characters.'
    })
})

type ItemDescriptionInput = z.infer<typeof FormSchema>

function ItemDescription({
    onNext,
    onPrev
}: {
    onNext: () => void,
    onPrev?: () => void
}) {
    const myListing = useMyListingStore()

    const form = useForm<ItemDescriptionInput>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            itemdescription: myListing.data.description
        }
    })

    function onSubmit(data: ItemDescriptionInput) {
        myListing.updateState({
            description: data.itemdescription
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
                        name='itemdescription'
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

export default ItemDescription