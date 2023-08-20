import axios from "axios"
axios.defaults.baseURL = 'https://connections-api.herokuapp.com'



const setTokenToLocal = (token) => {
	localStorage.setItem('token', JSON.stringify(token))
}
const setToken = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`
}



export const signUp = async (body) =>{
    
    const {data} = await axios.post('/users/signup', body)
    setTokenToLocal(data.token)
    setToken(data.token)
    console.log('data', data)
    console.log('body', body)
    return data
}

export const login = async (body) =>{
    const {data} = await axios.post("/users/login", body)
    return data
}

export const getAllContacts = async()=>{
    const {data} = await axios.get('/contacts')
    return data
} 


export const addContacts = async (newData) =>{
    const {data} = await axios.post('/contacts', newData)
    return data
}
// password

export const deleteContact = async (id) =>{
    const {data} = await axios.delete(`/contacts/${id}`)
    return data
}
