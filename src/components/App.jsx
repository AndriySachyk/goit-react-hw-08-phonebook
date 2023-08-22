// import {Section} from './Section/Section';
// import { FormContact } from './FormContact/FormContact';
// import {ListContact} from './ListContact/ListContact';
// import {Filter} from './FilterContact/FilterContact';
// import { useDispatch, useSelector, } from 'react-redux';
// import { useEffect } from 'react';
// import { getAllContactsThunk } from 'redux/thunks';
// import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
// import Loading from './Loading/Loading';
// import Error from './Error/Error';
// // import { selectContacts } from 'redux/selectors';

import ContactsPage from "pages/ContactsPage/ContactsPage"
import LayoutPage from "pages/LayoutPage/LayoutPage"
import LoginPage from "pages/LoginPage/LoginPage"
import RegisterPage from "pages/RegisterPage/RegisterPage"
import { Route, Routes } from "react-router-dom"
import Error from "./Error/Error"
// import {  useSelector } from "react-redux"
// import { selectToken } from "redux/selectors"
// import NotAuth from "./NotAuth/NotAuth"
import  { RestrictedRoute } from "guards/RestrictedRoute"
import  { PrivateRoute } from "guards/PrivateRoute"
import Home from "./Home/Home"
import { useDispatch, useSelector } from "react-redux"
import { selectIsRefreshing,  } from "redux/selectors"
import { refreshThunk } from "redux/auth/thunksUsers"
import { useEffect } from "react"
// import { useEffect } from "react"
// import { refresh } from "api/contactsAPI"
// import { refreshThunk } from "redux/auth/thunksUsers"
// import { useDispatch } from "react-redux"



// import React from 'react'





const App = () => {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(()=>{
    dispatch(refreshThunk())
  },[dispatch])

  return  isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>

        

      <Routes>
        <Route path="/" element={<LayoutPage/>} > 
          <Route index element={<Home/>} />
          <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage/>} />
          }
        />
          
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </>
)
}

export default App
