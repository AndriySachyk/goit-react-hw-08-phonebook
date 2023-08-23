import Notiflix from "notiflix";
import axios from "axios"

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'


export const setTokenToLocal = (token) => {
    const tokenOld = localStorage.getItem('token')
    tokenOld && localStorage.removeItem('token')
	localStorage.setItem('token', JSON.stringify(token))
}



export const setToken = token => {
 return axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

}

export const dellToken = () => { 
    delete  axios.defaults.headers.common.Authorization
}

export const signUp = async (body) =>{
    
    const {data} = await axios.post('/users/signup', body)
    setTokenToLocal(data.token)
    setToken(data.token)
    Notiflix.Notify.success('You have successful registration');
    return data
}

export const login = async (body) =>{
    const {data} = await axios.post("users/login", body)
    setTokenToLocal(data.token)
    Notiflix.Notify.success(`Welcome`);
    setToken(data.token)
    return data
}


export const logOut = async (body) =>{
    const {data} = await axios.post("users/logout", body)
    
    Notiflix.Notify.success(`Successful exit `);
    
    return data
}


export const refresh = async () => {
    const token = localStorage.getItem('token')
    
    token && setToken( JSON.parse(token))
	const {data}  = await axios.get('users/current')

	return data
}



export const getAllContacts = async()=>{

    const {data} = await axios.get('contacts')
    return data
} 


export const addContacts = async (newData) =>{

    const {data} = await axios.post('contacts', newData)
    return data
}

export const deleteContact = async (id) =>{

    const {data} = await axios.delete(`contacts/${id}`)
    return data
}
