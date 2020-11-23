import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  logoBox: {
    padding: 2,
    width: "fit-content",
    border: "2px solid darkgray",
    borderRadius: 5,
    backgroundColor: "white"
  },
    logoImg: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: 150,
        height: 150,
        backgroundImage: `url(${"https://via.placeholder.com/150"})`
      },
    },
  }));

  export default useStyles;