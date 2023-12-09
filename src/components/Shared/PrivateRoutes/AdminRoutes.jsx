import { Navigate } from "react-router-dom"
import useRole from "../../../hooks/useRole"
import Loader from "../Loading/Loader"
const AdminRoutes = ({ children }) => {
    const [role, isloading]=useRole()
    if (isloading) {
        return <Loader/>
    }
    if (role==='admin') {
        return children
    }
    return (
        <Navigate to='/dashboard'></Navigate>
    )
}

export default AdminRoutes