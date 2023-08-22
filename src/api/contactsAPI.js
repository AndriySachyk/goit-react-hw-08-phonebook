import Notiflix from "notiflix";
import axios from "axios"
// import {  useLocation, } from "react-router-dom";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'


export const setTokenToLocal = (token) => {
    const tokenOld = localStorage.getItem('token')
    tokenOld && localStorage.removeItem('token')
	localStorage.setItem('token', JSON.stringify(token))
}



export const setToken = token => {
    console.log('Axios', axios.defaults.headers.common['Authorization'])
 return axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

}

export const dellToken = () => { 
    delete  axios.defaults.headers.common.Authorization
}

export const signUp = async (body) =>{
    
    const {data} = await axios.post('/users/signup', body)
    setTokenToLocal(data.token)
    setToken(data.token)
    // console.log('data', data)
    // console.log('body', body)
    Notiflix.Notify.success('You have successful registration');
    return data
}

export const login = async (body) =>{
    const {data} = await axios.post("users/login", body)
    setTokenToLocal(data.token)
    // console.log('data', data)
    Notiflix.Notify.success(`Welcome`);
    setToken(data.token)
    // console.log('data.token1', data.token)
    return data
}


export const logOut = async (body) =>{
    const {data} = await axios.post("users/logout", body)
    
    Notiflix.Notify.success(`Successful exit `);
    
    return data
}


export const refresh = async () => {
    const token = localStorage.getItem('token')
    // console.log('token', token)
    
    token && setToken( JSON.parse(token))
	const {data}  = await axios.get('users/current')
    // console.log('data.token2', data.token)
    // console.log('data', data)

	return data
}



export const getAllContacts = async()=>{
    const token = localStorage.getItem('token')
    // console.log('token', token)
    
    token && setToken( JSON.parse(token))
    const {data} = await axios.get('contacts')
    return data
} 


export const addContacts = async (newData) =>{
    const token = localStorage.getItem('token')
    // console.log('token', token)
    
    token && setToken( JSON.parse(token))
    const {data} = await axios.post('contacts', newData)
    return data
}
// password

export const deleteContact = async (id) =>{
    const token = localStorage.getItem('token')
    // console.log('token', token)
    
    token && setToken( JSON.parse(token))
    const {data} = await axios.delete(`contacts/${id}`)
    return data
}



// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzNjg2Y2M4MTAwNDAwMTQ5ZGEwMGUiLCJpYXQiOjE2OTI3MTE2NDB9.GK6Ipid8unrsoftcwIm9F_9LK8Xkjkc1LEjm4AuP-uA
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzNjg2Y2M4MTAwNDAwMTQ5ZGEwMGUiLCJpYXQiOjE2OTI3MTE2NDB9.GK6Ipid8unrsoftcwIm9F_9LK8Xkjkc1LEjm4AuP-uA


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0YmIyOWM4MTAwNDAwMTQ5ZGE0NDUiLCJpYXQiOjE2OTI3MTE3MjF9.Pf0q8gp7Ayc_fZFcEu1AwdfD-H5wSCqe9Q-OQGvKo10
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU0YmIyOWM4MTAwNDAwMTQ5ZGE0NDUiLCJpYXQiOjE2OTI3MTE3MjF9.Pf0q8gp7Ayc_fZFcEu1AwdfD-H5wSCqe9Q-OQGvKo10


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzNjg2Y2M4MTAwNDAwMTQ5ZGEwMGUiLCJpYXQiOjE2OTI3MTIxNDV9.sxsRtzM-0bIL4poXPrG_-TsfAsByhBNE9BM6JPnTBFU
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzNjg2Y2M4MTAwNDAwMTQ5ZGEwMGUiLCJpYXQiOjE2OTI3MTIxNDV9.sxsRtzM-0bIL4poXPrG_-TsfAsByhBNE9BM6JPnTBFU