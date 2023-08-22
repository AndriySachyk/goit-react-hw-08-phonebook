import React from 'react'
import { BtnHome, TitleHome } from './Home-style'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()


  return (<>
        
        <TitleHome>Phone Book</TitleHome>
        <BtnHome type='button' onClick={()=> navigate('/contacts')}>Contacts</BtnHome>
  </>
  )
}

export default Home