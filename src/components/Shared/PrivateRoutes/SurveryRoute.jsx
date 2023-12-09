import { Navigate } from "react-router-dom"
import Loader from "../Loading/Loader"
import useRole from "../../../hooks/useRole";


const AdminRoutes = ({ children }) => {
    const [role, isloading]=useRole()
    console.log(role);
    if (isloading) {
        return <Loader/>
    }
    if (role==='proUser') {
        return children
    }
    return (
        <Navigate to='/dashboard'></Navigate>
    )
}

export default AdminRoutes