import React from "react";
import { Button, TextField } from "@material-ui/core";

function SignUpForm(props) {
  const { accountType, labelname, form } = props;

  function submit(e) {
    e.preventDefault();
    form.values.accountType = accountType;
    form.handleSubmit();
  }

  return (
    <form target="_self" onSubmit={submit}>
      <TextField
        id="username"
        name="username"
        label={labelname}
        type="text"
        variant="outlined"
        fullWidth={true}
        value={form.values.username}
        onChange={form.handleChange}
        error={form.touched.username && Boolean(form.errors.username)}
        helperText={form.touched.username && form.errors.username}
      />
      <br />

      <TextField
        id="email"
        name="email"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth={true}
        value={form.values.email}
        onChange={form.handleChange}
        error={form.touched.email && Boolean(form.errors.email)}
        helperText={form.touched.email && form.errors.email}
      />
      <br />
      <TextField
        id="password"
        name="password"
        label="Password"
        type="password"
        variant="outlined"
        fullWidth={true}
        autoComplete="current-password"
        value={form.values.password}
        onChange={form.handleChange}
        error={form.touched.password && Boolean(form.errors.password)}
        helperText={form.touched.password && form.errors.password}
      />
      <br />
      <Button
        variant="contained"
        fullWidth={true}
        color="primary"
        size="large"
        type="submit"
      >
        Register
      </Button>
    </form>
  );
}

export default SignUpForm;
