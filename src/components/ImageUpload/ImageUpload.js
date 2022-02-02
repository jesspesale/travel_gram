import { Button } from '@mui/material';
import React, {useState} from "react"
import {storage, db} from "../../firebase.js"
import {ref} from "firebase/storage"
// import {username} from "../Modal/ModalElement"
import { serverTimestamp } from "firebase/firestore";


function ImageUpload({user, setUser}) {

    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
//progress bar to show how much of the image has been uploaded
    const [caption, setCaption] = useState("");


    const handleUpload = () => {
//access storage in fb and get a reference to the photo you selected
        const uploadTask = ref(storage, `images/${image.name}`).put(image);
                            //uploadiing the image

        uploadTask.on(
// on state change give me a snapshot
            "state_change",
            (snapshot) => {
// tracks the progress of the upload
                const progressLevel = Math.round(
    // works out a number 1-100 & set progess level to that number
                    (snapshot.bytesTransferred/snapshot.totalBytes) * 100
                );
                setProgress(progressLevel);
            },
            (error) => {
            // tells you if there was any problems/errors w/ the upload
                console.log(error);
                alert(error.message);
            },
            () => {
                storage
                .ref("images")      // go to the ref image
                .child(image.name)  // go to the img names child
                .getDownloadURL()   // DL URL is needed to for post submission
                .then(url => {
                // post img in database
                    db.collection("posts").add({
                        timestamp: serverTimestamp(),
                        caption:    caption,
                        imgUrl:     url,
                        username:   user.displayName   
                    });
                })
            }
            )
        };
        

    const handleChange = (e) => {
        if (e.target.files[0]) {
// get the first file you selected and set the images state to that file
            setImage(e.target.files[0])
        }
    }

    return (
        <div>
            <h2>Image Upload</h2>
            <input 
                type="text" 
                placeholder='Enter a caption . . .' 
                onChange={event => setCaption(event.target.value)}
                value={caption}
            />
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    );
}

export default ImageUpload;