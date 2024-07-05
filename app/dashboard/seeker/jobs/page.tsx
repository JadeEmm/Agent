

import React from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { JobApplicationModel } from '@/schemas/jobApplication'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../api/auth/[...nextauth]/route'
import { redirect, useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ApplicationTable } from '@/components/applicationTable'


async function MainDashboardJobs() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/api/auth/signin')
    }

    const myAppliedJobs = await JobApplicationModel.find({
        seekerid: session?.user.id
    }) 

    // TODO: retrive actual agent once the model is updated.
    const assignedAgent = {
        id: '123',
        name: 'John Doe',
        email: '',
        area: ["SWE", "Data Science"],
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
    } 

  return (
    <div className="flex flex-col h-full">
      <div className="w-full h-64 flex flex-row">
        <div className='border border-gray w-1/2 p-4'>
          <h3><strong>Your Agent: </strong></h3>

              <div className="relative flex w-full max-w-96 flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-40 m-4">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                  <img
                    src={assignedAgent.image}
                    alt="image"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-2 w-3/5">
                  <h6 className="ml-1 mb-1 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-slate-800 antialiased">
                    {assignedAgent.name}
                  </h6>
                  <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    {assignedAgent.area.map((area, index) => (
                    <span className="text-sm font-medium bg-slate-100 py-1 px-2 rounded text-slate-500 align-middle mx-1" key={index}>{area}</span>
                    ))}
                  </p>
                  <Link
                    className={cn(buttonVariants({variant: 'ghost'}),"w-full mt-2")}
                    href={`/agent/${assignedAgent.id}`}
                  >
                    View More
                  </Link>
                </div>
              </div>
          
        </div>
        <div className='border border-gray w-1/2 p-4'>
        <h3><strong>Your Preferences: </strong></h3>
        </div>
      </div>
      <div className="flex flex-col grow w-full h-3/6 p-6 pb-12">
        <h3><strong>Applications</strong></h3>
        <ApplicationTable userid={session?.user.id} />
      </div>
      </div>
  )
}

export default MainDashboardJobs;