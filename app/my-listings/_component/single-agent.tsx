'use client'

import { Agent, ItemStatus } from '@/types'
import React, { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import Image from 'next/image'
import { ImageIcon } from 'lucide-react'

function SingleAgent({
    agents
}: { agents: Agent[] }) {

    const [agentToAction, setAgentToAction] = useState<Agent | null>(null)
    const [dialog, setDialog] = useState(false)
    const router = useRouter()

    const handleAgentRemove = (agent: Agent) => {
        setAgentToAction(agent)
        setDialog(true)
    }

    const handleConfirm = async () => {
        const result = await fetch(`api/agent/${agentToAction?._id}`, {
            method: 'DELETE'
        })

        if (result.ok) {
            toast.success("Profile deleted")
            router.refresh()
        }

    }
    return (

        <>
            {
                agents.map((agent) => (
                    <div key={agent._id} className="flex gap-4 py-1 pb-1 shadow-md">

                        {/* photo */}
                        <div>
                            {
                                agent.photos.length > 0 ?
                                <Image className='rounded-md' width={100} height={100}
                                alt={agent.name} src={`${agent.photos.at(0)}`} />
                                :
                                <ImageIcon width={100} height={100} className='text-slate-200' />
                            }
                        </div>
                        <div className="flex flex-col justify-center spacey-y-1">
                            <p className='text-2xl sm:text-xl font-bold capitalize'>{agent.name}</p>
                            <Badge
                                className={`${agent.status === ItemStatus.LISTED ?
                                    'bg-green-500' : 'bg-red-500'} text-white w-20 uppercase flex justify-center`}
                            >{agent.status}</Badge>

                            <div className="flex gap-4">
                                <Link href={`my-listings/edit/${agent._id}`}
                                    className={cn(buttonVariants({ variant: 'ghost' }), 'text-blue-500 px-1')}
                                >
                                    Edit
                                </Link>
                                <Button
                                    variant="link"
                                    onClick={() => handleAgentRemove(agent)}
                                    className={cn(buttonVariants({ variant: 'ghost' }), 'text-red-500 px-1')}
                                >
                                    Remove
                                </Button>
                            </div>
                        </div>
                    </div>
                ))
            }

            <AlertDialog open={dialog}>
                
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently remove your Agent profile.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setDialog(false)}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleConfirm}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default SingleAgent