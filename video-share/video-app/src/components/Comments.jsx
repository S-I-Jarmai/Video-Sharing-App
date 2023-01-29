import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Img5 from '../components/images/posters/img5.jpg'
import Comment from './Comment'

const Container = styled.div`

`
const NewComment = styled.div`
display: flex;
align-items: center;
gap: 10px;
margin: 10px 0px;
`
const Input = styled.input`
    border: none;
    background-color: transparent;
    border-bottom: 1px solid gray;
    outline: none;
    padding: 5px;
    width: 100%;
    
`
const Avatar = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;

`


const Comments = ({videoId}) => {
  const {currentUser} = useSelector((state)=>state.user)
  const [comments, setComment] = useState([]);

    
    useEffect(()=>{
        const fetchComments = async ()=>{
            try {
                const res = await axios.get(`/comment/${videoId}`)
                setComment(res.data);
            } catch (err) { }
        };
        fetchComments()
    },[videoId])
  return (
    <Container>
      <Avatar src={currentUser.img}/>
      <NewComment>
        <Input placeholder="Add a comment..."/>
      </NewComment>
      {comments.map(comment=>(
          <Comment key={comment._id} comment={comment}/>
      ))}
    </Container>
  )
}

export default Comments
