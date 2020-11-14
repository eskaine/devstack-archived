import React, {Fragment} from "react";
import {useRouteMatch, Switch, Route, Redirect} from "react-router-dom";
import UserDashboard from "../UserDashboard";
import Error404 from "../Error404";

function User() {
    let { path, url } = useRouteMatch();
  return (
    <Fragment>
        <Redirect to={`${url}/dashboard`} />
        <Switch>
        <Route exact path={`${path}/dashboard`} component={UserDashboard} />
        </Switch>
    </Fragment>
  );
}

export default User;