import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import User from "./UserRoute";
import Projects from "../Projects";
import Register from "../Register";
import Error404 from "../Error404";


import { Box, Container } from "@material-ui/core";

function MainContainer() {

  return (
        <Switch >
          <Route exact path="/" component={Home} />
          {/* change /user to username */}
          <Route path="/user" component={User} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/register" component={Register} />
          <Route path="*" component={Error404} />
        </Switch>
  );
}

export default MainContainer;
