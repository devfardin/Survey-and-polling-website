import React from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { LiaVoteYeaSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'

const FeatureSurveyCard = ({survery}) => {
    const {_id,title,  description, selectedCategory, voted, like, dislike}= survery
  return (
    <Link to={`/survery/${_id}`} className='border border-gray-300 p-6 rounded-md'>
    <h1 className='text-xl font-medium text-gray-600 '>{survery?.title} </h1>

    <h2 className='text-lg font-normal text-gray-600 bg-gray-200 py-1 px-3 rounded-lg my-2 inline-block'>{survery?.selectedCategory}</h2>
    <p className='text-base text-gray-400 font-normal'>{survery?.description.slice(0,100)}</p>
    <div className='flex flex-wrap gap-2 mt-3'>
      <h1 className='border rounded-full py-1 px-3 text-base text-white items-center bg-primery flex gap-2'><LiaVoteYeaSolid className='text-xl'/>Voted {survery?.voted}</h1>
      <h1 className='border rounded-full py-1 px-3 text-base text-white  items-center bg-primery flex gap-2'><AiOutlineLike className='text-xl'/>Like {survery?.like}</h1>
      <h1 className='border rounded-full py-1 px-3 text-base text-white items-center bg-primery flex gap-2'><AiOutlineDislike className='text-xl'/>Dislike {survery?.dislike}</h1>
    </div>
  </Link>
)
}

export default FeatureSurveyCard