import axiosSecure from ".";

export const getAllSurvery= async() =>{
    const {data}=await axiosSecure.get('/surverys')
    return data
}
export const getSurvery= async(id)=>{
    const {data}= await axiosSecure.get(`/surverys/${id}`)
    return data
}
export const getMySurvery= async(email) =>{
    const {data}=await axiosSecure.get(`/mysurvery/${email}`)
    return data
}
// getUpdate data
export const getUpdateData= async(id)=>{
    const {data}= await axiosSecure.get(`/updateservery/${id}`)
    return data
}

export const getupdateSurvery= async(id, serveryInfo) =>{
    const {data}=await axiosSecure.put(`/updateservery/${id}`, serveryInfo)
    return data
}
// Post user feedback
export const getUserFeedbackPost= async(serveryInfo) =>{
    const {data}=await axiosSecure.post(`/userFeedback`, serveryInfo)
    return data
}

// get user feedback
export const getUserFeedback= async()=>{
    const {data}= await axiosSecure.get('/getAllComment')
    return data
}

export const getSurveryPolling= async(pullingInfo)=>{
    const {data}= await axiosSecure.post('/surverypolling', pullingInfo)
    return data
}

// Udate and post vote 
export const getVotedUpdate= async(id, vote) =>{
    const {data}=await axiosSecure.put(`/surveryvote/${id}`, {vote})
    return data
}
// User Like and disLike
export const getLike= async(id, like) =>{
    const {data}=await axiosSecure.put(`/getLike/${id}`, {like})
    return data
}
export const getDislike= async(id, dislike) =>{
    const {data}=await axiosSecure.put(`/getdislike/${id}`, {dislike})
    return data
}

// get user  pricing
export const getPricing= async()=>{
    const {data}= await axiosSecure.get('/pricingplan')
    return data
}

export const pricingData= async(id)=>{
    const {data}= await axiosSecure.get(`/pricing/${id}`)
    return data
}