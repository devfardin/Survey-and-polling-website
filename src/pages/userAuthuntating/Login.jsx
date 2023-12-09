import { Link, useLocation, useNavigate } from 'react-router-dom'
import SocialLogin from './SocialLogin'
import toast from 'react-hot-toast'
import { getToken, saveUser } from '../../apis/auth'
import useAuth from '../../hooks/useAuth'
import { TbFidgetSpinner } from 'react-icons/tb'
const Login = () => {
  const location=useLocation()
  const from=location?.state?.from?.pathname || '/'
  const navigate = useNavigate()
  const { signIn, loading } = useAuth()

  const handelform = async (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(async(res) => {
        await getToken(res.user?.email)
        await saveUser(res.user)
        toast.success('Login Success')
        navigate(from, {replace:true})
        return
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
          <h1 className='my-3 text-4xl font-bold'>Login your account</h1>
        </div>
        <form onSubmit={handelform}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-1 text-lg'>
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
                <label htmlFor='password' className='text-lg mb-1'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='current-password'
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
              className='bg-primery w-full rounded-md py-3 text-white text-lg'
            >
               {
                loading?<TbFidgetSpinner className='mx-auto animate-spin text-2xl'></TbFidgetSpinner> : 'Continue'
              }
            </button>
          </div>
        </form>
        <div className='space-y-1'>
          <button className='text-base mt-1 hover:underline hover:text-rose-500 text-gray-400'>
            Forgot password?
          </button>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-lg dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
       {/* Social Medial */}
       <SocialLogin></SocialLogin>
        <p className='px-6 text-base text-center text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <Link
            to='/signup'
            className='hover:underline hover:text-rose-500 text-gray-600'>
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Login
