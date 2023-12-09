import React from 'react'
import useAuth from '../hooks/useAuth'

const UserProfile = () => {
    const { user } = useAuth()
    const noNumber = 'Null'
    const haldlePrifileUpdate = () => {
        console.log('Profile Update click');
    }
    return (
        <div className='max-w-2xl mx-auto  md:mt-10 lg:mt-20'>
            <div className='shadow-md p-10 rounded-md'>
                <h1 className='text-2xl font-medium text-gray-500 mb-7'>My Profile</h1>
                <div className='flex flex-col md:flex-row gap-10'>
                    <div className='flex-1 md:flex-none'>
                        <img className='w-40 h-40 object-cover rounded-full' src={user.photoURL} alt="" />
                        <button onClick={haldlePrifileUpdate} className='text-lg font-medium text-black bg-buttonstyle hover:buttonHover px-5 py-2 rounded-xl mt-4'>Update Profile</button>
                    </div>
                    <div className='flex-1 md:flex-none'>
                        <h1 className='text-lg font-normal text-gray-500'>Full Name</h1>
                        <h1 className='text-xl font-medium text-gray-500'>{user?.displayName}</h1>
                        <h1 className='text-lg font-normal text-gray-500 mt-4 '>Email Address</h1>
                        <h1 className='text-xl font-medium text-gray-500'>{user?.email}</h1>
                        <h1 className='text-lg font-normal text-gray-500 mt-4 '>Phone
                        </h1>
                        <h1 className='text-xl font-medium text-gray-500'>{user?.phoneNumber || noNumber}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile