import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Container, Typography, Button } from "@material-ui/core";
import NavLink from "../styledComponents/NavLink";

const useStyles = makeStyles((theme) => ({
	title: {
		flexGrow: 1,
	},

}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<AppBar color="default">
			<Container>
				<Toolbar disableGutters={true}>
					<Typography variant="h6" className={classes.title}><NavLink to="/" linkName="DEVSTACK" />
            
					</Typography>
					<Button color="inherit" variant="outlined"><NavLink to="/register" linkName="Register" />
					</Button>
					<Button color="inherit" variant="outlined">Login</Button>
					
				</Toolbar>
			</Container>
		</AppBar>
	);
}
