import { Link, useLocation, useNavigate } from 'react-router-dom'
import SocialLogin from './SocialLogin'
import useAuth from '../../hooks/useAuth'
import { uploadImage } from '../../apis/Utils'
import toast from 'react-hot-toast'
import { getToken } from '../../apis/auth'
import {TbFidgetSpinner} from 'react-icons/tb'

const SignUp = () => {
  const {logOut}=useAuth()
  const navigate = useNavigate()
  const location=useLocation()
  const from=location?.state?.from?.pathname || '/'
  const { createUser, updateUserProfile, loading } = useAuth()
  const handelform = async (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.image.files[0]
    createUser(email, password)
      .then(async (res) => {
        await getToken(res.user?.email)
          .then(res => {
            uploadImage(photo)
              .then(res => {
                updateUserProfile(name, res?.data?.display_url)
                  .then((res) => {
                    toast.success('Account created successfully! Please log in.')
                    logOut()
                    navigate('/login')
                    return
                  })
              })
            return
          })
          .catch(error => {
            toast.error(error)
          })

      })
      .catch((error) => {
        toast.error(error.message)
        return
      })
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='flex flex-col p-10 rounded-lg bg-white text-gray-900 lg:w-5/12 my-10'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Create a new Account</h1>
          <p className='text-lg  text-gray-400'>Welcome to Survey monkey</p>
        </div>
        <form onSubmit={handelform}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-1 text-lg text-gray-600'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-3 border-[2px] text-base rounded-md border-gray-300 focus:outline-none focus:border-primery bg-gray-50 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-1 text-lg text-gray-600'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-1 text-lg text-gray-600'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-3 border-[2px] text-base rounded-md border-gray-300 focus:outline-none focus:border-primery bg-gray-50 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-lg text-gray-600 mb-1'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-3 border-[2px] text-base rounded-md border-gray-300 focus:outline-none focus:border-primery bg-gray-50 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-primery w-full rounded-md py-3 text-white text-lg'>
               {
                loading?<TbFidgetSpinner className='mx-auto animate-spin text-2xl'></TbFidgetSpinner> : 'Continue'
              }
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-lg text-gray-600 dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        {/* socialMedia */}
        <SocialLogin></SocialLogin>
        <p className='px-6 text-lg  text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
