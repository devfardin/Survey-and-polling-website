import React from 'react'
import { IoMdInformationCircleOutline } from "react-icons/io";
import { CiUndo } from 'react-icons/ci';
import { RxLoop } from 'react-icons/rx';
import { getPublishedStatus } from '../../../../apis/admin';
import toast from 'react-hot-toast';


const PostCard = ({ post, index }) => {
    const { _id, title, endDate, description, selectedCategory, selectedOption, voted, like, dislike, message, status, email } = post


    const handlePublishe=(id)=>{
        getPublishedStatus(id)
            .then((res) => {
                if (res.modifiedCount > 0) {
                  toast.success('Post Published')
                  window.location.reload()
                }
            })
            .catch(()=>{
                toast.error('error')
            })
    }

    return (
        <tr className='border-b py-10  border-sectionbg'>
            <td>
                <div className="flex items-center space-x-4">
                    <div className='text-center'>
                        <div className="text-lg font-normal text-black1 text-left mt-1">{index+1}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="flex items-center space-x-4">
                    <div className='text-center'>
                        <div className="text-lg font-normal text-black1 text-left mt-1">{title}</div>
                    </div>
                </div>
            </td>
            <td className='text-base text-textColor font-normal'>
                <div className='flex gap-1'>
                    <h1>{selectedCategory}</h1>
                </div>
            </td>
            <td className='w-52'>
                <h1 className='text-base text-textColor cursor-pointer font-normal tooltip text-left' data-tip={description}>{description.slice(0,40)}</h1>
            </td>
            <td >
                <h1 className='text-base text-textColor font-normal px-3 py-1 rounded-lg bg-slate-300 inline-block'>{status}</h1>
            </td>
            <th>
                <div className='flex gap-2'>


                    {/* published */}
                    <button onClick={() =>handlePublishe(_id) } className=" w-9 h-9 grid place-items-center  bg-[#DDE8F8]  rounded-full tooltip text-base font-normal" data-tip="Published">
                        <CiUndo className='text-xl  text-primery'> </CiUndo>
                    </button>
                   
                </div>
            </th>
        </tr>
    )
}

export default PostCard