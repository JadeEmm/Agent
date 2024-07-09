'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const CREDIT_RATE = 1.49 // Rate per credit in USD

function AddCreditsPage() {
    const [credits, setCredits] = useState(0)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const amount = credits * CREDIT_RATE

        const formData = new FormData()
        formData.append('seekerid', 'user-id-from-session') // Replace with actual user ID from session or context
        formData.append('amount', amount.toFixed(2)) // Fixed to 2 decimal places
        formData.append('credits', credits.toString())

        await fetch('/api/create-checkout-session', {
            method: 'POST',
            body: formData
        })

        router.push('/dashboard/seeker')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl mb-4">Add Credits to Your Account</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <input 
                    type="number"
                    value={credits}
                    onChange={(e) => setCredits(Number(e.target.value))}
                    placeholder="Enter number of credits"
                    className="mb-4 p-2 border rounded"
                    required
                />
                <p className="mb-4">Total amount: ${(credits * CREDIT_RATE).toFixed(2)}</p>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Proceed to Payment</button>
            </form>
        </div>
    )
}

export default AddCreditsPage
