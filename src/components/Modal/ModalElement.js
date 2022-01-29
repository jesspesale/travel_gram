import React, {useState, useEffect} from "react"
import './Modal.css';
import Modal from '@mui/material/Modal';
import { auth } from '../../firebase.js';
import { createUserWithEmailAndPassword } from "firebase/auth";
import{Button, Input} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

function ModalElement() {
  const classes = useStyles();
  // turns the useStyle function above into a constant
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
    // listens for any authentication change that happens and fires authUser 
    // returns a function called an unsubscribe
        if(authUser) {
        // if user has logged in
            console.log(authUser);
            setUser(authUser);

            if (authUser.displayName) {
                // dont update username if they exist already
            } else{  
                 // if we just created someone / a new user    
                return authUser.updateProfile({
                    displayName: username
                });
            }
        } else{
            setUser(null)  // if user has logged out set the user to null
        }
    })
        return () => {
// perform some clean up actions before re-firing the use effect
            unsubscribe();
        }

    }, [user, username]);

  const signUp = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
    .catch((error) => alert(error.message))
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
        <Button onClick={() => setOpen(true)} >Sign Up</Button>
    </div>
  )
}

export default ModalElement;
