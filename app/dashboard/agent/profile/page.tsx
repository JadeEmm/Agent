
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../api/auth/[...nextauth]/route'
import { redirect, useRouter } from 'next/navigation'
import { AgentModel } from '@/schemas/agent'
import { Agent } from '@/types'


async function MainDashboardProfile() {

    const session = await getServerSession(authOptions)
    if (!session) {
        redirect('/api/auth/signin')
    }
    
    const existingAgentProfile: Agent | null = ( await AgentModel.findOne({ agentId: session?.user?.id }))?.toJSON();

    console.log(existingAgentProfile);

    return (
      <div className='flex flex-col p-4'>
          <h1 className='text-2xl sm:text-4xl py-8 font-bold'>Agent Profile</h1>
          {/* <ProfileForm user_id={session.user.id} existingProfile={existingProfile} /> */}
      </div>
    )
}

export default MainDashboardProfile;
