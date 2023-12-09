import React, { useEffect, useState } from 'react'
import { getUserFeedback } from '../../../apis/survery'
import FeedbackCard from './FeedbackCard'

const UserFeedbacks = ({id}) => {
    const [allFeedback, setAllFeedback]=useState([])
    useEffect(()=>{
        getUserFeedback()
        .then(data=> setAllFeedback(data))
    },[])
    
    const matchId=allFeedback.filter(feedback=> feedback.id===id)
    
  return (
   <div className='mt-6'>
    <h1 className='text-xl font-medium text-gray-700 border-b pb-4'>{matchId.length} Comments</h1>
     <div>
        {
            matchId.map(feedback=> <FeedbackCard key={feedback._id} feedback={feedback}/>)
        }
    </div>
   </div>
  )
}

export default UserFeedbacks