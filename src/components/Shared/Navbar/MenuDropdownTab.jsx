import { useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import avatarImg from '../../../assets/images/placeholder.jpg'
import toast from 'react-hot-toast'
const MenuDropdownTab = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logOut } = useAuth()
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
        setTimeout(() => {
          toast.success('LogOut successfull')
          window.location.reload()
        }, 1000);
    })
    .catch((error)=>{
       toast.error(error?.message)
    })
  }

  return (
    <div className='relative'>
      <div className='flex justify-center flex-row items-center gap-3 mt-7 mb-2'>
       
        <div
          onClick={() => setIsOpen(!isOpen)}
          className=' md:py-1 md:px-2 flex flex-row items-center rounded-full cursor-pointer'>
          <div className=' md:block'>
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
              height='50'
              width='50'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='z-10 absolute  shadow-md w-[40vw] md:w-[20vw] bg-white rounded-lg overflow-hidden left-40 bottom-14 text-sm transition-all duration-500'>
          <div className='flex flex-col text-center cursor-pointer py-3 border-2 border-primery rounded-lg'>
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
              user?<>
                 <a href='/dashboard'
              className='px-4 py-2 hover:bg-neutral-100 transition font-semibold text-base'>
              Dashboard
            </a>
            <button onClick={handleLogOut}
              className='px-4 py-3 text-center text-lg hover:bg-neutral-100 transition font-semibold' >
              Logout
            </button>
              </> :
              <>
               <a href='/login'
              className='px-4 py-2 hover:bg-neutral-100 transition font-semibold text-base'>
              Login
            </a>
            <a href='/signup'
              className='px-4 py-2 hover:bg-neutral-100 transition font-semibold text-base'
            >
              Sign Up
            </a>
            </>
            }
           
           
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuDropdownTab

