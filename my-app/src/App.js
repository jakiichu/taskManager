import {Container, Grid, TextField} from "@mui/material";
import {deleteOne, viewAll} from "./presenter";
import Form from "./form";
import UpgradeIcon from '@mui/icons-material/Upgrade';
import {useEffect, useMemo, useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from "./modal";
import * as React from "react";

const App = () => {
    const [data, setData] = useState([])
    const [open, setOpen] = React.useState(false);
    const [currentObj, setCurrentObj] = React.useState({});
    let observe = useMemo(() => data, [data, open])

    const viewAllData = async () => {
        setData(await viewAll())
    }
    useEffect(() => viewAllData, [open])

    const deteleOneF = (id) => {
        deleteOne(id)
        viewAllData()
    }

    const handleClickOpen = (item) => {
        setCurrentObj(item)
        setTimeout(() => setOpen(true), 200)
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container maxWidth={"sm"} style={{paddingTop: "20px"}}>
            <Modal currentObj={currentObj} open={open} handleClickOpen={handleClickOpen} observer={viewAllData}
                   handleClose={handleClose}></Modal>
            <Form observer={viewAllData}/>
            {observe.map((item) =>
                <Grid key={item.id + item.name} container>
                    <Grid item xs={8}>
                        <TextField
                            fullWidth
                            id="standard-read-only-input"
                            defaultValue={item.name}
                            InputProps={{
                                readOnly: true,
                            }}
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <UpgradeIcon style={{cursor: "pointer"}} onClick={() => handleClickOpen(item)}/>
                        <DeleteIcon style={{cursor: "pointer"}} onClick={() => deteleOneF(item.id)}/>
                    </Grid>
                </Grid>
            )}
        </Container>
    );
}

export default App;
