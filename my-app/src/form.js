import React, {useEffect, useState} from 'react';
import {Button, TextField} from "@mui/material";
import {create} from "./presenter";
import axios from "axios";

const Form = () => {
    const [createTask, setCreateTask] = useState('')

    const createF = () => {
        create({name: createTask})
    }
    return (
        <>
            <TextField value={createTask} onChange={e => setCreateTask(e.target.value)}
                       style={{width: "60%", display: "inline-block", paddingRight: "15%"}} fullWidth label="Task"
                       id="fullWidth"/>
            <Button onClick={createF} style={{width: "25%", display: "inline-block", marginTop: '10px'}}
                    variant="outlined">Create task</Button>
        </>
    );
};

export default Form;