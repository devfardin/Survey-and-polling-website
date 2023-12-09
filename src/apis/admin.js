import axiosSecure from ".";

// chanse User Role for admin
export const getupdateUserRole= async(id, userRole) =>{
    const {data}=await axiosSecure.put(`/changeRole/${id}`, userRole)
    return data
}

// chanse User Role for admin
export const getProUser= async(id) =>{
    const {data}=await axiosSecure.put(`/makeproUser/${id}`)
    return data
}
// Surverys post published 
export const getPublishedStatus= async(id) =>{
    const {data}=await axiosSecure.put(`/surveryStatusPublished/${id}`)
    return data
}
// Surverys post  upPublished
export const getUnPublishedStatus= async(id) =>{
    const {data}=await axiosSecure.put(`/surveryStatusUnPublished/${id}`)
    return data
}

// Get Survery Post request
export const getpostRequest =async()=>{
    const {data}= await axiosSecure.get('/allPostRequest')
    return data
}