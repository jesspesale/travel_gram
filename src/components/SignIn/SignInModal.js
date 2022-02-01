import React, {useState, useEffect} from "react"
import Modal from '@mui/material/Modal';
import '../Modal/Modal.css';
import { auth } from '../../firebase.js';
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

const SignInModal = () => {
    const classes = useStyles();
    const [openSignIn, setOpenSignIn] = useState(false)
    const [modalStyle] = useState(getModalStyle);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (event) => {
        event.preventDefault()

    }

    return (
        <div className="modal">
            <Button onClick={() => setOpenSignIn(true)} >Sign In</Button>
            <Modal open={openSignIn} onClose={() => setOpenSignIn(false)} >
                <div style={modalStyle} className={classes.paper}>
                <form className="modal_signup" >
                    <p className="modal_heading">TravelGram</p>
                    <br></br>
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
                    <Button type="submit" onClick={signIn}>Sign In</Button>
                </form>
                </div>
            </Modal>
        </div>
    )

}

export default SignInModal





// function ModalElement() {

//   return (
//     <div className="modal">
//       <Modal open={open} onClose={() => setOpen(false)} >
//         <div style={modalStyle} className={classes.paper}>
//           <form className="modal_signup" >
//               <p className="modal_heading">TravelGram</p>
//               <br></br>
//               <Input 
//                 placeholder="username"
//                 type="text"
//                 value={username}
//                 onChange={(e)=> setUsername(e.target.value)}
//               />
//               <Input 
//                 placeholder="email"
//                 type="text"
//                 value={email}
//                 onChange={(e)=> setEmail(e.target.value)}
//               />
//               <Input 
//                 placeholder="password"
//                 type="password"
//                 value={password}
//                 onChange={(e)=> setPassword(e.target.value)}
//                />
//                <br></br>
//                <Button type="submit" onClick={signUp}>Sign Up</Button>
//           </form>
//         </div>
//       </Modal>
//       <br></br>
//       {user ? (
//         <Button onClick={() => signOut(auth)} >Log Out</Button>
//       ) : (
//         <div className="app_loginContainer">
//           <SignInModal />
//           <Button onClick={() => setOpen(true)} >Sign Up</Button>

//         </div>
//       ) }
//     </div>
//   )
// }