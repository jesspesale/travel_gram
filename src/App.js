import React, {useState, useEffect} from "react"
import './App.css';
import Post from './components/Post/Post';
import { db } from './firebase';
import {collection, onSnapshot } from "firebase/firestore";
//  getDocs,  ^^
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({
       id: doc.id,
       post: doc.data()
      })))
    })
  }, [posts]);
  // will run everytime a post changes

  return (
    <div className="app">
      <Modal
        // open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
    <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
      </Typography>   
      </Modal>


      <div className="app_navbar">
        <p>TravelGram</p>
      </div>
        {
          posts.map(({id, post}) => (
            <Post key={id} username={post.username} caption={post.caption} imgUrl={post.imgUrl} />
           // key tells it not to re-render every post but just the new posts
          ))
        }
    </div>
  )
}

export default App;
