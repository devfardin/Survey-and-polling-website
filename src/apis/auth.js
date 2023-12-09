import axiosSecure from ".";
export const saveUser= async user=>{
    const currentUser= await {
        name: user?.displayName,
        profile: user?.photoURL,
        email: user?.email,
        role: 'user'
    }
    const {data}=axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data 
}
export const getToken= async(email)=>{
    const {data}=axiosSecure.post('/jwt', email)
    return data
}
export const clearCookie= async () =>{
    const {data}=await axiosSecure.get('/logout')
    return data
}
export const surveryData = async(surveryInfo) =>{
    const {data}=await axiosSecure.post('/survery', surveryInfo)
    return data
}
export const getRole= async(email)=>{
    const {data}=await axiosSecure(`/user/${email}`)
    return data.role
}

export const getUsers= async(email)=>{
    const {data}=await axiosSecure(`/user/${email}`)
    return data
}

export const getAllUser= async()=>{
    const {data}=await axiosSecure(`/users`)
    return data
}


