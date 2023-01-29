import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Img5 from "./images/posters/img5.jpg"
import {format} from "timeago.js"
import { useEffect } from "react";
import axios from "axios";
const Containter = styled.div`
   width: ${(props)=>props.type="sm" !== "360px"};
   cursor: pointer;
   margin-bottom: ${(props)=>props.type === "sm" ? "5px" : "45px"};
   display: ${(props)=>props.type === "sm" && "flex"};
   
`
const Image = styled.img`
 width: 100%;
 height: 202px;
`
const Details = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

const Text = styled.div`
    
`
const Title = styled.h1`
    font-size: 16px;
    color: ${({theme})=>theme.text};
`
const ChannelName = styled.h2`
    font-size: 12px;
    color: ${({theme})=>theme.textSoft};
    margin-top: 5px;
`
const Info = styled.div`
    font-size: 9px;
    color: ${({theme})=>theme.textSoft};
`
const ChannelImge = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: ${(props)=>props.type === "sm" && "none"};
`
function Card({type, video}){
    const [channel, setChannel] = useState({});
    useEffect(()=>{
        const fetchChannel = async ()=>{
            const res = await axios.get(`user/find/${video.userId}`)
            setChannel(res.data)
        }
        fetchChannel()
    },[video.userId])
    
    return(
        <Containter type={type} >
            <Link to={`/video/${video._id}`} style={{textDecoration:"none", color:"inherit"}}>
            <Image type={type}  src={video.imgUrl} />
            <Details>
            <ChannelImge type={type} src={channel.img} />
            <Text>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
             <Info>{video.views} Views, {format(video.createdAt)}</Info>
            </Text>
            </Details>
            </Link>
        </Containter>
    )
}
export default Card