import {Container} from "@mui/material";
import {viewAll} from "./presenter";
import Form from "./form";
import axios from "axios";
import {useEffect, useState} from "react";

const App = () => {
    const [data, setData] = useState([])

    const viewAllData = async () =>{
         setData(await viewAll())
    }
    useEffect(()=>viewAllData,[])

    return (
        <Container maxWidth={"sm"} style={{paddingTop:"20px"}}>
            <Form/>
            {data.map((item, index) => <p key={index}>{item.name}</p>)}
        </Container>
    );
}

export default App;
