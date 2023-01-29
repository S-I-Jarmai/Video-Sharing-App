import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import styled from 'styled-components'
import Card from './Card';
const Container = styled.div`
    flex: 2;
`
function Recommendation({tags}) {
    const [video, setVideo] = useState([]);

    useEffect(()=>{
       const fetchVideos = async() =>{
        const res = await axios.get(`/video/tags?tags=${tags}`);
        setVideo(res.data)
       } 
       fetchVideos();
    },[tags])
  return (
    <Container>
      {video.map(video=>(
        <Card type="sm" key={video._id} video={video}/>
      ))}
    </Container>
  )
}

export default Recommendation
