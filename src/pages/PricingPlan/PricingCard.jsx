import React from 'react'
import { MdCheck } from "react-icons/md";
import { Link } from "react-router-dom";

const PricingCard = ({pricing}) => {
    const {_id, name, price, billingCycle, features }=pricing
    return (
        <div className=''>
            {/* Essential Plan: */}
            <div className='p-10 bg-white rounded-lg border border-borderColor'>
                <h1 className='text-2xl lg:text-3xl font-semibold  text-gray-700 '>{name}:</h1>
                <h1 className='text-3xl font-bold text-primery my-4'>${price}
                    <sub className='text-lg font-medium text-gray-500'>/ {billingCycle}</sub></h1>
               {
                features.map((feature, index)=>  <div key={index} className='flex gap-x-2 items-center text-md text-gray-500 border-t py-3 border-borderColor'>
                <MdCheck className='text-buttonstyle text-2xl'> </MdCheck>  <h2 >{feature}</h2>
            </div>)
               }

                <Link  to={`/prcing-plan/${_id}`} className='text-lg bg-buttonstyle py-3 px-7 w-full hover:bg-buttonHover duration-200 ease-in-ou rounded-lg text-black font-normal block mt-4'>
                    Buy Basic Plan</Link>
            </div>

        </div>
    )
}

export default PricingCard