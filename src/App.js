import React, {useState, useEffect} from "react"
import './App.css';
import Post from './components/Post/Post';
import { db } from './firebase';
import {collection, onSnapshot } from "firebase/firestore";

import ModalElement from "./components/Modal/ModalElement"

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
      <div className="app_navbar" >
        {/* <img src=".src/Pictures/travelGram.png" /> */}
        <strong><p>TravelGram</p></strong>
      </div>
        <ModalElement />

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
