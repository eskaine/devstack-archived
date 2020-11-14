import React from "react";
import { Button, TextField } from "@material-ui/core";

function SignUpForm({labelname, username, email, password, handleChange, handleSubmit}) {
  return (
    <form target="_self">
      <TextField
        id="username"
        label={labelname}
        name="username"
        type="text"
        variant="outlined"
        value={username}
        onChange={handleChange}
      />
      <br />

      <TextField
        id="email"
        label="Email"
        name="email"
        type="email"
        variant="outlined"
        value={email}
        onChange={handleChange}
      />
      <br />
      <TextField
        id="password"
        label="Password"
        name="password"
        type="password"
        variant="outlined"
        autoComplete="current-password"
        value={password}
        onChange={handleChange}
      />
      <br />
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSubmit}
      >
        Register
      </Button>
    </form>
  );
}

export default SignUpForm;
