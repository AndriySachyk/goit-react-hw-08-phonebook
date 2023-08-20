import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./sliceContacts";
import { filterReducer } from "./sliceFilter";
import { authReducer } from "./auth/authSlice";


export const store = configureStore({reducer:{
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
}})