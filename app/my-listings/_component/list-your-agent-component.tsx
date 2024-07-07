'use client'

import React, { useState } from 'react'
import { Progress } from "@/components/ui/progress"
import { Button } from '@/components/ui/button'
import { useMyAgentStore } from '../my-agent-store'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'
import { Loader } from '@/components/loader'
import AgentName from './agent-name'
import AgentDescription from './agent-description'
import AgentPhotos from './agent-photos'

const totalSteps = 3
const stepIncrement = 100 / totalSteps

function ListYourAgentComponent() {
    const { data: session } = useSession()
    const agent = useMyAgentStore()
    const [submitting, setSubmitting] = useState(false)
    const [step, setStep] = useState(1)

    const handleNextStepChange = () => {
        if (step === totalSteps) return

        setStep(currentStep => currentStep + 1)
    }

    const handlePrevStepChange = () => {
        if (step === 1) return

        setStep(currentStep => currentStep - 1)
    }

    const handleFinalSubmit = async () => {

        const data = new FormData()

        data.set('data', JSON.stringify(
            {
                agent: agent.data
            }
        ))

        setSubmitting(true)
        const result = await
            fetch(`api/host/${session?.user.id}/agent/create`, {
                method: 'POST',
                body: data
            })

        setSubmitting(false)

        if (result.ok) {
            toast("Agent created")
        }

    }

    return (
        <>
            <h1 className='text-2xl sm:text-4xl text-center py-8 font-bold'>Create your Profile</h1>

            <div className="space-y-8">

                <Progress value={step * stepIncrement} />

                {{
                    1: <AgentName onNext={handleNextStepChange} />,
                    2: <AgentDescription onNext={handleNextStepChange}
                        onPrev={handlePrevStepChange} />,
                    3: <AgentPhotos onPrev={handlePrevStepChange} />
                }[step]}

                {
                    submitting ?
                        <Loader /> :
                        <div className={`${step < totalSteps ? 'hidden' : 'flex flex-col mt-4 w-full space-y-2'}`}>
                            <Button type='button' onClick={handleFinalSubmit}>Submit</Button>
                        </div>
                }

            </div>
        </>
    )
}

export default ListYourAgentComponent