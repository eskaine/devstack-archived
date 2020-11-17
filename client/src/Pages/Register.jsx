import React, { Fragment, useState } from "react";
import { Tabs, Tab, Box } from "@material-ui/core";
import GoogleButton from "react-google-button";
import axios from "axios";
import { withContainer } from "./styledComponents/withStyles";
import SignUpForm from "./components/SignUpForm";
import TabPanel from "./components/TabPanel";

import PropTypes from "prop-types";
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
  const [value, setValue] = React.useState(0);

  const [type, setType] = useState("individual");

  function handleTabChange(event, newValue) {
    setValue(newValue);
    setType(event.target.innerText.toLowerCase());
  }

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
        <Tabs variant="fullWidth" value={value} onChange={handleTabChange}>
          <Tab label="Individual" />
          <Tab label="Organization" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Box>
            {createForm("Username", type)}

            <Box>
              <GoogleButton type="light" />
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {createForm("Organization Name", type)}
        </TabPanel>
      </Box>
    </Fragment>
  );
}

export default Register;
