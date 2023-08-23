const { createSlice } = require("@reduxjs/toolkit");
const { signupThunk, loginThunk,  refreshThunk,  } = require("./thunksUsers");


const handleFulfilledSindUp = (state, { payload }) => {
    state.user = payload.user
	state.token = payload.token
    state.isLoggedIn = true;
}

const handleFulfilledLogin = (state, {payload}) => {
    state.token= payload.token
    state.user = payload.user
    state.isLoggedIn = true;
}


const handlePendingRefresh = (state) => { 
    state.isRefreshing = true;   
 }

const handleFulfilledRefresh = (state, {payload}) => {
    console.log('payload', payload)
    state.user = payload
    state.isLoggedIn = true;
    state.isRefreshing = false;
}

const handleRejectedRefresh = (state) => {
    state.isRefreshing = false;  
 }

const initialState = {
	user: null,
	token: '',
    isLoggedIn: false,
    isRefreshing: false,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        LogOut(state){
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
        }
    },
    extraReducers: (builder)=>
    builder
        .addCase(signupThunk.fulfilled, handleFulfilledSindUp)
        .addCase(loginThunk.fulfilled, handleFulfilledLogin)
        .addCase(refreshThunk.pending, handlePendingRefresh)
        .addCase(refreshThunk.fulfilled, handleFulfilledRefresh)
        .addCase(refreshThunk.rejected, handleRejectedRefresh),

}) 


export const authReducer  = authSlice.reducer
export const {LogOut} = authSlice.actions