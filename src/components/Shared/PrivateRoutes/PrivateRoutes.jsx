import { Navigate, useLocation } from "react-router-dom"
import useAuth from "../../../hooks/useAuth"
import Loader from "../Loading/Loader"

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth()
    const location =useLocation()
    if (loading) {
        return <Loader/>
    }
    if (user) {
        return children
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    )
}

export default PrivateRoutes