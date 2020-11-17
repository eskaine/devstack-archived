import React, {useState, useEffect} from 'react';
import { Box, Container, Typography } from "@material-ui/core";
import {useRouteMatch, Switch, Route, useParams} from "react-router-dom";
import axios from "../helpers/axios";


function Organization() {
    // console.log("org",match);
    // const [data, setData] = useState({});
    let {name} = useParams();
    console.log("org2",name);

    // function getData() {
    //     axios.getData();
    // }
    
    // useEffect(() => {
    //     console.log('running');
    // }, []);

    return (
        <Container>
            <Typography variant="h1">{name}</Typography>
   
            
        </Container>
    )
};

export default Organization;
