import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth'
import toast from 'react-hot-toast'
import { getToken, saveUser } from '../../apis/auth'
import { useLocation, useNavigate } from 'react-router-dom'

const SocialLogin = () => {
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const { signInWithGoogle } = useAuth()
    const handleGoogleSingIn = async () => {
        signInWithGoogle()
            .then(async (res) => {
                await getToken(res.user?.email)
                await saveUser(res.user)
                toast.success('Login Success')
                // navigate(from, { replace: true })
                return
            })
            .catch((error) => {
                console.log('Login failed');
                toast.error(error?.message)
                return
            })
    }
    return (
        <div onClick={handleGoogleSingIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
            <FcGoogle size={32} />
            <p>Continue with Google</p>
        </div>
    )
}

export default SocialLogin