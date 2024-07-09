

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

async function MainDashboardProfile() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/api/auth/signin')
    }

    const agents = await AgentModel.find({
        hostid: session?.user.id
    })


  return (
    <>
        <h1 className='text-2xl sm:text-4xl py-8 font-bold'>Seeker Profile Edit</h1>  
    </>
  )
}

export default MainDashboardProfile;