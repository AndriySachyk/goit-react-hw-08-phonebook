import { Route, Routes } from "react-router-dom"
import  { RestrictedRoute } from "guards/RestrictedRoute"
import  { PrivateRoute } from "guards/PrivateRoute"
import { useDispatch, useSelector } from "react-redux"
import { selectIsRefreshing,  } from "redux/selectors"
import { refreshThunk } from "redux/auth/thunksUsers"
import { lazy, useEffect } from "react"
import LoadingAuth from "./Loading/LoadingAuth/LoadingAuth"

const LayoutPage = lazy(()=> import('../pages/LayoutPage/LayoutPage'))
const Home = lazy(()=> import('../components/Home/Home'))
const RegisterPage = lazy(()=> import('../pages/RegisterPage/RegisterPage'))
const LoginPage = lazy(()=> import('../pages/LoginPage/LoginPage'))
const ContactsPage = lazy(()=> import('../pages/ContactsPage/ContactsPage'))
const Error = lazy(()=> import('../components/Error/Error'))




const App = () => {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(()=>{
    dispatch(refreshThunk())
  },[dispatch])

  return  isRefreshing ? (
    
      <LoadingAuth />

     
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
