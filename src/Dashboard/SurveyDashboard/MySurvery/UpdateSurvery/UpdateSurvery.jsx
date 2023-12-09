import React, { useEffect, useState } from 'react'
import { getUpdateData, getupdateSurvery } from '../../../../apis/survery'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateSurvery = () => {
    const navigete=useNavigate()
    const { id } = useParams()
    const [mySurvery, setSurvery] = useState([])
    const [selectCategory, setSelectCategory] = useState(mySurvery.selectedCategory)
    const onChnageCategory = (event) => {
        setSelectCategory(event.target.value)
    }

    useEffect(() => {
        getUpdateData(id)
            .then(data => setSurvery(data))
    }, [id])



    const handleUpdateSurvery = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const endDate = form.endDate.value
        const description = form.description.value
        const serveryInfo = { title, endDate, description, category:selectCategory }

        getupdateSurvery(mySurvery._id, serveryInfo)
            .then((res) => {
                toast.success('Your survey updated successfully!')
                navigete('/dashboard/my-survery')

            })
            .catch((error) => {
                console.log(error);
                toast.error('Failed to update the survey. Please try again.')
            })

            
    }

    return (
        <form onSubmit={handleUpdateSurvery}>
            <div className=' justify-between gap-6 items-center'>
                <div className='flex-1'>
                    <label className='text-lg mb-2 block font-medium text-gray-600' htmlFor="title">Survery Title</label>
                    <input type="text"
                        defaultValue={mySurvery.title}
                        placeholder='Title' name='title' id='title'
                        className='w-full px-3 py-3  border-[2px] text-xl font-normal  rounded-md border-gray-300 focus:outline-none focus:border-primery bg-gray-50 text-gray-800' />
                </div>
                <div className='flex-1'>
                    <label className='text-lg mt-2 block font-medium text-gray-600' htmlFor="Category">Category</label>
                    <select
                        type='text'
                        id='Category'
                        name="category"
                        className="w-full px-3 py-3  border-[2px] text-xl font-normal  rounded-md border-gray-300 focus:outline-none focus:border-primery bg-gray-50 text-gray-800"
                        onChange={onChnageCategory}
                        value={selectCategory? selectCategory : mySurvery.selectedCategory}
                        >
                        <option>Market</option>
                        <option>Employee</option>
                        <option>Education</option>
                        <option>Product</option>
                        <option>Public Opinion</option>
                        <option>Health</option>
                        <option>Event Planning</option>
                    </select>
                    
                </div>
            </div>

            <div className=' gap-6 items-center mt-4'>

                <div className='flex-1'>
                    <label className='text-lg mt-2 block font-medium text-gray-600' htmlFor="title">End Date</label>
                    <input type="date" name='endDate'
                        defaultValue={mySurvery.endDate}
                        className='w-full px-3 py-3  border-[2px] text-xl font-normal  rounded-md border-gray-300 focus:outline-none focus:border-primery bg-gray-50 text-gray-800' />
                </div>
            </div>
            <div className='mt-3'>
                <label className='text-lg mb-2 block font-medium text-gray-600' htmlFor="description">Description</label>
                <textarea type="text"
                    defaultValue={mySurvery.description}
                    placeholder='Survery Description' name='description' id='description'
                    className='w-full px-3 py-3 h-40  border-[2px] text-xl font-normal  rounded-md border-gray-300 focus:outline-none focus:border-primery bg-gray-50 text-gray-800' />
            </div>
            <button className='text-lg font-medium py-2 px-5 bg-buttonstyle hover:to-buttonHover mt-4 rounded' type="submit">
                Update Survery
            </button>
        </form>
    )
}

export default UpdateSurvery