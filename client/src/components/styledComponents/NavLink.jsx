import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import  {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    "&:focus, &:hover, &:visited, &:link, &:active": {
       color: `${theme.palette.text.primary} !important`,
    }
  }
}));

const NavLink = ({to, linkName}) => {
  const styles = useStyles();
  return <Link to={to} className={styles.link}>{linkName}</Link>;
}

export default NavLink;