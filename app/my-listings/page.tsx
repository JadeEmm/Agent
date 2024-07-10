

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import ListYourAgentComponent from './_component/list-your-agent-component'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect, useRouter } from 'next/navigation'
import SingleAgent from './_component/single-agent'
import { AgentModel } from '@/schemas/agent'

async function MyListingsPage() {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect('/api/auth/signin')
    }

    const agents = await AgentModel.find({
        agentId: session?.user.id
    })


  return (
    <>
 
        <h1 className='text-2xl sm:text-4xl py-8 font-bold'>Your Agent Profile</h1>

        {/* dialog for adding agents */}
        {
            agents.length == 0 ? 
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline"><Plus className='mr-4 h-4 w-4' />Create Agent Profile</Button>
                </DialogTrigger>
                <DialogContent>
                    <ListYourAgentComponent />
                </DialogContent>
            </Dialog> 
            : <></>
        }
        

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 py-8">
            {
                agents.length > 0 ? 
                <SingleAgent agents={agents} />
                :   
                <p className='text-xl font-light p-4'>No Agent Profile</p>

            }
        </div>
    </>
  )
}

export default MyListingsPage