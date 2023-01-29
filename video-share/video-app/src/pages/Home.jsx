import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Img2 from "../components/images/posters/img2.jpg"
import Img5 from "../components/images/posters/img5.jpg"
import Img6 from "../components/images/posters/img6.jpg"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    color: ${({theme}) => theme.text};
`
function Home({type}){
    const [videos, setVideo] = useState([]);
    useEffect(()=>{
        const fetchVideo = async()  =>{
            
            const res = await axios.get(`video/${type}`)
           // const res = await axios.get(`video/find/63404c53f6036a72c21dacd7`)
            setVideo(res.data)
        }
        fetchVideo()
    },[type])
    return(
        <Container>
            {videos.map((video)=>(
            <Card key={video._id} video={video}/>))} 
            
        </Container>
    )
}
export default Home