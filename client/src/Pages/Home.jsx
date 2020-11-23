import React, { Fragment } from "react";
import { Box, Container, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useStyles from "../styles/base.styles";
import Image from "../assets/homebanner.jpg";
import { Link } from "react-router-dom";

const homeStyles = makeStyles((theme) => ({
  banner: {
    height: "80vh",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function Home(props) {
  const styles = homeStyles();
  const baseStyles = useStyles();
  console.log("home", props);

  return (
    <Box className={styles.banner}>
      <Container className={baseStyles.mainContainer}>
        <Typography variant="h3">Welcome to DEVSTACK</Typography>
        <a href="http://localhost:8000/auth/login">Login Here</a>
      </Container>
    </Box>
  );
}

export default Home;
