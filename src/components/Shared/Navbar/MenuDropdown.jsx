import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/images/placeholder.jpg'
import toast from 'react-hot-toast'
const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logOut } = useAuth()
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
        toast.success('LogOut successfull')
    })
    .catch((error)=>{
       toast.error(error?.message)
    })
  }
  return (
    <div className='relative'>
      <div className='flex flex-row items-center ml-10 gap-3'>
       
        <div
          onClick={() => setIsOpen(!isOpen)}
          className=' md:py-1 md:px-2 flex flex-row items-center rounded-full cursor-pointer'>
          <div className='hidden md:block'>
            <img
              className='rounded-full w-10 h-10 object-cover'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
              height='40'
              width='40'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='z-10 absolute rounded-xl shadow-md w-[40vw] md:w-[20vw] bg-white overflow-hidden right-0 top-14 text-sm'>
            {
                user ? <h1
                to='/'
                className='block md:hidden px-4 py-2 hover:bg-neutral-100 transition font-bold text-base' >
                {user?.displayName}
              </h1>: <h1
              to='/'
              className='block md:hidden px-4 py-2 hover:bg-neutral-100 transition font-semibold text-base' >
              User Name
            </h1>
            }
            
          {
            user? <div className='flex flex-col cursor-pointer'>
            <Link
              to='/dashboard'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
              Dashboard
            </Link>
            <button onClick={handleLogOut}
              className='px-4 py-3 text-left hover:bg-neutral-100 transition font-semibold' >
              Logout
            </button>
          </div>
           : 
          <div className='flex flex-col cursor-pointer'>
          <Link
            to='/'
            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold' >
            Home
          </Link>
          <Link
            to='/login'
            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
            Login
          </Link>
          <Link
            to='/signup'
            className='px-4 py-3 hover:bg-neutral-100 transition font-semibold' >
            Sign Up
          </Link>
        </div>
          }
        </div>
      )}
    </div>
  )
}

export default MenuDropdown
