import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
import Home from "../Home";
import UserRoute from "./UserRoute";
import Projects from "../Projects";
import Register from "../Register";
import Error404 from "../Error404";
import OrgRoutes from "./OrgRoutes";
import Organizations from "../Organizations";
import Organization from "../Organization";

import MainBox from "../styledComponents/MainBox";

function MainContainer() {
  // let name =
  return (
    <MainBox>
      <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/register" component={Register} />
  <Route exact path="/organizations" component={Organizations} />
  <Route path="/organizations/:name" component={Organization} />
  <Route path="*" component={Error404} />
</Switch>
    </MainBox>
  );
}

export default MainContainer;