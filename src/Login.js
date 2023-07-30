import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React from 'react'
import { auth, provider } from './firebase'

const Login = () => {
    const signIn =(e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch((e)=>alert(e.msg)); 
    }
  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="" />
            <h1>Sign In to Slack</h1>
            <p>slack.com</p>
            <Button onClick={signIn}>Sign In With Google</Button>
        </LoginInnerContainer>

    </LoginContainer>
  )
}

export default Login
const LoginContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`
const LoginInnerContainer = styled.div`
padding: 100px;
text-align: center;
background-color: white;
border-radius: 10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);
>img{
    height: 100px;
    object-fit: contain;
    margin-bottom: 40px;
}
>button{
     margin-top:50px;
     text-transform:inherit !important;
     background-color:#0a8d48 !important;
     color:white;
}
`