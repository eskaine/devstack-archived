import React from "react";
import { Box, Container } from "@material-ui/core";
import useStyles from "../../styles/base.style";


function withContainer(component) {
    const baseStyles = useStyles();
    
  return (
    <Box>
      <Container className={baseStyles.mainContainer}>{component}</Container>
    </Box>
  );
}

export {withContainer};
