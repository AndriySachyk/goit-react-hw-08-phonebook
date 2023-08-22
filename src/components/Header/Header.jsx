import {  HeaderContainer, HeaderBox, HeaderBtn, Title, UserName, HeaderBtnBox } from './Header-style'
import { selectProfile, selectToken } from 'redux/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LogOut,  } from 'redux/auth/authSlice'
import { dellToken, } from 'api/contactsAPI'

const Header = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()
  
  const token = useSelector(selectToken)

  const user = useSelector(selectProfile)

  console.log('user', user)

  const handleLogOut = () => { 
    console.log('first')
    dispatch(LogOut())
    localStorage.removeItem('token')
    dellToken()
  }


 

  return (
    <>
        <HeaderContainer>
          <HeaderBox>
            { token  && <UserName>{user.name}</UserName>}
        
              <Title >Phone Book</Title>
            <HeaderBtnBox>
              <HeaderBtn type='button' onClick={() =>
                token ? handleLogOut() : navigate('/login')
              } >{ token? "LogOut": "LogIn"}</HeaderBtn>
              <HeaderBtn onClick={()=>navigate('/register')}>SignUp</HeaderBtn>
            </HeaderBtnBox>
            
          </HeaderBox>
        </HeaderContainer>
    </>
  )
}

export default Header