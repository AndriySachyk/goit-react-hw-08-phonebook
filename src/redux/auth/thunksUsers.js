import { createAsyncThunk } from "@reduxjs/toolkit"
import {  login, refresh, signUp } from "api/contactsAPI"
import Notiflix from "notiflix";




export const signupThunk = createAsyncThunk('auth/signUp', async(body, { rejectWithValue })=>{
    try {        
        return await signUp(body)      
    }  catch (error) {
        Notiflix.Notify.failure(`You have invalid registration`);
        console.log('error', error) 
        return rejectWithValue(error.message);
      }  
})


export const loginThunk = createAsyncThunk('auth/login', async(body, { rejectWithValue })=>{
    try {
       return await login(body) 
    } catch (error) {
        Notiflix.Notify.failure(`You have invalid login`);
        return rejectWithValue(error.message);
    }    
})






export const refreshThunk = createAsyncThunk(
	'auth/refresh',
	async (_, { rejectWithValue }) => {
		try {
			return await refresh()
		} catch (error) {
			console.log(error)
			return rejectWithValue('')
		}
	}
)
