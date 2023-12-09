import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { getupdateUserRole } from '../../../../apis/admin'

const UserCard = ({ user }) => {
    const { _id, name, email, profile, creationTime, role } = user
    const convertDate = new Date(creationTime)
    const date = (convertDate.toLocaleDateString('en-US'));

    const [changeUserRole, setchangeUserRole] = useState('Select User Role');
    const handleUserRole = (event) => {
        setchangeUserRole(event.target.value);
    }
    const handleRoleChange=(e)=>{
        e.preventDefault()
        const userRole={changeUserRole}
        console.log(userRole);
        getupdateUserRole(_id, userRole)
        .then(() => {
            toast.success('Your survey updated successfully!')
            window.location.reload()
        })
        .catch((error) => {
            console.log(error);
            toast.error('Failed to update the survey. Please try again.')
        })
    }
    return (
        <tr className='border-b py-10  border-sectionbg'>
            <td>
                <div className="flex items-center space-x-4">

                    <div className='text-center'>
                        <img className='w-16 h-16 text-center rounded-full object-cover' src={profile} alt="" />
                        <div className="text-lg font-normal text-black1 text-left mt-1">{name}</div>
                    </div>
                </div>
            </td>
            <td className='text-base text-textColor font-normal'>
                <div className='flex gap-1'>
                    <h1>{email}</h1>
                </div>
            </td>
            <td >
                <h1 className='text-base text-textColor font-normal'>{date}</h1>
            </td>
            <td >
                <h1 className='text-base text-textColor font-normal px-3 py-1 rounded-lg bg-slate-300 inline-block'>{role}</h1>
            </td>
            <th>
                <div className='w-32'>
                       <form onSubmit={handleRoleChange}>
                       <select
                            type="select"
                            id='Category'
                            name="category"
                            className="w-full px-2 py-1  border-[1px] text-lg font-normal  rounded-md border-gray-300 focus:outline-none focus:border-primery bg-gray-50 text-gray-800"
                            value={changeUserRole}
                            onChange={handleUserRole}  >
                            <option disabled>Select User Role</option>
                            <option value="user">user</option>
                            <option value="surveyor">surveyor</option>
                            <option value="proUser">ProUser</option>
                            <option value="admin">Admin</option>
                        </select>
                        <button type="submit" className='text-base font-medium bg-buttonHover hover:to-buttonHover w-full py-1 px-3 mt-2 rounded-lg'>Change Role</button>
                       </form>
                    </div>
            </th>
      </tr>
    )
}

export default UserCard