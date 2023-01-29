import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice'
import {auth, provider} from '../firebase.js'
import { signInWithPopup } from 'firebase/auth'



const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: calc(100vh - 56px);
    color: ${({theme})=>theme.text};
    
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px 50px;
    background-color: ${({theme})=>theme.bgLighter};
    border: 1px solid black;
`
const Title = styled.h1`
    font-size: 24px;
`
const SubTitle = styled.h2`
    font-size: 20px;
`
const Input = styled.input`
    border: 1px solid ${({theme})=>theme.soft};
    background-color: transparent;
    border-radius: 5px;
    padding: 10px;
    width: 100%;
    color: ${({theme})=>theme.text};
`
const Button = styled.button`
   font-weight: 500;
   border: none;
   border-radius: 3px;
   padding: 10px 20px;
   cursor: pointer;
   background-color: ${({theme})=>theme.soft};
   color: ${({theme})=>theme.text};
`
const More = styled.div`
    display: flex;
    margin-top: 10px;
    gap: 40px;
    font-weight: 300;
    cursor: pointer;
`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    margin-left: 45px;
`
const Link = styled.span`
   
`

function SignIn () {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleSignin = async (e) =>{
    e.preventDefault()
    dispatch(loginStart())
    try {
      const res = await axios.post('auth/signin', {name, password});
      dispatch(loginSuccess(res.data))
    } catch (err) {
      dispatch(loginFailure())
      
    }
  }
  
  const signInWithGoogle = async () =>{
    dispatch(loginStart())
    signInWithPopup(auth, provider)
    .then((result)=>{
      axios.post("auth/google",{
      name: result.user.displayName,
      email: result.user.email,
      img: result.user.photoURL,
     }).then((res)=>{
      dispatch(loginSuccess(res.data))
      })
     })
    .catch((error)=>{
      dispatch(loginFailure())
    })
  }

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to access more feature</SubTitle>
        <Input placeholder='username' onChange={(e)=>setName(e.target.value)}/>
        <Input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
        <Button onClick={handleSignin}>Sign in</Button>
        <Title>or</Title>
        <Button
        onClick={signInWithGoogle}>Signin with Google</Button>
        <Title>or</Title>
        <Input placeholder='username'/>
        <Input type="email" placeholder='email'/>
        <Input type="password" placeholder='password'/>
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English (US)
        <Links>
        <Link>Help</Link>
        <Link>Privacy</Link>
        <Link>More</Link>
        </Links>
      </More>
    </Container>
  )
}

export default SignIn
