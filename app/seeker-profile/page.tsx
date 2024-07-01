

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import ListYourItemComponent from './_component/list-your-item-component'
import { ItemModel } from '@/schemas/item'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import SingleListing from './_component/single-listing'
import { redirect, useRouter } from 'next/navigation'
import { SeekerProfileModel } from '@/schemas/seekerprofile'

async function SeekerProfilePage() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/api/auth/signin')
    }

    const seekerProfile = await SeekerProfileModel.find({
        hostid: session?.user.id
    })

  return (
    <>
 
        <h1 className='text-2xl sm:text-4xl py-8 font-bold'>Your Seeker Profile</h1>

        {/* dialog for adding items */}
        {
            seekerProfile.length == 0 ? 
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline"><Plus className='mr-4 h-4 w-4' />Create Seeker Profile</Button>
                </DialogTrigger>
                <DialogContent>
                    <ListYourItemComponent />
                </DialogContent>
            </Dialog> 
            : <></>
        }
        

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-8">
            {
                seekerProfile.length > 0 ? 
                <SingleListing listings={seekerProfile} />
                :   
                <p className='text-xl font-light p-4'>No Agent Profile</p>

            }
        </div>
    </>
  )
}

export default SeekerProfilePage