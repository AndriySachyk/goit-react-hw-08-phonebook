import React from 'react'
import {  HeaderContainer, HeaderBox, HeaderBtn, Title, UserName } from './Header-style'

const Header = () => {
  return (
    <>
    <HeaderContainer>
       <HeaderBox>
        <UserName>Name</UserName>
        <Title >Phone Book</Title>
        <HeaderBtn type='button' >Login</HeaderBtn>
      </HeaderBox>
    </HeaderContainer>


     
    </>
  )
}

export default Header