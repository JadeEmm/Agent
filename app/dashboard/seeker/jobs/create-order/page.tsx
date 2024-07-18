
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../../api/auth/[...nextauth]/route'
import { redirect, useRouter } from 'next/navigation'
import { SeekerProfileModel } from '@/schemas/seekerprofile'
import { SeekerProfile } from '@/types'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { OrderForm } from '@/components/orderForm'

async function CreateOrderPage() {
    const session = await getServerSession(authOptions)
    if (!session) {
        redirect('/api/auth/signin')
    }

    const existingProfile: SeekerProfile | null = ( await SeekerProfileModel.findOne({ hostid: session?.user?.id }))?.toJSON();

    return (
      <div className='flex flex-col p-4'>
        <Link style={{maxWidth: "100px"}}className={cn(buttonVariants({variant: 'secondary'}),"")} href="/dashboard/seeker/jobs">
            Back
        </Link>
        {(!existingProfile || existingProfile?.numCredits == 0) && 
            <Link style={{maxWidth: "200px", marginTop: "20px"}}className={cn(buttonVariants({variant: 'secondary'}),"bg-red-400 hover:bg-red-300")} href="/dashboard/seeker/add-credits">
                Must Get Credits First
            </Link>
        }     
        <h1 className='text-2xl sm:text-4xl py-8 font-bold'>Create an Order</h1>
        <OrderForm user_id={session.user.id} existingProfile={existingProfile} />
      </div>
    )
}

export default CreateOrderPage;