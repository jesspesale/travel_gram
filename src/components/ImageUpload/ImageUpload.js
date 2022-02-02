import { Button } from '@mui/material';
import React, {useState} from "react"


function ImageUpload() {

    cont [caption, setCaption] = useState("")

    const handleUpload = () => {

    }

    const handleChage = () => {

    }

    return (
        <div>
            <h2>Image Upload</h2>
            <input type="text" />
            <input type="file" onChange={handleChange} />
            <Button onClick={handleUpload}>Upload</Button>
        </div>
    );
}

export default ImageUpload;