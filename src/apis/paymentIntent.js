import axiosSecure from '.'

export  const createPaymentIntent= async(price)=>{
    const {data}= await axiosSecure.post('/create-payment-intent', {price})
    return data
}

export const getPaymentInfo= async (paymentInfo)=>{
    const {data}= await axiosSecure.post('/paymentInfo', paymentInfo)
    return data
}
export const getPaymentdetails= async ()=>{
    const {data}= await axiosSecure.get('/paymentInfo')
    return data
}