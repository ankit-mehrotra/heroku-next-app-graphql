import React, { useState } from 'react'

const Comments = () => {
    const[comments,setComments] = useState([]);
    const[comment,setComment] = useState('')
    const fetchComments = async () => {
        const response = await fetch('api/comments');
        const data = await response.json();
        setComments(data)
    }

    const postComment = async () =>{
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment}),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
    }
    return (
        <div>
            <input 
                type="text"
                onChange={(e) => setComment(e.target.value)}
                value={comment}/>
            <button onClick={postComment}>Post Comment</button>
            <button onClick={fetchComments}>Get Comments</button>
            {
                comments.map(comment => <h2>{comment.id}-{comment.comment}</h2>)
            }
        </div>
    )
}



export default Comments
