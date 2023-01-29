import React, { useEffect, useState } from 'react'
import Comment from './Comment'
import Comments from './Comments'
import axios from 'axios';
import { useSelector } from 'react-redux';

function CommentContainer(videoId) {
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
    <div>
      <Comments/>
      {comments.map(comment=>(
          <Comment key={comment._id} comment={comment}/>
      ))}
    </div>
  )
}

export default CommentContainer
