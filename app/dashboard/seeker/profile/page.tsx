
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
import { ItemModel } from '@/schemas/item'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../api/auth/[...nextauth]/route'
import { redirect, useRouter } from 'next/navigation'
import { ProfileForm } from '@/components/profileForm'


async function MainDashboardProfile() {

    const session = await getServerSession(authOptions)
    if (!session) {
        redirect('/api/auth/signin')
    }

    
  
  return (
    <div className='flex flex-col p-4'>
        <h1 className='text-2xl sm:text-4xl py-8 font-bold'>Profile</h1>
        <ProfileForm user_id={session.user.id} />
    </div>
  )
}

export default MainDashboardProfile;