import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Img2 from "../components/images/posters/img2.jpg"
import Img5 from "../components/images/posters/img5.jpg"
import Img6 from "../components/images/posters/img6.jpg"
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Comments from "../components/Comments";
import Comment from "../components/Comment";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

import { fetchSuccess,fetchFailure, fetchStart, like, dislike } from "../redux/videoSlice";
import { format } from "timeago.js";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { subscription } from "../redux/userSlice";
import CommentContainer from "../components/CommentContainer";
import Recommendation from "../components/Recommendation";


const Container = styled.div`
    display: flex;
    gap: 24px;
`
const Content = styled.div`
flex: 5;
`

const VideoWrapper = styled.div`


`
const Title = styled.h1`
font-size: 16px;
font-weight: 500px;
color: ${({theme})=>theme.text};
margin-top: 10px;
`
const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
color: ${({theme})=>theme.textSoft};

`
const Info = styled.span`
    font-size: 12px;
`
 
const Image = styled.img`
 width: 100%;
 height: 350px;
`
const Buttons = styled.div`
display: flex;
gap: 20px;
`
const Button = styled.button`
display: flex;
align-items: center;
gap: 5px;
color: ${({theme})=>theme.text};
font-size: 12px;
background-color: transparent;
border: none;
cursor: pointer;
`
const Hr = styled.hr`
margin: 10px 0px;
border: 0.5px solid ${({theme}) => theme.soft};
`
const ChannelInfo = styled.div`
    display: flex;
    margin-top: 10px;
    align-items: center;
    gap: 10px;
    flex: 1;
`
const ChannelDetails = styled.div`
    display: flex;
    flex: 7;
    align-items: center;
    justify-content: space-between;
`
const ChannelName = styled.span`
display: flex;
gap: 5px;
flex-direction: column;
font-weight: bolder;  
color: ${({theme})=>theme.text};
`
const ChannelCounter = styled.span`
font-size: 10px;
font-weight: 400;
color: ${({theme})=> theme.textSoft};
`
const Text = styled.div`
margin: 10px 0px 0px 45px;
font-weight: 400px;
color: ${({theme})=>theme.text};
`
const LogoImg = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;

`
const SubscribeBTN = styled.button`
background-color: #ce1616;
border: none;
border-radius: 4px;
color: white;
padding: 10px 20px;
cursor: pointer;
`
const VideoFrame = styled.video`
    max-height: 720px;
    width: 100%;
    object-fit: cover;
`
function Video(){
    const {currentUser} = useSelector((state)=>state.user)
    const {currentVideo} = useSelector((state)=>state.video)
    const dispatch = useDispatch();
    const path = useLocation().pathname.split("/")[2]
    
    const [channel, setChannel] = useState({})
    useEffect(()=>{
        const fetchVideo = async ()=>{
            try {
                const videoRes = await axios.get(`/video/find/${path}`)
                //const video = videoRes.data
                const channelRes = await axios.get(`/user/find/${videoRes.data.userId}`)
                setChannel(channelRes.data)
                dispatch(fetchSuccess(videoRes.data))
            } catch (err) {
                
            }
        }
        fetchVideo()
    },[path,dispatch])
    const handleLike = async () =>{
        await axios.put(`/user/like/${currentVideo._id}`)
        dispatch(like(currentVideo._id))
    }   
    const handleDislike = async () =>{
        await axios.put(`/user/dislike/${currentVideo._id}`)
        dispatch(dislike(currentVideo._id))
    } 
    const handleSub = async () =>{
        currentUser.subscirbedUsers.includes(channel._id) 
        ? await axios.put(`/user/unsub/${channel._id}`)
        : await axios.put(`/user/sub/${channel._id}`)
        dispatch(subscription(channel._id))
    }
    return(
        <Container>
            <Content>
                <VideoWrapper>
                    {/*<Image src={Img5}/>*/}
                  <VideoFrame src={currentVideo.videoUrl} controls/>
                                    
                </VideoWrapper>
                <Title>{currentVideo.title}</Title>
                <Details>
                    <Info>{currentVideo.views} views. {format(currentVideo.createdAt)}</Info>
                    <Buttons>
                        <Button onClick={handleLike}>
                        {currentVideo.like?.includes(currentUser._id) ? (
                            <ThumbUpIcon/>
                        ) : (
                            <ThumbUpOutlinedIcon/>
                        )}
                        
                        {currentVideo.like?.length}</Button>
                        <Button onClick={handleDislike}>
                        {currentVideo.dislike?.includes(currentUser._id) ? (
                            <ThumbDownIcon/>
                        ) :(<ThumbDownOffAltOutlinedIcon/>)
                             }   
                            Dislike</Button>
                        <Button>
                        <ReplyOutlinedIcon/>
                            Share</Button>
                        <Button>
                        <AddTaskOutlinedIcon/>
                            Save</Button>
                    </Buttons>
                </Details>
                <Hr/>
                <ChannelInfo>
                   <LogoImg src={channel.img}/>
                   <ChannelDetails>
                    <ChannelName>{channel.name}
                     <ChannelCounter>
                        {channel.subscirber} subscribers
                     </ChannelCounter>
                    </ChannelName>
                    <SubscribeBTN onClick={handleSub}>
                        {currentUser.subscirbedUsers?.includes(channel._id)
                        ? "SUBSCRIBED"
                        :
                        "SUBSCRIBE"}
                    </SubscribeBTN>
                   </ChannelDetails>
                   </ChannelInfo>
                   <Text>
                    {currentVideo.desc}
                   </Text>
                   <Hr/>
                   <Comments videoId={currentVideo._id}/>                    
            </Content>
           <Recommendation tags={currentVideo.tags}/> 
           
        </Container>
    )
}
export default Video