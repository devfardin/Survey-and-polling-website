import { getUsers } from '../apis/auth'
import useAuth from './useAuth'
import {useQuery} from '@tanstack/react-query'
const useUsers = () => {
  const {user, loading}=useAuth()
  const {data: users, isLoading}=useQuery({
    enabled: !loading && !!user?.email,
    queryFn: async()=> await getUsers(user?.email),
    queryKey: ['users']
  })
  return [users, isLoading]
}
export default useUsers