import React, { useEffect, useState } from 'react'
import Container from '../../components/Shared/Container'
import PricingCard from './PricingCard'
import SectionTitle from '../../components/Shared/SectionTitle'
import { getPricing } from '../../apis/survery'

const Pricing = () => {
    const [PricingData, setPricingData]=useState([])
    useEffect(()=>{
        getPricing()
        .then(data=> setPricingData(data))
    },[])
    return (
        <div className='bg-[#F7F7F7]'>
        <Container>
            <div className='max-w-2xl  mx-auto pt-16 pb-10'>
                <SectionTitle align='center' title={'Choose the plan that works for you'}></SectionTitle>
                <p className='text-sm md:text-base lg:text-lg text-gray-600'>Select the perfect plan to unlock the full potential of our Polling and Survey platform. Tailored to suit your needs, each plan comes with distinct features and benefits. Whether you're a solo user, growing business</p>
            </div>

           <div className='pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6'>
          {
            PricingData.map(pricing=> <PricingCard key={pricing._id} pricing={pricing}></PricingCard>)
          }
           </div>
        </Container>
       
        </div>
    )
}

export default Pricing