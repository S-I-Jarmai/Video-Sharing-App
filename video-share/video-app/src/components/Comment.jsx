import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Img5 from '../components/images/posters/img5.jpg'
import Comments from './Comments'

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 30px 0px;
`
const Avatar = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
`
const Details = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`
const Name = styled.span`
    font-size: 13px;
    font-weight: bold;
    color: ${({theme})=>theme.text};
`
const Date = styled.span`
    margin-left: 5px;
    font-size: 12px;
    font-weight: 400;
    color: ${({theme})=>theme.textSoft};
`
const Hr = styled.hr`
margin: 10px 0px;
border: 0.5px solid ${({theme}) => theme.soft};
`
const Text = styled.span`
    font-size: 14px;
    font-weight: 100;
    color: ${({theme})=>theme.text};
`
function Comment ({comment}){
    const [channel, setChannel] = useState({});

    useEffect(()=>{
        const fetchComment = async () =>{
            const res = await axios.get(`/user/find/${comment.userId}`)
            setChannel(res.data)
        };
        fetchComment();
    },[comment.userId])
    
  return (
    
    <Container>
        <Avatar src={channel.img}/>
        <Details>
            <Name> {channel.name}  <Date>1, day ago</Date></Name>
            <Text>{comment.desc}</Text>
        </Details>
    </Container>
    
  )
}

export default Comment
