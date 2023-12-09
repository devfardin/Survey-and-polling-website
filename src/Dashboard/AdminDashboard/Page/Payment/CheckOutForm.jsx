import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react'
import { ImSpinner9 } from 'react-icons/im'
import useAuth from '../../../../hooks/useAuth'
import { createPaymentIntent, getPaymentInfo } from '../../../../apis/paymentIntent'
import useUsers from '../../../../hooks/Users'
import toast from 'react-hot-toast'
import { getProUser, getupdateUserRole } from '../../../../apis/admin'

const CheckoutForm = ({ pricingData }) => {
  const [users]=useUsers()
  const stripe = useStripe()
  const elements = useElements()
  const { user } = useAuth()
  const [cardError, setCardError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false) 

  useEffect(()=>{
  if(pricingData.price > 0){
    createPaymentIntent(pricingData.price)
    .then(data=> {
      console.log(data.clientSecret) 
      setClientSecret(data.clientSecret)
    })
  }
  },[])
  // Create Payment Intent
  const handleSubmit = async event => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      console.log('error', error)
      setCardError(error.message)
    } else {
      setCardError('')
      console.log('payment method', paymentMethod)
    }
    setProcessing(true)
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      })

    if (confirmError) {
      console.log(confirmError)
      setCardError(confirmError.message)
    }

    console.log('payment intent', paymentIntent)

    if (paymentIntent.status === 'succeeded') {
      // save payment information to the server
      // Update room status in db
      const paymentInfo = {
        userName: users.name,
        userEmail: users.email,
        planName: pricingData.name,
        price: pricingData.price,
        transactionId: paymentIntent.id,
        date: new Date(),
      }
      const changeUserRole={ }
      console.log(users?.id);
      getPaymentInfo(paymentInfo)
      .then(res=>{
         toast.success('Payment successful')
        setTimeout(() => {
          getProUser(users?._id)
          .then(()=>{
            toast.success('Congratulations! You now have pro user access.')
            return
          })
        }, 1000);
      })
      .catch(error=>{
        toast.error("Payment failed. Please try again, error")

      })


      setProcessing(false)
    }
  }

  return (
    <>
      <form className='my-2' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className='flex mt-2 justify-around'>
       
          <button
            type='submit'
            disabled={!stripe || !clientSecret || processing}
            className='inline-flex justify-center rounded-md border border-transparent bg-primery px-4 py-2 text-base mt-3 cursor-pointer font-medium text-white hover:bg-buttonHover focus:outline-none'
          >
            {processing ? (
              <ImSpinner9 className='m-auto animate-spin' size={24} />
            ) : (
              `Pay ${pricingData.price}$`
            )}
          </button>
        </div>
      </form>
      {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
    </>
  )
}

export default CheckoutForm