import React from "react";
import { Formik } from "formik";
import { Button, TextField } from "@material-ui/core";

function SignUpForm(props) {
  const { accountType, labelname, form } = props;

  function submit() {
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
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
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
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
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
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
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
