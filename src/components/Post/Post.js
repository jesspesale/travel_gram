import React from 'react';
import "./Post.css"

function Post() {
    return (
        <div className='post'>
            <h3>Username: Jess_Pesale</h3>
        <img className='post_image' src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png" />
          <h4 className='post_text'><strong>Jess_Pesale</strong> caption game strong </h4> 
        </div>
    );
}

export default Post;