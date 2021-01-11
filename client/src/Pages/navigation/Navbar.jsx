import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Container, Typography, Button } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import NavLink from '../styledComponents/NavLink';
import { findKey } from 'lodash';

const useStyles = makeStyles((theme) => ({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '3em',
  },
  navlinks: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexGrow: 1,
    gap: '1em',
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar color="default">
      <Container>
        <Toolbar disableGutters={true} className={classes.navbar}>
          <Typography variant="h6">
            <NavLink to="/" linkName="DEVSTACK" />
          </Typography>
          <Box className={classes.navlinks}>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/projects" linkName="Projects" />
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <NavLink to="/organizations" linkName="Organizations" />
            </Typography>
          </Box>
          <Box>
            <Button color="inherit" variant="outlined">
              <NavLink to="/register" linkName="Sign Up" />
            </Button>
            <Button color="inherit" variant="text">
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
