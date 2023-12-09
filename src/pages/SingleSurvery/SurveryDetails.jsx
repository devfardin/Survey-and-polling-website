import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDislike, getLike, getSurvery, getSurveryPolling, getVotedUpdate } from '../../apis/survery'
import Container from '../../components/Shared/Container'
import { LiaVoteYeaSolid } from "react-icons/lia";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import UserComment from './UserComment';
import UserFeedbacks from './SurveryComments/UserFeedbacks';
import Loader from '../../components/Shared/Loading/Loader';
import useRole from '../../hooks/useRole';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
const SurveryDetails = () => {
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const [role] = useRole()
    const { user } = useAuth()
    const [survery, setSurvery] = useState([])
    useEffect(() => {
        setLoading(true)
        getSurvery(id)
            .then(data => {
                setSurvery(data)
                setLoading(false)
            })
    }, [id])

    const handlePost = () => {
        toast.error("You can't comment on this post. Access is limited to pro users only.")
    }
    const { _id, title, description, selectedCategory, voted, like, dislike, } = survery
    const voteNum=parseInt(voted)
    const handleSurveryPolling = (e) => {
        e.preventDefault()
        const form = e.target
        const report = form.report.value
        const radio = form.radio.value
        const like=parseInt(radio)
        const totalVote=(voteNum+ like)
        const name = user.displayName
        const email = user.email
        const id = _id
        const surverypollingInfo = { report, id, name, email }
        getSurveryPolling(surverypollingInfo)
        getVotedUpdate(_id, totalVote)
            .then(() => {
               toast.success('Thank you! Your survey response has been successfully submitted')
               setTimeout(() => {
                window.location.reload()
               }, 1000);
               return
            })
            .catch(() => {
                toast.error('Oops! Something went wrong')
            })
    }
    const handleLike=()=>{
        const dataLike=parseInt(like)
        const totalLike= dataLike+1;
        getLike(_id, totalLike)
        .then(() => {
            toast.success('Like added successfully!')
            setTimeout(() => {
             window.location.reload()
            }, 1000);
            return
         })
         .catch(() => {
            toast.error('Failed to add like. Please try again later')
         })
    }

    const handleDislike=()=>{
        const dataDislike=parseInt(dislike)
        const totaldislike= dataDislike+1;
        getDislike(_id, totaldislike)
        .then(() => {
            toast.success('Dislike counted successfully!')
            setTimeout(() => {
             window.location.reload()
            }, 1000);
            return
         })
         .catch(() => {
            toast.error('Failed to count dislike. Please try again later')
         })
    }
    return (
        <Container>
            <div className='flex flex-col md:flex-row my-10 gap-10'>
                <div className='flex-1'>
                    {
                        loading ? <Loader /> :
                            <div className='mx-auto'>
                                <h1 className='text-2xl md:text-3xl lg:text-4xl text-black font-semibold'>{title}</h1>
                                <h2 className='text-xl font-normal text-gray-500 my-2'>Category: <span className='text-gray-700'>{selectedCategory}</span></h2>

                                <h2 className='text-xl font-normal text-gray-500 my-2'>Total Vote: <span className='text-gray-700'> {voted}</span></h2>
                                <p className='text-lg text-gray-500 font-normal'>{description}</p>
                                <div className='flex gap-2 mt-2'>

                                    <h1 onClick={handleLike} className='border cursor-pointer rounded-full py-1 px-3 text-base text-white mt-3 items-center bg-primery flex gap-2'><AiOutlineLike className='text-xl' />Like {like}</h1>
                                    <h1 onClick={handleDislike} className='border cursor-pointer rounded-full py-1 px-3 text-base text-white mt-3 items-center bg-primery flex gap-2'><AiOutlineDislike className='text-xl' />Dislike {dislike}</h1>

                                </div>
                            </div>
                    }
                </div>



                {/* servery and poll form */}

                <div className='w-full md:w-[300px]'>
                    <form onSubmit={handleSurveryPolling}>

                        <div className=''>
                            <label className='text-lg mb-1 ml-1 block font-medium text-gray-600' htmlFor="title">Report</label>
                            <textarea type="text" placeholder='Survery Description' name='report' id='description'
                                className='w-full px-2 py-2 h-20  border-[2px] text-lg font-normal  rounded-md border-gray-300 focus:outline-none focus:border-primery bg-gray-50 text-gray-800'> </textarea>
                        </div>

                        <label className='text-lg mt-2 ml-2 block font-medium text-gray-600' >Give a vote</label>

                        <div >
                            <label className='flex gap-2 items-center ml-2'>
                                <input type="radio" id='title' value="1" name='radio'
                                    className=' w-5 h-5 text-blue-600 focus:ring-blue-500 ' />
                                <span className='text-lg cursor-pointer label-text text-gray-700 font-medium'>vote</span>
                            </label>

                        </div>



                        {
                            role === 'user' ? <button className='text-lg font-medium py-2 px-5 bg-buttonstyle hover:to-buttonHover mt-4 rounded' type="submit">
                                Submit Polling
                            </button> : role == 'proUser' && <button className='text-lg font-medium py-2 px-5 bg-buttonstyle hover:to-buttonHover mt-4 rounded' type="submit">
                                Submit Polling
                            </button>
                        }

                        {/* <button className='text-lg font-medium py-2 px-5 bg-buttonstyle hover:to-buttonHover mt-4 rounded' type="submit">
                            Submit Polling
                        </button> */}
                    </form>

                    {
                        role == 'surveyor' ? <button onClick={handlePost} className='text-lg font-medium py-2 px-5 bg-buttonstyle hover:to-buttonHover mt-4 rounded'>
                            Submit Polling
                        </button> : role == 'admin' && <button onClick={handlePost} className='text-lg font-medium py-2 px-5 bg-buttonstyle hover:to-buttonHover mt-4 rounded' >
                            Submit Polling
                        </button>
                    }

                </div>
            </div>


            {/* Comment form and get form date */}
            <div className='mt-16 mx-auto max-w-3xl'>
                <UserComment id={_id} />
                <UserFeedbacks id={_id} />
            </div>
        </Container>
    )
}
export default SurveryDetails