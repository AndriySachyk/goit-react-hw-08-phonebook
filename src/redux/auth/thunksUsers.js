import { createAsyncThunk } from "@reduxjs/toolkit"
import { signUp } from "api/contactsAPI"
import Notiflix from "notiflix";




export const signupThunk = createAsyncThunk('auth/signUp', async(body, { rejectWithValue })=>{
    try {
        Notiflix.Notify.success('You have successful registration');
        
        return signUp(body)      
    }  catch (error) {
        Notiflix.Notify.failure(`You have invalid registration`);
        return rejectWithValue(error.message);
      }  
})


export const loginThunk = createAsyncThunk('auth/signUp', async(body, { rejectWithValue })=>{
    try {
       return signUp(body) 
    } catch (error) {
        return rejectWithValue(error._message)
    }    
})
