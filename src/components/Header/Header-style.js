import { styled } from "styled-components";



export const HeaderContainer = styled.header`
     /* height: 50px; */
    background-color: #264037;
    padding-top: 15px;
    padding-bottom: 25px;
 

`


export const HeaderBox = styled.div`
    /* width: 100%; */
    width: 1280px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`


export const UserName = styled.h2`
    color: #b0fbdf;
    /* width: 200px; */
    display: block;
    margin: 0;
`


export const Title = styled.h1`
    color: #b0fbdf;
    display: block;
    text-align: center;
    margin: 0;
 
`

export const HeaderBtnBox = styled.div`
    display: flex;
    gap: 15px;
`
export const HeaderBtn = styled.button`
    /* width: 75px; */
    height: 30px;
    font-size: 18px;
    background-color: #264037;
    border-radius: 8px;
    border: solid #b0fbdf 1px;
    color: #b0fbdf;
    &:hover{
        cursor: pointer;
        background-color: #0bcb84;
        color: #272727;
    }
`