import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import registerSchema from "../../schemas/form.schema";
import { gql, useMutation } from "@apollo/client";

const CREATE_NEW_USER = gql`
  mutation userRegister($username: String!, $email: String!, $password: String!) {
    userRegister(
      userInputData: { username: $username, email: $email, password: $password }
    ) {
      token
    }
  }
`;

function withFormHandlers(Component, props) {
  const [userRegister, data] = useMutation(CREATE_NEW_USER);

  const form = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    registerSchema,
    onSubmit: async ({ accountType, username, email, password }) => {
      let res = await userRegister({ variables: { username, email, password } });
      console.log("res", res);
      // input.value = "";
    },
  });

  return <Component {...props} form={form} />;
}

export default withFormHandlers;
