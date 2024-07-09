import { stripe } from '@/lib/stripe'
import React from 'react'
import Stripe from 'stripe'
import { Metadata } from '@stripe/stripe-js'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { headers } from 'next/headers'
import { updateUserBalance } from '@/lib/mongodb'

async function AddCreditsCheckoutPage({
    searchParams
}: {
    searchParams: { session_id: string }
}) {
    if (!searchParams.session_id) {
        throw new Error("Please provide a valid session id")
    }

    const checkoutSession: Stripe.Checkout.Session = 
    await stripe.checkout.sessions.retrieve(searchParams.session_id, {
        expand: ['line_items', 'payment_intent']
    })

    const paymentIntent = checkoutSession.payment_intent as Stripe.PaymentIntent
    const paymentStatus = paymentIntent.status === 'succeeded' ? 'Payment successful' : 'Payment failed'

    if (paymentIntent.status === 'succeeded') {
        const metadata = checkoutSession.metadata as Metadata
        await updateUserBalance(metadata['seekerid'], parseFloat(metadata['amount']), parseInt(metadata['credits'])) 
    }

    return (
        <div className="flex flex-col justify-center items-center">
            {paymentIntent.status === 'succeeded' && <CheckCircle2 size={64} className="text-green-500" />}
            <h2 className={`${paymentIntent.status === 'succeeded' ? 'text-green-500' : 'text-red-500'} text-2xl py-4`}>{paymentStatus}</h2>
            <h3 className="text-lg">Your payment has been processed and the credits will be reflected in your account. <Link href={'/dashboard/seeker'} className="text-blue-500">Return to Dashboard</Link></h3>
        </div>
    )
}

export default AddCreditsCheckoutPage
