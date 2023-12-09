import React, { useState } from 'react'
import SectionTitle from '../../../components/Shared/SectionTitle'
import { surveryData } from '../../../apis/auth';
import toast from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';
import { useNavigate } from "react-router-dom";

const SurveryForm = () => {
    const navigate=useNavigate()
    const { user } = useAuth()
    const [selectedCategory, setSelectedCategory] = useState('Select A Category');
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSurvery = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const endDate = form.endDate.value
        const description = form.description.value
        const voted = '0'
        const like = '0'
        const dislike = '0'
        const message = ''
        const status = 'Unpublished'
        const email = user.email
        const serveryInfo = { title, endDate, description, selectedCategory, voted, like, dislike, message, status, email }

        surveryData(serveryInfo)
            .then(() => {
                toast.success('Your survey was successfully uploaded!')
                form.reset();
                navigate('/dashboard/my-survery')
            })
            .catch(() => {
                toast.error('Oops! Something went wrong. Please try again later.')
            })
    }

    return (
        <div className=''>
            <div className='mt-5'>
                <SectionTitle title='Add a Survery' align='center' />
            </div>
            {/* Survery form */}
            <div className='mt-10 max-w-4xl mx-auto'>
                <form onSubmit={handleSurvery}>
                    <div>
                        <label className='text-lg mb-2 block font-medium text-gray-600' htmlFor="title">Survery Title</label>
                        <input type="text" placeholder='Title' name='title' id='title'
                            className='w-full px-3 py-3  border-[2px] text-xl font-normal  rounded-md border-gray-300 focus:outline-none focus:border-primery bg-gray-50 text-gray-800' />
                    </div>
                    <div className='md:flex justify-between gap-6 items-center mt-4'>
                        <div className='flex-1'>
                            <label className='text-lg mb-2 block font-medium text-gray-600' htmlFor="Category">Category</label>
                            <select
                                type="select"
                                id='Category'
                                name="category"
                                className="w-full px-3 py-3  border-[2px] text-xl font-normal  rounded-md border-gray-300 focus:outline-none focus:border-primery bg-gray-50 text-gray-800"
                                value={selectedCategory}
                                onChange={handleCategoryChange}  >
                                <option disabled>Select A Category</option>
                                <option>Market</option>
                                <option>Employee</option>
                                <option>Education</option>
                                <option>Product</option>
                                <option>Public Opinion</option>
                                <option>Health</option>
                                <option>Event Planning</option>
                            </select>
                        </div>
                        <div className='flex-1'>
                            <label className='text-lg mt-2 block font-medium text-gray-600' htmlFor="title">End Date</label>
                            <input type="date" name='endDate'
                                className='w-full px-3 py-3  border-[2px] text-xl font-normal  rounded-md border-gray-300 focus:outline-none focus:border-primery bg-gray-50 text-gray-800' />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <label className='text-lg mb-2 block font-medium text-gray-600' htmlFor="description">Description</label>
                        <textarea type="text" placeholder='Survery Description' name='description' id='description'
                            className='w-full px-3 py-3 h-40  border-[2px] text-xl font-normal  rounded-md border-gray-300 focus:outline-none focus:border-primery bg-gray-50 text-gray-800'> </textarea>
                    </div>
                    <button className='text-lg font-medium py-2 px-5 bg-buttonstyle hover:to-buttonHover mt-4 rounded' type="submit">
                        Add Survery
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SurveryForm