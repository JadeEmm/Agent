'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Item, ItemStatus } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Switch } from "@/components/ui/switch"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import ImageDropZone from '@/components/imageDropZone'
import { itemCategories } from '@/data'

const FormSchema = z.object({
    status: z.boolean(),
    itemname: z.string(),
    itemdescription: z.string().min(4, {
        message: 'Agent description must be at least 100 characters.'
    }),
    photos: z.array(z.string())
})

type FormInput = z.infer<typeof FormSchema>

function ItemEditForm({
    item
}: { item: Item }) {

    const router = useRouter()

    const form = useForm<FormInput>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            status: item.status === ItemStatus.LISTED,
            itemname: item?.name,
            itemdescription: item?.description,
            photos: item?.photos
        }
    })

    async function onSubmit(formInput: FormInput) {

        const data = {
            ...formInput
        }

        const result = await fetch(`/api/item/${item._id}`, {
            method: 'PATCH',
            body: JSON.stringify(data)
        })

        if (result.ok) {
            toast.success("item updated.")
            router.refresh()
        } else {
            toast.error("Failed to update item.")
        }
    }

    const handleFileAdd = async (filesToUpload: string[]) => {

        const newPhotos = [...form.getValues('photos'), ...filesToUpload]
        form.setValue('photos', newPhotos)

        await onSubmit(form.getValues())
    }

    const handleFileDelete = async (url: string) => {
        const updatedPhotos = form.getValues('photos').filter(photo => photo !== url)
        form.setValue('photos', updatedPhotos)
        await onSubmit(form.getValues())
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>

                    {/* status */}
                    <div className="bg-slate-100 p-2 rounded-md">
                        <FormField
                            control={form.control}
                            name="status"
                            render={({ field }) => (
                                <FormItem className='flex items-center justify-between font-bold'>
                                    <FormLabel
                                        className={`${field.value ? 'text-green-500' : 'text-black'} font-bold`}
                                    >
                                        {field.value ? 'Your profile is public' : 'Your profile is hidden'}
                                    </FormLabel>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* agent name */}
                    <div className="bg-slate-100 p-2 rounded-md">
                        <FormField
                            control={form.control}
                            name="itemname"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* agent description */}
                    <div className="bg-slate-100 p-2 rounded-md">
                        <FormField
                            control={form.control}
                            name='itemdescription'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Description
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea {...field}
                                            maxLength={1000}
                                            placeholder='Tell job seekers a little bit about about yourself :) This may include who you are, your experience applying to jobs for seekers, and what types of roles/locations/industries you speicalize in for applications.' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    
                    {/* photos */}
                    <FormLabel>
                        Profile Picture
                    </FormLabel>
                    <div className='flex flex-wrap gap-2'>
                        
                        <ImageDropZone
                            photos={form.getValues('photos')}
                            onFileDelete={handleFileDelete}
                            onFilesAdded={handleFileAdd}
                         />
                    </div>

                    
                    {/* submit */}
                    <div className="py-4">
                        <Button disabled={!form.formState.isDirty}
                        type='submit'
                        className='w-full'>
                            Save
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    )
}

export default ItemEditForm