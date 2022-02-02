import { Button } from '@mui/material';
import React, {useState} from "react"
import {storage, db} from "../../firebase.js"
import {ref} from "firebase/storage"

function ImageUpload() {

    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
//progress bar to show how much of the image has been uploaded
    const [caption, setCaption] = useState("")


    const handleUpload = () => {
//access storage in fb and get a reference to the photo you selected
        const uploadTask = ref(storage, `images/${image.name}`).put(image)
                            //putting the image you ^ grabbed into that point

        uploadTask.on(
// on state change give me a snapshot
            "state_change",
            (snapshot) => {
// tracks the progress of the upload
                const progress = Math.round(
    // works out a number 1-100 & set progess level to that number
                    (snapshot.bytesTransferred/snapshot.totalBytes) * 100
                );
                setProgress(progress)
            }
        )
    }

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