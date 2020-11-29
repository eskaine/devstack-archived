import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
import Home from "../Home";
import UserRoute from "./UserRoute";
import Projects from "../Projects";
import Register from "../SignUp";
import Error404 from "../Error404";
import OrgRoutes from "./OrgRoutes";
import Organizations from "../Organizations";
import Organization from "../Organization";
import UserSettings from "../Protected/UserSettings";

import MainBox from "../styledComponents/MainBox";

function MainContainer({ auth }) {
  return (
    <MainBox>
      <Switch>
        <Route exact path="/">
          <Home auth={auth} />
        </Route>
        <Route exact path="/register" component={Register} />
        <Route exact path="/organizations" component={Organizations} />
        <Route path="/organizations/:name" component={Organization} />
        {auth && <Route exact path="/settings" component={UserSettings} />}
        <Route path="*" component={Error404} />
      </Switch>
    </MainBox>
  );
}

export default MainContainer;
