import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import registerSchema from "../../schemas/form.schema";
import axios from "../../helpers/axios";

function withFormHandlers(Component, props) {
  const form = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    registerSchema,
    onSubmit: ({accountType, username, email, password}) => {
      axios.post(process.env.REG + accountType, {username, email, password}, 
        (res) => {
        console.log('res', res);
      });
    },
  });

  return <Component {...props} form={form} />;
}

export default withFormHandlers;
