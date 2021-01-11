import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Paper, Divider } from "@material-ui/core";
import { useRouteMatch, Switch, Route, useParams } from "react-router-dom";
import makeStyles from "../styles/organization.styles";



function Organization({location}) {
  
  const styles = makeStyles(); 


  
//   
  console.log("org",location);
  // const [data, setData] = useState({});
  // let { name } = useParams();  

  // function getData() {
  //     axios.getData();
  // }

  // useEffect(() => {
  //     console.log('running');
  // }, []);

  return (
    <Container>

      <Box className={styles.logoBox}>
          <Box className={styles.logoImg}>
            <Paper elevation={0} />
          </Box>
        </Box>
  <Typography variant="h3">{location.state.name}</Typography>
      <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illum natus earum ipsa eveniet fuga reiciendis assumenda. Recusandae inventore animi, laboriosam sapiente necessitatibus asperiores illum magni, temporibus nobis officia mollitia.</Typography>
      <Typography variant="h4">Projects</Typography>
      <Divider />
    </Container>
  );
}

export default Organization;
