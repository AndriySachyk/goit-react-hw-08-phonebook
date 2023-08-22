import Header from "components/Header/Header"
import { Suspense,  } from "react"
import { Outlet } from "react-router-dom"
import { Container } from "./LayoutPage-style"


const LayoutPage = () => {



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