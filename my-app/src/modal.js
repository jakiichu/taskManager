import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import {Box, TextField} from "@mui/material";
import {useState} from "react";
import {update} from "./presenter";

const Modal = (props) => {
    let [name, setName] = useState('')
    let [description, setDescription] = useState('')
    let [status, setStatus] = useState('')
    const updateF = () => {
        update({name: name, description: description, status: status}, props.currentObj.id)
        props.observer()
        props.handleClose()
    }

    return (
        <div>
            <Dialog

                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <TextField id="outlined-basic" label="Name" variant="outlined" value={name}
                           onChange={e => setName(e.target.value)} style={{margin: '20px'}}/>
                <TextField id="outlined-basic" label="description" variant="outlined" value={description}
                           onChange={e => setDescription(e.target.value)} style={{margin: '20px'}}/>
                <TextField id="outlined-basic" label="status" variant="outlined" value={status}
                           onChange={e => setStatus(e.target.value)} style={{margin: '20px'}}/>
                <Box style={{margin: '20px'}}>

                    <Button variant="contained" onClick={updateF}>Update</Button> <Button variant="text"
                                                                                          onClick={props.handleClose}>cancel</Button>
                </Box>
            </Dialog>
        </div>
    );
};

export default Modal;

