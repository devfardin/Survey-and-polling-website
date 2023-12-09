import React, { useEffect, useState } from 'react'
import { getAllUser } from '../../../apis/auth'
import { getpostRequest } from '../../../apis/admin'
import useAuth from '../../../hooks/useAuth'

const ADashboard = () => {
  const [users, setUsers] = useState([])
  const [getPost, setGetPost]=useState([])
  useEffect(() => {
    getAllUser()
      .then(data => setUsers(data))
  }, [])
  useEffect(()=>{
    getpostRequest()
    .then(data=>{
      setGetPost(data)
    })
  },[])
  const {user}=useAuth()
  return (
  <div>
       <h1 className='text-center font-bold text-3xl text-gray-800 my-10'>{user?.displayName}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      <div className='p-10 bg-gray-100 rounded'>
        <h1 className='text-3xl text-gray-700 font-semibold text-center'>Total User</h1>
        <h2 className='text-2xl text-gray-500 font-medium text-center mt-3'>{users.length}</h2>
      </div>
      <div className='p-10 bg-gray-100 rounded'>
        <h1 className='text-3xl text-gray-700 font-semibold text-center'>Total Survey</h1>
        <h2 className='text-2xl text-gray-500 font-medium text-center mt-3'>{getPost.length}</h2>
      </div>
      <div className='p-10 bg-gray-100 rounded'>
        <h1 className='text-3xl text-gray-700 font-semibold text-center'>Pro User</h1>
        <h2 className='text-2xl text-gray-500 font-medium text-center mt-3'>0</h2>
      </div>
    </div>
  </div>
  )
}
export default ADashboard