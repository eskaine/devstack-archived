import React, { Fragment } from "react";
import { withContainer } from "./styledComponents/withStyles";
import { Button, Typography, TextField } from "@material-ui/core";

function UserDashboard({ username }) {
  return withContainer(
    <Fragment>
      <Typography variant="h3">Dashboard</Typography>
      <Typography variant="h4">My Projects</Typography>
      <Typography variant="h4">Archived Projects</Typography>
    </Fragment>
  );
}

export default UserDashboard;
