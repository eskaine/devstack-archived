import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import registerSchema from "../../schemas/form.schema";

function withFormHandlers(Component, props) {
  const form = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    registerSchema,
    onSubmit: (values) => {
      console.log("submit", values);

    },
  });

  return <Component {...props} form={form} />;
}

export default withFormHandlers;
