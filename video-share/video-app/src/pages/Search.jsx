import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'
import Card from '../components/Card';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`
function Search() {
    const [videos, setVideos] = useState([]);
    const query = useLocation().search

    useEffect(()=>{
        const fetchVideos = async () =>{
            const res = await axios.get(`/video/search${query}`)
            setVideos(res.data)
        }
        fetchVideos()
    },[query])
    console.log(videos);
  return (
    <Container>
      {videos.map(video =>(
        <Card key={video._id} video={video}/>
      ))}
    </Container>
  )
}

export default Search
