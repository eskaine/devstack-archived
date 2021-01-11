import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: theme.spacing(8),
  },
}));

function MainBox(props) {
  const styles = useStyles();
  return <Box className={`${styles.marginTop} mui-fixed`}>{props.children}</Box>;
}

export default MainBox;
