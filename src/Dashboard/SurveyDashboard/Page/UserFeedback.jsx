import React from 'react'

const UserFeedback = () => {
  return (
    <div className=''>
    <div className='mb-6 mt-4'>
      <SectionTitle title='User Feedback' align='center' />
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
              published.map((post, index) => <reedbackCard key={post._id} index={index} post={post}></reedbackCard>)
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}
export default UserFeedback