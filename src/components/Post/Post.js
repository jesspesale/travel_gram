import React from 'react';
import "./Post.css"
import { Avatar } from '@mui/material';

function Post({username, caption, imgUrl}) {
    console.log(username)
    return (
        <div className='post'>
            <div className='post_header'>
                <Avatar
                    className='post_avatar'
                    alt="JessPesale"
                    src="/static/images/avatar/1.jpg"
                    />
                <h3>Username: {username}</h3>
            </div>
        <img className='post_image' src={imgUrl} />
        <h4 className='post_text'><strong>{username}</strong> {caption} </h4> 
        </div>
    );
}

export default Post;