import React, { useEffect } from "react";
import {useRouteMatch, Switch, Route, useParams} from "react-router-dom";
import Organization from "./Organization";
import axios from 'axios';

function Organizations() {
    let { path, url } = useRouteMatch();


    async function fetch() {
      console.log('fetching', process.env);
      try {

        let res = await axios.get(process.env.ORG);
        console.log('org fetc', res);
      } catch(error) {
        
      }
    }

    useEffect(() =>{
      fetch();
    }, []);

  return (
    <div>
        <h1>orgniazations</h1>
      
    </div>
  );
}

export default Organizations;
