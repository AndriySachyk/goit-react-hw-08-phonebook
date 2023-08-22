const { createSlice } = require("@reduxjs/toolkit");
const { signupThunk, loginThunk,  refreshThunk,  } = require("./thunksUsers");
// const {  handleSignUpFulfilled } = require("redux/handlers");


const handleFulfilledSindUp = (state, { payload }) => {
    state.user = payload.user
	state.token = payload.token
}

const handleFulfilledLogin = (state, {payload}) => {
    state.token= payload.token
    state.user = payload.user
}

const handleFulfilledRefresh = (state, {payload}) => {
    state.token = payload.token
}

const initialState = {
	profile: null,
	token: '',
}


const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        LogOut(state){
            state.isLoading = false
			state.error = ''
			state.token = ''
			state.user = null
        }
    },
    extraReducers: (builder)=>
    builder
        .addCase(signupThunk.fulfilled, handleFulfilledSindUp)
        .addCase(loginThunk.fulfilled, handleFulfilledLogin)
        .addCase(refreshThunk.fulfilled, handleFulfilledRefresh),

}) 


export const authReducer  = authSlice.reducer
export const {LogOut} = authSlice.actions