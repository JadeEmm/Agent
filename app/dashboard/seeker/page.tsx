import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils'

async function MainDashboard() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/api/auth/signin')
    }

    // temporary consts until fetching is possible
    const agent = {name: "Shaishav Shah" };
    const seeker = {numApps: 20, numCredits: 30, photos: ["./agent-may.jpg"]};
    const increaseCredit = "/";

  return (
      <div className="max-w-xl mx-auto text-center">
        <h1 className='text-2xl sm:text-4xl py-8 font-bold'>Seeker Dashboard</h1>
          <div className="grid gap-x-4 gap-y-4 grid-cols-2 mt-20">
            <div className="flex items-center justify-center mr-0">
              <div className="flex flex-col items-center bg-lime-200 rounded-lg p-6">
                <h3 className="text-xl mb-4">Applications Completed</h3>
                <p className="text-xl font-bold mb-4">{seeker.numApps}</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex bg-purple-100 rounded-lg p-6 max-w-md">
                <div className="flex flex-col pr-5">
                  <h3 className="text-xl mb-2">Your Agent</h3>
                  <p className="text-xl font-bold mb-2">{agent.name}</p>
                </div>
                <div className="flex flex-col items-center mr-4">
                  <Image alt="agent-may" src="/agent-may.jpg" width={50} height={80} className="mb-4 rounded-lg" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex bg-orange-100 rounded-lg p-6 max-w-md">
                <div className="flex flex-col pr-5">
                  <h3 className="text-xl mb-4">Credit:</h3>
                  <p className="text-xl font-bold mb-4">${seeker.numCredits}</p>
                </div>
                <div className="flex flex-col items-center mr-4">
                  <Link href={increaseCredit} className={cn(buttonVariants({variant: 'secondary'}),"")} >
                      Increase credit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default MainDashboard;