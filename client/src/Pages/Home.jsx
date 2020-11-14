import React, { Fragment } from "react";
import { Box, Container, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useStyles from "../styles/base.style";


const homeStyles = makeStyles((theme) => ({
	banner: {
		height: "80vh",
		backgroundImage: `url(../assets/workspace.jpg)`,
		backgroundSize: 'cover', 
		backgroundRepeat: 'no-repeat',
		zIndex: "-1"
	},
}));

function Home() {
	const styles = homeStyles();
	const baseStyles = useStyles();

  return (
    <Box className={styles.banner}>
      <Container className={baseStyles.mainPad}>
        <Typography variant="h3">Welcome to DEVSTACK</Typography>
      </Container>
    </Box>
  );
}

export default Home;
