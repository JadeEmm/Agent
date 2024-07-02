'use client'

import { Item, ItemStatus, SeekerProfile } from '@/types'
import React, { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import Image from 'next/image'
import { ImageIcon } from 'lucide-react'

function SingleListing({
    seekerProfiles
}: { seekerProfiles: SeekerProfile[] }) {

    const [seekerProfileToAction, setSeekerProfileToAction] = useState<SeekerProfile | null>(null)
    const [dialog, setDialog] = useState(false)
    const router = useRouter()

    // const handleItemRemove = (seekerProfile: SeekerProfile) => {
    //     setSeekerProfileToAction(SeekerProfile)
    //     setDialog(true)
    // }

    // const handleConfirm = async () => {
    //     const result = await fetch(`api/item/${seekerProfileToAction?._id}`, {
    //         method: 'DELETE'
    //     })

    //     if (result.ok) {
    //         toast.success("Profile deleted")
    //         router.refresh()
    //     }

    // }
    return (

        <>
            {
                seekerProfiles.map((seekerProfile) => (
                    <div key={seekerProfile._id} className="flex gap-4 py-1 pb-1 shadow-md">

                        {/* photo */}
                        <div>
                            {
                                seekerProfile.photos.length > 0 ?
                                <Image className='rounded-md' width={100} height={100}
                                alt={seekerProfile.name} src={`${seekerProfile.photos.at(0)}`} />
                                :
                                <ImageIcon width={100} height={100} className='text-slate-200' />
                            }
                        </div>
                        {/* <div className="flex flex-col justify-center spacey-y-1">
                            <p className='text-2xl sm:text-xl font-bold capitalize'>{item.name}</p>
                            <Badge
                                className={`${item.status === ItemStatus.LISTED ?
                                    'bg-green-500' : 'bg-red-500'} text-white w-20 uppercase flex justify-center`}
                            >{item.status}</Badge> */}

                            {/* <div className="flex gap-4">
                                <Link href={`seeker-profile/edit/${seekerProfile._id}`}
                                    className={cn(buttonVariants({ variant: 'ghost' }), 'text-blue-500 px-1')}
                                >
                                    Edit
                                </Link>
                                <Button
                                    variant="link"
                                    onClick={() => handleItemRemove(item)}
                                    className={cn(buttonVariants({ variant: 'ghost' }), 'text-red-500 px-1')}
                                >
                                    Remove
                                </Button> */}
                            {/* </div>
                        </div> */}
                    </div>
                ))
            }

            <AlertDialog open={dialog}>
                
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently remove your Seeker profile.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setDialog(false)}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleConfirm}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default SingleListing