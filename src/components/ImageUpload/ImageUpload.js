import { Button } from '@mui/material';
import React, {useState} from "react"


function ImageUpload() {

    const [image, setImage] = useState(null)
    const [progress, setProgress] = useState(0)
//progress bar to show how much of the image has been uploaded
    const [caption, setCaption] = useState("")


    const handleUpload = () => {

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
                onCange={event => setCaption(event.target.value)}
                value=""
            />
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    );
}

export default ImageUpload;