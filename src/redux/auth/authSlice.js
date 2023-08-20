const { createSlice } = require("@reduxjs/toolkit");
const { signupThunk,  } = require("./thunksUsers");
const {  handleSignUpFulfilled } = require("redux/handlers");


const handleFulfilled = (state, { payload }) => {
	state.token = payload.token
	state.profile = payload.user
}



const initialState = {
	token: '',
	profile: null,
}


const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        logOut(state){
            state.isLoading = false
			state.error = ''
			state.token = ''
			state.profile = null
        }
    },
    extraReducers: (builder)=>
    builder
        .addCase(signupThunk.fulfilled, handleFulfilled)
        // .addCase(loginThunk.fulfilled, )

}) 


export const authReducer  = authSlice.reducer
export const {logOut} = authSlice.actions