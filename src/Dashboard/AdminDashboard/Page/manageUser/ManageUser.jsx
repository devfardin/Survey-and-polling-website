import { useEffect, useState } from 'react'
import { getAllUser } from '../../../../apis/auth'
import UserCard from './UserCard'
import SectionTitle from '../../../../components/Shared/SectionTitle'

const ManageUser = () => {

  const [users, setUsers] = useState([])
  useEffect(() => {
    getAllUser()
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <div className='mb-6 mt-4'>
        <SectionTitle title='All  Users' align='center' />
      </div>
      <div className=' bg-white'>
        <div className="overflow-x-auto">
          <table className="table ">
            <thead className='px-10'>
              <tr className='bg-[#F5F7FC]'>
                <th className='text-lg font-normal text-hover p-3 ml-5'>Name & profile</th>
                <th className='text-lg font-normal text-hover p-3 ml-5'>Email Address </th>
                <th className='text-lg font-normal text-hover p-3'> Member since</th>
                <th className='text-lg font-normal text-hover p-3'> User Role</th>
                <th className='text-lg font-normal text-hover p-3'>Change Role</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map(user => <UserCard key={user._id} user={user}></UserCard>)
              }
            </tbody>
          </table>
        </div>
      </div>

      
    </div>

  )
}

export default ManageUser