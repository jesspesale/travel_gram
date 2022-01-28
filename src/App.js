import React, {useState, useEffect} from "react"
import './App.css';
import Post from './components/Post/Post';
import { db } from './firebase';
import {collection, onSnapshot } from "firebase/firestore";
//  getDocs,  ^^

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({
       id: doc.id,
       posts: doc.data()
      })))
    })
  }, [posts]);
  // will run everytime a post changes

  return (
    <div className="app">
      <div className="app_navbar">
        <p>TravelGram</p>

      </div>
        {
          posts.map(post => (
            <Post key={post.caption} username={post.username} caption={post.caption} imgUrl={post.imgUrl} />
          ))
        }
    </div>
  )
}

export default App;
