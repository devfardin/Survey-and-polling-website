import React from 'react'
import {loadStripe} from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import {Elements} from '@stripe/react-stripe-js'

const Payment = ({pricingData}) => {
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckOutForm pricingData={pricingData} />
            </Elements>

        </div>
    )
}

export default Payment