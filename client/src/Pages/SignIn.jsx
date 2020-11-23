import React, { Fragment, useState } from "react";
import { Box } from "@material-ui/core";
import GoogleButton from "react-google-button";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";

import withFormHandlers from "./components/withFormHandlers";

const useStyles = makeStyles((theme) => ({
  registerContainer: {
    position: "absolute",
    right: 0,
    width: "40%",
  },
}));

function Register() {
  const classes = useStyles();

  const [type, setType] = useState("individual");

  function createForm(labelname, accountType) {
    return withFormHandlers(SignUpForm, {
      labelname: labelname,
      accountType: accountType,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      let { accountType, username, email, password } = form;
      console.log("submit", `${process.env.REG}${accountType}`);
      if (username !== "" && email !== "" && password.length >= 8) {
        let res = await axios.post(`${process.env.REG}${accountType}`, form);
        console.log("axios res", res);
        resetForm();
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  return (
    <Fragment>
      <Box className={classes.registerContainer}>
      {createForm("Username", type)}
              <GoogleButton type="light" />
       
      </Box>
    </Fragment>
  );
}

export default Register;
