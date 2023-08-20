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



// import React from 'react'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutPage/>} > 
          <Route path="login" element={<LoginPage/>} />
          <Route path="register" element={<RegisterPage/>} />
          <Route path="contacts" element={<ContactsPage/>} />
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </>
)
}

export default App
