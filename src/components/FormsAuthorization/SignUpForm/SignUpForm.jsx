import React from 'react'
import { BtnForm, FormBox, InputForm, LabelForm, LinkForm, TitleForm } from '../Form-style'
import { signupThunk } from 'redux/auth/thunksUsers';
import { useDispatch } from 'react-redux';




const SignUpForm = () => {

  const dispatch = useDispatch()



  const handleSubmit = event => {
    const form = event.target


    console.log('btn.disabled', )

    event.preventDefault();

    
    console.log('form', form)
      const body = {
        name: form.elements.name.value,
        email:form.elements.email.value,
        password:form.elements.password.value,
    }
    console.log('body', body)

    


    dispatch(signupThunk(body))
      form.reset()
      
    };

  return (
    
    <FormBox onSubmit={handleSubmit} >
          <TitleForm>SignUp</TitleForm>
            <LabelForm htmlFor="email">
              Email
                <InputForm 
                  type="email" 
                  name="email" 
                  id="email" 
                  required
                />
            </LabelForm>
            <LabelForm htmlFor="name">
              Name
                <InputForm 
                  type="text" 
                  name="name" 
                  id="name" 
                  required  
                />
            </LabelForm>
            <LabelForm htmlFor="password">
              Password
                <InputForm 
                  type="password" 
                  name="password" 
                  required
                  
                />
            </LabelForm>
            <LinkForm to={'/login'}>Login</LinkForm>
            <BtnForm id='btn-sub' type='submit'>SignUp</BtnForm>
        </FormBox>
  )
}

export default SignUpForm