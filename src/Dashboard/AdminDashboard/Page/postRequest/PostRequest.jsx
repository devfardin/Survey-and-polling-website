import React, { useEffect, useState } from 'react'
import { getpostRequest } from '../../../../apis/admin'
import SectionTitle from '../../../../components/Shared/SectionTitle'
import PostCard from './PostCard'

const PostRequest = () => {
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

  const unPublished= getPost.filter(post=> post.status==='Unpublished')

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
              <th className='text-lg font-normal text-hover p-3'>Description</th>
              <th className='text-lg font-normal text-hover p-3'> Status</th>
              <th className='text-lg font-normal text-hover p-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              unPublished.map((post, index) => <PostCard key={post._id} post={post} index={index}></PostCard>)
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}
export default PostRequest