import React, {useState, useEffect} from "react"
import './Modal.css';
import Modal from '@mui/material/Modal';
import { auth } from '../../firebase.js';
import { createUserWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import{Button, Input} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SignInModal from "../SignIn/SignInModal";

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

function ModalElement({user, setUser}) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
// listens for any authentication change that happens and fires authUser 
    // returns a function called an unsubscribe
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null)
      }
    })
        return () => {// perform some clean up actions before re-firing the use effect
            unsubscribe();
        }
    }, [user, username]);


  const signUp = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {  // if user is created update their username
       return updateProfile(auth.currentUser, {
          displayName: username
        })
       }
      )
      .then(() => {
        console.log(username)
      })
      .catch((error) => alert(error.message))
      
      setOpen(false)
    }



  return (
    <div className="modal">
      <Modal open={open} onClose={() => setOpen(false)} >
        <div style={modalStyle} className={classes.paper}>
          <form className="modal_signup" >
              <p className="modal_heading">TravelGram</p>
              <br></br>
              <Input 
                placeholder="username"
                type="text"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
              />
              <Input 
                placeholder="email"
                type="text"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
              <Input 
                placeholder="password"
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
               />
               <br></br>
               <Button type="submit" onClick={signUp}>Sign Up</Button>
          </form>
        </div>
      </Modal>
      <br></br>
      {user ? (
        <Button onClick={() => signOut(auth)} >Log Out</Button>
      ) : (
        <div className="app_loginContainer">
          <SignInModal />
          <Button onClick={() => setOpen(true)} >Sign Up</Button>

        </div>
      ) }
    </div>
  )
}

export  default ModalElement;
