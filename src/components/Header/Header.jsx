import {  HeaderContainer, HeaderBox, HeaderBtn, Title, UserName, HeaderBtnBox } from './Header-style'
import { selectIsLoggedIn, selectProfile,  } from 'redux/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LogOut,  } from 'redux/auth/authSlice'
import { dellToken, } from 'api/contactsAPI'

const Header = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()
  

  const user = useSelector(selectProfile)

  const isLoggedIn = useSelector(selectIsLoggedIn)



  const handleLogOut = () => { 
    dispatch(LogOut())
    localStorage.removeItem('token')
    dellToken()
  }


 

  return (
    <>
        <HeaderContainer>
          <HeaderBox>
            { isLoggedIn  && <UserName>{user.name}</UserName>}
        
              <Title >Phone Book</Title>
            <HeaderBtnBox>
              <HeaderBtn type='button' onClick={() =>
                isLoggedIn ? handleLogOut() : navigate('/login')
              } >{ isLoggedIn ? "LogOut": "LogIn"}</HeaderBtn>
              {!isLoggedIn && <HeaderBtn onClick={()=>navigate('/register')}>SignUp</HeaderBtn>}
            </HeaderBtnBox>
            
          </HeaderBox>
        </HeaderContainer>
    </>
  )
}

export default Header