import React from 'react'
import { LinkForm, BtnForm, FormBox, InputForm, LabelForm, TitleForm } from '../Form-style'

const LoginForm = () => {
  return (
    <div>
        
        <FormBox>
          <TitleForm>Login</TitleForm>
            <LabelForm htmlFor="userName">
              Name
                <InputForm type="text" name="userName" id="userName" />
            </LabelForm>
            <LabelForm htmlFor="password">
              Password
                <InputForm type="password" name='password' id='password' />
            </LabelForm>
            <LinkForm to={'/register'}>SignUp</LinkForm>
            <BtnForm>Login</BtnForm>
        </FormBox>
    </div>
  )
}

export default LoginForm