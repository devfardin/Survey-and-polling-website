import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import MenuDropdownTab from './MenuDropdownTab'
const HeaderNavLink = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className='p-4 md:py-1 md:px-2 text-2xl flex flex-row items-center gap-3 rounded-full cursor-pointer  md:block lg:hidden'>
                <AiOutlineMenu />
            </div>
            {
                isOpen && (<div className='absolute rounded-b-lg shadow-md p-3 pl-10 bg-gray-100 overflow-hidden w-full right-0 top-20 md:top-16 text-sm md:block lg:hidden'>
                    <div className='flex gap-5 justify-center text-center flex-col lg:flex-row'>
                        <a href="/" className='text-black lg:text-whiteC hover:text-primery text-lg font-medium dark:text-black'>Home</a>
                        <a href="/pricing-plan" className='text-black lg:text-whiteC hover:text-primery text-lg font-medium dark:text-black'>Pricing</a>
                        <a href="/contact-us" className='text-black lg:text-whiteC hover:text-primery text-lg font-medium dark:text-black'>Contact Us</a>
                       


                    </div>
                    <MenuDropdownTab />
                </div>
                )}
            <div className='hidden gap-x-5 lg:flex'>
                <NavLink to="/" className={({ isActive, isPending }) =>
                    isPending ? "!text-primery text-base font-medium" : isActive ? "!text-primery text-base font-medium" : "text-black lg:text-whiteC hover:text-primery text-base font-medium dark:text-black"}>Home</NavLink>

                <NavLink to="/pricing-plan" className={({ isActive, isPending }) =>
                    isPending ? "!text-primery text-base font-medium" : isActive ? "!text-primery text-base font-medium" : "text-black lg:text-whiteC hover:text-primery text-base font-medium dark:text-black"}>Pricing</NavLink>
               
                <NavLink to="/all-surveys" className={({ isActive, isPending }) =>
                    isPending ? "!text-primery text-base font-medium" : isActive ? "!text-primery text-base font-medium" : "text-black lg:text-whiteC hover:text-primery text-base font-medium dark:text-black"}>Surveys</NavLink>

                <NavLink to="/contact-us" className={({ isActive, isPending }) =>
                    isPending ? "!text-primery text-base font-medium" : isActive ? "!text-primery text-base font-medium" : "text-black lg:text-whiteC hover:text-primery text-base font-medium dark:text-black"}>Contact Us</NavLink>


            </div>
        </div>
    )
}

export default HeaderNavLink