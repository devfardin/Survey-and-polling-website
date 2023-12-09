import React, { useState } from 'react'
import SectionTitle from '../../components/Shared/SectionTitle'
import useAuth from '../../hooks/useAuth'
import { getUserFeedbackPost } from '../../apis/survery'
import toast from 'react-hot-toast';
import useRole from '../../hooks/useRole';


const UserComment = ({ id }) => {
    const { user } = useAuth()
    const [role] = useRole()
    const handleSurvery = (e) => {
        e.preventDefault()
        const form = e.target
        const description=form.description.value
        const name = user.displayName
        const email = user.email
        const profile = user.photoURL
        const date = Date.now()
        const serveryInfo = {description, name, email, id, profile, date}

        getUserFeedbackPost(serveryInfo)
            .then(() => {
                toast.success('Comment successfully submitted!')
                form.reset()
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            })
            .catch(() => {
                toast.error('Comment submission failed. Please try again.')
            })
    }
    const handlePost = () => {
        toast.error("You can't comment on this post. Access is limited to pro users only.")
    }

    return (
        <div>
            <div>
                <div className='mt-10'>
                    <SectionTitle title='Give a Comment' align='center' />
                </div>
                
                {/* Survery form */}
                <div className='mt-4 w-full md:max-w-4xl mx-auto'>
                    <form onSubmit={handleSurvery}>
                        <div className='flex flex-col md:flex-row justify-between gap-6 items-center'>
                            <div className='flex-1'>
                                <label className='text-lg mb-1 ml-2 block font-medium text-gray-600' htmlFor="title">Your Name</label>
                                <input type="text" name='name' id='title' readOnly
                                    className='w-full px-3 py-3  border-[2px] text-xl font-normal  rounded-md border-gray-300 focus:outline-none focus:border-primery bg-gray-50 text-gray-800'
                                    defaultValue={user?.displayName}
                                />
                            </div>

                            <div className='flex-1'>
                                <label className='text-lg mb-1 ml-2 block font-medium text-gray-600' htmlFor="title">Email Address</label>
                                <input type="text" name='email' id='title' readOnly
                                    className='w-full px-3 py-3  border-[2px] text-xl font-normal  rounded-md border-gray-300 focus:outline-none focus:border-primery bg-gray-50 text-gray-800'
                                    defaultValue={user?.email} />
                            </div>
                        </div>

                        <div className='mt-3'>
                            <label className='text-lg ml-2 block font-medium text-gray-600' htmlFor="description ">Your Comment</label>
                            <textarea type="text" placeholder='Survery Description' name='description' id='description'
                                className='w-full px-3 py-3 h-40  border-[2px] text-xl font-normal  rounded-md border-gray-300 focus:outline-none focus:border-primery bg-gray-50 text-gray-800'> </textarea>
                        </div>
                        {
                            role === 'proUser' && <button className='text-lg font-medium py-2 px-5 bg-buttonstyle hover:to-buttonHover mt-4 rounded' type="submit">
                                Comment
                            </button> 
                        }
                    </form>
                    <div>
                    {
                        role !== 'proUser' &&  <button onClick={handlePost} className='text-lg font-medium py-2 px-5 bg-buttonstyle hover:to-buttonHover mt-4 rounded' type="submit">
                        Comment
                    </button>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserComment