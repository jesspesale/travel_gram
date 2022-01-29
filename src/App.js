import React, {useState, useEffect} from "react"
import './App.css';
import Post from './components/Post/Post';
import { db } from './firebase';
import {collection, onSnapshot } from "firebase/firestore";
//  getDocs,  ^^
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
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

  }

  return (
    <div className="app">
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
          <div style={modalStyle} className={classes.paper}>
            <h2>I am a Modal </h2>
          </div>
          </Modal>


          
      <div className="app_navbar" >
        <p>TravelGram</p>
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
