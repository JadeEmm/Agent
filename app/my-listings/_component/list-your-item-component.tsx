'use client'

import React, { useState } from 'react'
import { Progress } from "@/components/ui/progress"
import { Button } from '@/components/ui/button'
import ItemName from './item-name'
import ItemDescription from './item-description'
import ItemPhotos from './item-photos'
import { useMyListingStore } from '../my-listing-store'
import { useSession } from 'next-auth/react'
import { toast } from 'sonner'
import { Loader } from '@/components/loader'

const totalSteps = 3
const stepIncrement = 100 / totalSteps

function ListYourItemComponent() {
    const { data: session } = useSession()
    const myListing = useMyListingStore()
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
                item: myListing.data
            }
        ))

        setSubmitting(true)
        const result = await
            fetch(`api/host/${session?.user.id}/item/create`, {
                method: 'POST',
                body: data
            })

        setSubmitting(false)

        if (result.ok) {
            toast("Item created")
        }

    }

    return (
        <>
            <h1 className='text-2xl sm:text-4xl text-center py-8 font-bold'>Create your Profile</h1>

            <div className="space-y-8">

                <Progress value={step * stepIncrement} />

                {{
                    1: <ItemName onNext={handleNextStepChange} />,
                    2: <ItemDescription onNext={handleNextStepChange}
                        onPrev={handlePrevStepChange} />,
                    3: <ItemPhotos onPrev={handlePrevStepChange} />
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