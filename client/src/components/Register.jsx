import React, { Fragment, useState } from "react";
import {
	AppBar,
	Toolbar,
	Button,
	Typography,
	TextField,
} from "@material-ui/core";
import GoogleButton from "react-google-button";
import axios from "axios";
import {withContainer} from "./styledComponents/withStyles";

function Register() {
	const [form, setForm] = useState({
		username: "",
		email: "",
		password: "",
	});

	function handleChange(e) {
		let newForm = {...form};
		newForm[e.target.name] = e.target.value;
		console.log("change", newForm);
		setForm(newForm);
	}

  
	async function handleSubmit(e) {
		e.preventDefault();
		console.log("submit");
		try {
			let {username, email, password} = form;
			if(username !== "" && email !== "" && password.length >= 8) {
				let res = await axios.post(process.env.REG, form);
				console.log("axios res", res);
			}
      
		} catch(err) {
			throw new Error(err);
		}
	} 



	return ( withContainer(
		<Fragment>
			<Typography>Register Page</Typography>
			<form target="_self">
				<TextField
					id="username"
					label="Username"
					name="username"
					type="text"
					variant="outlined"
					value={form.username}
					onChange={handleChange}
				/>
				<br />

				<TextField id="email" label="Email" name="email" type="email" variant="outlined" value={form.email} onChange={handleChange} />
				<br />
				<TextField
					id="password"
					label="Password"
					name="password"
					type="password"
					variant="outlined"
					autoComplete="current-password"
					value={form.password}
					onChange={handleChange}
				/>
				<br />
				<Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
          Register
				</Button>
			</form>
			<GoogleButton type="light" />
		</Fragment>)
	);
}

export default Register;
