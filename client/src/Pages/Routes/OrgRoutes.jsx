import React, { Fragment } from "react";
import { useRouteMatch, Switch, Route, useParams } from "react-router-dom";
import Organization from "../Organization";
import Organizations from "../Organizations";

function OrgRoutes(props) {
  let { path, url } = useRouteMatch();
  console.log("path",path);
  console.log("url",url);
  console.log("props",props);


  return (
    <Switch>
      {/* <Route exact path={path}> */}
        {/* <Organizations /> */}
      {/* </Route> */}
      <Route exact path={`/organizations/:slug`} component={Organization} />
        {/* <Organization /> */}
    </Switch>
  );
}

export default OrgRoutes;
