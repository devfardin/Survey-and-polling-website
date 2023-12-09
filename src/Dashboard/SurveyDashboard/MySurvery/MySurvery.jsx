import React, { useEffect, useState } from 'react'
import { getMySurvery } from '../../../apis/survery'
import useAuth from '../../../hooks/useAuth'
import MySurveryCard from './MySurveryCard'

const MySurvery = () => {
  const { user } = useAuth()
  const [mySurveryData, setMySurvery] = useState([])
  
  useEffect(() => {
    getMySurvery(user?.email)
      .then(data => {
        setMySurvery(data)
      })
  }, [user])

  return (
    <div className='py-10'>
      <div className=' bg-white'>
        <div className="overflow-x-auto">
          <table className="table ">
            {/* head */}
            <thead className='px-10'>
              <tr className='bg-[#F5F7FC]'>
                <th className='text-lg font-normal text-hover p-3 ml-5'>Survery title</th>
                <th className='text-lg font-normal text-hover p-3 ml-5'>Status </th>
                <th className='text-lg font-normal text-hover p-3'> Expired</th>
                <th className='text-lg font-normal text-hover p-3'>Actions</th>
              </tr>
            </thead>
            <tbody>

              {
                mySurveryData.map(mySurvery => <MySurveryCard key={mySurvery._id} mySurvery={mySurvery}></MySurveryCard>)
              }

            </tbody>
          </table>
        </div>
      </div>
    </div>



  )
}
export default MySurvery