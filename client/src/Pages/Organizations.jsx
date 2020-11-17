import React from "react";
import {useRouteMatch, Switch, Route, useParams} from "react-router-dom";
import Organization from "./Organization";


function Organizations() {
    let { path, url } = useRouteMatch();
  return (
    <div>
        <h1>orgniazations</h1>
      
    </div>
  );
}

export default Organizations;
