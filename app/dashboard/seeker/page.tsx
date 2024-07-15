import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils'
import { SeekerProfileModel } from '@/schemas/seekerprofile';
import { AgentModel } from '@/schemas/agent';
import { ImageIcon } from 'lucide-react';

async function MainDashboard() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/api/auth/signin')
    }

    const seekerProfiles = await SeekerProfileModel.find({
      hostid: session?.user.id
    });

    // active agent
    const agents = seekerProfiles[0].agentid ? await AgentModel.find({
      _id: seekerProfiles[0].agentid
    }) : null;

    const linkToJobs = "/dashboard/seeker/jobs"
    const connectAgent = "/" // update when page to connect with an agent is live
    const increaseCredit = "/dashboard/seeker/add-credits"; // update when stripe page is live

  return (
      <div className="max-w-xl mx-auto text-center">
        <h1 className='text-2xl sm:text-4xl py-8 font-bold'>Seeker Dashboard</h1>
          <div className="grid gap-x-4 gap-y-4 grid-cols-2 mt-20">
            <div className="flex items-center justify-center mr-0">
              <Link href={linkToJobs}>
                <div className="flex flex-col items-center bg-lime-200 rounded-lg p-6 w-50 h-36">
                  <h3 className="text-xl mb-4">Applications Completed</h3>
                  <p className="text-xl font-bold mb-4">{seekerProfiles[0].numApps ? seekerProfiles[0].numApps : 0}</p>
                </div>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex bg-purple-100 rounded-lg p-6 w-50 h-36">
                <div className="flex flex-col pr-5">
                {agents ? <h3 className="text-xl mb-2">Your Agent</h3> : <h3 className="text-xl mb-2">No Agent Yet</h3>}
                  {agents ? 
                    <p className="text-xl font-bold mb-2">{agents[0].name}</p> : 
                    <Link href={connectAgent} className={cn(buttonVariants({variant: 'secondary'}),"")}>
                        Connect with an agent
                    </Link>}
                </div>
                <div className="flex flex-col items-center mr-4">
                  {agents ?        
                    (
                      agents[0].photos.length > 0 ?
                        <Image alt={agents[0].name} src={`${agents[0].photos.at(0)}`} 
                        width={50} height={80} className="mb-4 rounded-lg" /> 
                        :
                        <ImageIcon width={100} height={100} className='text-slate-200' />
                    )
                    :
                    <></>
                    }             
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex bg-orange-100 rounded-lg p-6 w-60 h-36">
                <div className="flex flex-col pr-5">
                  <h3 className="text-xl mb-4">Credit:</h3>
                  <p className="text-xl font-bold mb-4">${seekerProfiles[0].numCredits ? seekerProfiles[0].numCredits : 0}</p>
                </div>
                <div className="flex flex-col items-center mr-4">
                  <Link href={increaseCredit} className={cn(buttonVariants({variant: 'secondary'}),"")} >
                      Add credit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default MainDashboard;