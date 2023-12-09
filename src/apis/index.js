import axios from "axios";
import { clearCookie } from "./auth";
const axiosSecure= axios.create({
    baseURL:import.meta.env.VITE_AXIOX_BAGEURL,
    withCredentials: true
})

axiosSecure.interceptors.response.use(response=> response, async error=>{
    console.log('Error tracked in the interceptors', error.response);
    if(error.response && error.response.status===401|| error.response.status===403){
       await clearCookie()
       window.location.replace('/')
    }
    return Promise.reject(error)
})
export default axiosSecure