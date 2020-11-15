import React, { Fragment } from "react";
import { Box, Container, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useStyles from "../styles/base.style";
import Image from '../assets/homebanner.jpg';



const homeStyles = makeStyles((theme) => ({
	banner: {
		height: "80vh",
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
	},
}));

function Home() {
	const styles = homeStyles();
  const baseStyles = useStyles();


  return (
    <Box className={styles.banner}>
      <Container className={baseStyles.mainContainer}>
        <Typography variant="h3">Welcome to DEVSTACK</Typography>
      </Container>
    </Box>
  );
}

export default Home;
