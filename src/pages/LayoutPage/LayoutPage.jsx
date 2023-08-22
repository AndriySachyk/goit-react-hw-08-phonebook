import Header from "components/Header/Header"
import { Suspense, useEffect } from "react"
import { Outlet } from "react-router-dom"
import { Container } from "./LayoutPage-style"
import { useDispatch, useSelector } from "react-redux"
import { selectToken } from "redux/selectors"
import { refreshThunk } from "redux/auth/thunksUsers"
// import { refresh } from "api/contactsAPI"

const LayoutPage = () => {

  const dispatch = useDispatch()
  const token = useSelector(selectToken)

  useEffect(()=>{
    !token && dispatch(refreshThunk())
  },[dispatch, token])

  return (
    <>
        <Header/>
        <Container>
          
          <Suspense>
              <Outlet/>
          </Suspense>
        </Container>
    </>
  )
}

export default LayoutPage