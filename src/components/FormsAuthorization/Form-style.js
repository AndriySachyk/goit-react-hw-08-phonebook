import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const FormBox = styled.form`
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    width: 450px;
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 25px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    border: solid gray 1px;
    border-radius: 4px;
    `


export const TitleForm = styled.h2`
    color: #264037;
    text-align: center;
    font-size: 26px;
    margin: 0;
`

export const LabelForm = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: #264037;
    `
export const InputForm = styled.input`
    border-radius: 4px;
    padding: 5px 10px;
    font-size: 16px;
    outline: none;
    border: solid gray 1px;
    &:focus{
        
        outline: solid #264037 1px;
    }
    
    `
export const BtnForm = styled.button`
    font-size: 18px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #b0fbdf;
    border-radius: 8px;
    border: solid #264037 1px;
    color: #264037;
    margin-left: auto;
    margin-right: auto;
    &:hover {
        background-color: #0bcb84;
        cursor: pointer;
    }
    
`

export const LinkForm = styled(Link)`
    margin-left: auto;
  text-decoration: none;
  color: #264037;
  &:hover{
    color: #0bcb84;
    text-decoration: underline;
  }
`