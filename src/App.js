import React, {useState, useEffect} from "react"
import './App.css';
import Post from './components/Post/Post';
import { db } from './firebase';
import {collection, onSnapshot } from "firebase/firestore";
//  getDocs,  ^^
import Modal from '@mui/material/Modal';
import{Button, Input} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { sendSignInLinkToEmail } from "firebase/auth";
// import Typography from '@mui/material/Typography';

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 450,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function App() {
  const classes = useStyles()
  // turns the useStyle function above into a constant
  const [modalStyle] = useState(getModalStyle)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false)

  useEffect(() => {
    onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({
       id: doc.id,
       post: doc.data()
      })))
    })
  }, [posts]);
  // will run everytime a post changes

  const signUp = (event) => {
    event.preventDefault()
  }

  return (
    <div className="app">
      <Modal open={open} onClose={() => setOpen(false)} >
        <div style={modalStyle} className={classes.paper}>
          <form className="app_signup" >
            <center>
              <strong><p>TravelGram</p></strong>
              <Input 
                placeholder="username"
                type="text"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
              />
              <br></br>
              <Input 
                placeholder="email"
                type="text"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
              <br></br>
              <Input 
                placeholder="password"
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
               />
               <br></br>
               <Button type="submit" onClick={signUp}>Sign Up</Button>
            </center>
          </form>
        </div>
      </Modal>


          
      <div className="app_navbar" >
        {/* <img src=".src/Pictures/travelGram.png" /> */}
        <strong><p>TravelGram</p></strong>
      </div>
        <Button onClick={() => setOpen(true)} >Sign Up</Button>
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
