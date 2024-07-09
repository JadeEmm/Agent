'use server'

import { stripe } from '@/lib/stripe'
import { formatAmountForStripe } from '@/lib/utils'
import { Stripe } from 'stripe'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export async function createCheckoutSession(data: FormData): Promise<void> {
    const amount = Number(data.get('amount'))
    const credits = Number(data.get('credits'))

    const checkoutSession: Stripe.Checkout.Session = 
    await stripe.checkout.sessions.create({
        mode: 'payment',
        submit_type: 'pay',
        metadata: {
            seekerid: data.get('seekerid') as string,
            amount: amount.toString(),
            credits: credits.toString()
        },
        line_items: [
            {
                quantity: 1,
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Amount Credit'
                    },
                    unit_amount: formatAmountForStripe(amount, 'usd')
                },
            }
        ],
        success_url:
        `${headers().get('origin')}/seeker/add-credits/checkout/result?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${headers().get('origin')}`
    })

    redirect(checkoutSession.url as string)
}
