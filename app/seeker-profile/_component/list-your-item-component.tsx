'use client'

import React, { useState } from 'react'
import { Progress } from "@/components/ui/progress"
import { Button } from '@/components/ui/button'
import ItemName from './item-name'
import ItemPhotos from './item-photos'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'
import { Loader } from '@/components/loader'
import WorkHistory from './work-history'
import SeekerDescription from './seeker-description'
import { useSeekerProfile } from '../seeker-profile'
import PersonalDetailsTwo from './personal-details-two'
import PersonalDetailsOne from './personal-details-one'
import Resume from './Resume'

const totalSteps = 7
const stepIncrement = 100 / totalSteps

function ListYourItemComponent() {
    const { data: session } = useSession()
    const seekerProfile = useSeekerProfile()
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
                seekerProfile: seekerProfile.data
            }
        ))

        setSubmitting(true)
        const result = await
            fetch(`api/host/${session?.user.id}/seekerprofile/create`, {
                method: 'POST',
                body: data
            })

        setSubmitting(false)

        if (result.ok) {
            toast("Profile created")
        }

    }

    return (
        <>
            <h1 className='text-2xl sm:text-4xl text-center py-8 font-bold'>Create your Profile</h1>

            <div className="space-y-8">

                <Progress value={step * stepIncrement} />

                {{
                    1: <ItemName onNext={handleNextStepChange} />,
                    2: <SeekerDescription onNext={handleNextStepChange}
                        onPrev={handlePrevStepChange} />,
                    3: <ItemPhotos onNext={handleNextStepChange} onPrev={handlePrevStepChange} />,
                    4: <WorkHistory onNext={handleNextStepChange} onPrev={handlePrevStepChange}/>,
                    5: <PersonalDetailsOne onNext={handleNextStepChange} onPrev={handlePrevStepChange}/>,
                    6: <PersonalDetailsTwo onNext={handleNextStepChange} onPrev={handlePrevStepChange}/>,
                    7: <Resume onNext={handleNextStepChange} onPrev={handlePrevStepChange} />,
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

export default ListYourItemComponent