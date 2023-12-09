import React from 'react'

const FeedbackCard = ({ feedback }) => {
    const { name, email, id, profile, description, date} = feedback
    const convertDate = new Date(date)
    const datefor = convertDate.toLocaleDateString('en-US')
    return (
        <div className='mb-4 border-b py-4'>
            <div className='flex gap-4'>
                <div className='w-24'>
                    <img className='w-20 h-20 object-cover' src={profile} alt="" />
                </div>
                <div className='flex-1'>
                    <h1 className='text-xl font-normal text-gray-600'>{name}</h1>
                    <h1 className='text-lg font-normal text-gray-600'>{datefor}</h1>
                    <h1 className='text-base font-normal text-gray-500'>{description}</h1>
                </div>
            </div>
        </div>
    )
}

export default FeedbackCard