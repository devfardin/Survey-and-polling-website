import { useQuery } from '@tanstack/react-query'
import axiosSecure from '../apis'
import useAuth from './useAuth'

const useCart = () => {
    const { user } = useAuth()
    const {refetch, data: userAction = [] } = useQuery({
        queryKey: ['userAction', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data
        }
    })
    return [userAction, refetch]
}

export default useCart