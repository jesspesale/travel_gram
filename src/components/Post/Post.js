import React from 'react';
import "./Post.css"
import { Avatar } from '@mui/material';

function Post() {
    return (
        <div className='post'>
            <div className='post_header'>
                <Avatar
                    className='post_avatar'
                    alt="JessPesale"
                    src="/static/images/avatar/1.jpg"
                    />
                <h3>Username: Jess_Pesale</h3>
            </div>
        <img className='post_image' src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" />
        <h4 className='post_text'><strong>Jess_Pesale</strong> caption game strong </h4> 
        </div>
    );
}

export default Post;