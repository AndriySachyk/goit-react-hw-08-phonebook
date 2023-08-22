import React from 'react'
import { LinkForm, BtnForm, FormBox, InputForm, LabelForm, TitleForm } from '../Form-style'
import { useDispatch, useSelector } from 'react-redux'
import { loginThunk } from 'redux/auth/thunksUsers'
import { selectToken } from 'redux/selectors'
// import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const token = useSelector(selectToken)

  // const navigate = useNavigate()



  console.log('token', token)

  const dispatch = useDispatch()
  
  const handleSubmitLogin =(even)=>{
    even.preventDefault()

    const form = even.target

    console.log('form', form.email.value)
    const body = {
      email: form.elements.email.value,
      password: form.elements.password.value
    }
    console.log('body', body)
  
    dispatch(loginThunk(body))
  

    form.reset()

    // navigate('/contacts')
  }
  return (
    <div>
        
        <FormBox onSubmit={handleSubmitLogin}>
          <TitleForm>Login</TitleForm>
            <LabelForm htmlFor="email">
              Email
                <InputForm type="email" name="email" id="email" required/>
            </LabelForm>
            <LabelForm htmlFor="password">
              Password
                <InputForm type="password" name='password' id='password' required/>
            </LabelForm>
            <LinkForm to={'/register'}>SignUp</LinkForm>
            <BtnForm type='submit'>Login</BtnForm>
        </FormBox>
    </div>
  )
}

export default LoginForm