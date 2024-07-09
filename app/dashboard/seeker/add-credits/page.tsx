'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

function AddCreditsPage() {
    const [amount, setAmount] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('seekerid', 'user-id-from-session') // Replace with actual user ID from session or context
        formData.append('amount', amount)

        await fetch('/api/create-checkout-session', {
            method: 'POST',
            body: formData
        })

        router.push('/seeker/dashboard')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl mb-4">Add Credits to Your Account</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <input 
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="mb-4 p-2 border rounded"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Proceed to Payment</button>
            </form>
        </div>
    )
}

export default AddCreditsPage

