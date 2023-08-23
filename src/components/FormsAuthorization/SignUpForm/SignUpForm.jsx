import { BtnForm, FormBox, InputForm, LabelForm, LinkForm, TitleForm } from '../Form-style'
import { signupThunk } from 'redux/auth/thunksUsers';
import { useDispatch, useSelector, } from 'react-redux';
import { selectToken } from 'redux/selectors';




const SignUpForm = () => {

  const token = useSelector(selectToken)
    
  const dispatch = useDispatch()


  const handleSubmit = event => {
    const form = event.target


    console.log('btn.disabled', )

    event.preventDefault();

    
      const body = {
        name: form.elements.name.value,
        email:form.elements.email.value,
        password:form.elements.password.value,
    }

    


    dispatch(signupThunk(body))
      form.reset()
    };



   



  return (
    
    <FormBox onSubmit={handleSubmit} autoComplete="" >
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
            {!token && <LinkForm to={'/login'}>Login</LinkForm>}
            <BtnForm id='btn-sub' type='submit'>SignUp</BtnForm>
        </FormBox>
  )
}

export default SignUpForm