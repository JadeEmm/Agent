import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils'
import { SeekerProfileModel } from '@/schemas/seekerprofile';
import { AgentModel } from '@/schemas/agent';
import { ImageIcon } from 'lucide-react';

async function AgentDashboardPayment() {
    // const session = await getServerSession(authOptions)

    // if (!session) {
    //     redirect('/api/auth/signin')
    // }

    // const agentProfiles = await SeekerProfileModel.find({
    //   hostid: session?.user.id
    // });

    const contactEmail = 'example@gmail.com'; // Replace with your contact email

    return (
        <div className="max-w-xl mx-auto text-center">
            <h1 className='text-2xl sm:text-4xl py-8 font-bold'>Agent Dashboard Payment</h1>
            <p className="text-xl mb-4">For any questions or to withdraw your funds, please contact: {contactEmail}</p>
        </div>
    );
}

export default AgentDashboardPayment;