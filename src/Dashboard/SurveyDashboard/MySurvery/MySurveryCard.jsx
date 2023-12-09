import React, { useState } from 'react'
import { LiaEdit } from 'react-icons/lia';
import { BsEye } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const MySurveryCard = ({ mySurvery }) => {
    const { _id,title, endDate, description, selectedCategory, selectedOption, voted, like, dislike, message, status, email } = mySurvery

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-gules-seven.vercel.app/survery/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            setTimeout(() => {
                                window.location.reload()
                            }, 1000);
                          
                        }
                    })
            }
        });
    }
    return (
        <tr className='border-b py-10  border-sectionbg'>
            <td>
                <div className="flex items-center space-x-4">
                  <div>
                        <div className="text-lg font-normal text-black1">{title}</div>
                        <div className='flex gap-3'>
                            <span className='text-base text-textColor font-normal '>
                                {/* $ {minSalary} - {maxSalary}/ {salaryType} */}
                                {selectedCategory}
                            </span>
                        </div>
                    </div>
                </div>
            </td>
            <td className='text-base text-textColor font-normal'>
                <div className='flex gap-1'>
                   {
                    status == 'published'? <span className='text-sm bg-[#DDE8F8] text-green-600 px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>{status}</span> :
                    <span className='text-sm bg-[#DDE8F8] text-red-500 px-4 rounded-full text-center py-1 mt-1 inline-block ml-2 '>{status}</span>
                   }
                   
                </div>
            </td>
            <td >
                <h1 className='text-base text-textColor font-normal'>{endDate}</h1>
            </td>
            <th>
                <div className='flex gap-x-3'>
                    <Link to={`/dashboard/updateservery/${_id}`}  className="w-9 h-9 grid place-items-center  bg-[#DDE8F8]  rounded-full tooltip font-normal" data-tip="Edit Survery">  <LiaEdit className='text-xl  text-primery'> </LiaEdit>
                    </Link>

                    <button onClick={() => handleDelete(_id)} className="w-9 h-9 grid place-items-center  bg-[#DDE8F8]  rounded-full tooltip font-normal" data-tip="Delete Survery">
                        
                        <RxCross2 className='text-xl  text-primery'> </RxCross2>
                    </button>

                    <Link to={`/survery/${_id}`} className="w-9 h-9 grid place-items-center  bg-[#DDE8F8]  rounded-full tooltip font-normal" data-tip="View Survery">
                        <BsEye className='text-xl  text-primery'> </BsEye>
                    </Link>
                </div>
              
            </th>
        </tr>
    )
}

export default MySurveryCard