import React, { Fragment, useState, useEffect } from "react";
import { Tabs, Tab } from "@material-ui/core";
import GoogleButton from "react-google-button";
import axios from "axios";
import { withContainer } from "./styledComponents/withStyles";
import SignUpForm from "./components/SignUpForm";
import TabPanel from "./components/TabPanel";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   root: {
// 	// flexGrow: 1,
// 	border: "1px solid red",
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

function Register() {
  //   const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    let newForm = { ...form };
    newForm[e.target.name] = e.target.value;
    console.log("change", newForm);
    setForm(newForm);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
    try {
      let { username, email, password } = form;
      if (username !== "" && email !== "" && password.length >= 8) {
        let res = await axios.post(process.env.REG, form);
        console.log("axios res", res);
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setForm({
      username: "",
      email: "",
      password: "",
    });
  }, [value]);

  return withContainer(
    <Fragment>
      <Tabs value={value} onChange={handleTabChange}>
        <Tab label="Individual" />
        <Tab label="Organization" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SignUpForm
          labelname="Username"
          {...form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        <GoogleButton type="light" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignUpForm
          labelname="Organization Name"
          {...form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </TabPanel>
    </Fragment>
  );
}

export default Register;
