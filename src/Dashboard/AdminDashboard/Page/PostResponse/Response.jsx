import React, { useEffect, useState } from 'react'
import { getpostRequest } from '../../../../apis/admin'
import SectionTitle from '../../../../components/Shared/SectionTitle'
import ResponseCard from './ResponseCard'

const Response = () => {
  const [loading, setLoading]=useState(false)
  const [getPost, setGetPost]=useState([])
  useEffect(()=>{
    setLoading(true)
    getpostRequest()
    .then(data=>{
      setGetPost(data)
      setLoading(false)
    })
  },[])

  const published= getPost.filter(post=> post.status==='Published')


  return (
    <div className=''>
    <div className='mb-6 mt-4'>
      <SectionTitle title='All Post Request' align='center' />
    </div>
    <div className=' bg-white'>
      <div className="">
        <table className="table ">
          <thead className='px-10'>
            <tr className='bg-[#F5F7FC]'>
              <th className='text-lg font-normal text-hover p-3 ml-5'>No</th>
              <th className='text-lg font-normal text-hover p-3 ml-5'>Post Name</th>
              <th className='text-lg font-normal text-hover p-3 ml-5'>Category</th>
              <th className='text-lg font-normal text-hover p-3'> Status</th>
              <th className='text-lg font-normal text-hover p-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              published.map((post, index) => <ResponseCard key={post._id} index={index} post={post}></ResponseCard>)
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default Response