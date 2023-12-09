import React, { useEffect, useState } from 'react'
import SectionTitle from '../../../../components/Shared/SectionTitle'
import { getPaymentdetails } from '../../../../apis/paymentIntent'
import HistoryCard from './HistoryCard'

const PaymentHistry = () => {
  const [paymentData, setpaymentData]=useState([])
  useEffect(()=>{
    getPaymentdetails()
    .then(data=> setpaymentData(data))
  },[])
  return (
    <div className=''>
    <div className='mb-6 mt-4'>
      <SectionTitle title='All Post Request' align='center' />
    </div>
    <div className=' bg-white'>
      <div className="">
        <table className="table ">
          <thead className='px-10'>
            <tr className='bg-[#F5F7FC]'>
              <th className='text-lg font-normal text-hover p-3 ml-5'>Customer Name & Email</th>
              <th className='text-lg font-normal text-hover p-3 ml-5'>Service Name & Price</th>
              <th className='text-lg font-normal text-hover p-3 ml-5'>Transition Id</th>
              <th className='text-lg font-normal text-hover p-3'> Date</th>
            </tr>
          </thead>
          <tbody>
            {
              paymentData.map((payment, index) => <HistoryCard key={payment._id} index={index} payment={payment}></HistoryCard>)
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default PaymentHistry