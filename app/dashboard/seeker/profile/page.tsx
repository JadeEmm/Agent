
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
import { AgentModel } from '@/schemas/agent'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../api/auth/[...nextauth]/route'
import { redirect, useRouter } from 'next/navigation'
import { SeekerProfileForm } from '@/components/profileFormSeeker'
import { SeekerProfileModel } from '@/schemas/seekerprofile'
import { SeekerProfile } from '@/types'


async function MainDashboardProfile() {

    const session = await getServerSession(authOptions)
    if (!session) {
        redirect('/api/auth/signin')
    }


    const existingProfile: SeekerProfile | null = ( await SeekerProfileModel.findOne({ hostid: session?.user?.id }))?.toJSON();

    const agents = await AgentModel.find({
        hostid: session?.user.id
    })


    return (
      <div className='flex flex-col p-4'>
          <h1 className='text-2xl sm:text-4xl py-8 font-bold'>Profile</h1>
          <SeekerProfileForm user_id={session.user.id} existingProfile={existingProfile} />
      </div>
    )
}

export default MainDashboardProfile;