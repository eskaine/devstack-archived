import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import registerSchema from "../../schemas/form.schema";
import axios from "../../helpers/axios";
import { gql, useMutation } from "@apollo/client";

// const CREATE_NEW_USER = gql`
//   mutation createUser($username: String!, $email: String!, $password: String!) {
//     register(username: $username, email: $email, password: $password) {
//       id
//     }
//   }
// `;

const CREATE_NEW_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    register(userRegister: {
      username: $username, email: $email, password: $password
  }){
    id
  }
  }
`;


function withFormHandlers(Component, props) {
  const [create, data] = useMutation(CREATE_NEW_USER);

  const form = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    registerSchema,
    // onSubmit: ({accountType, username, email, password}) => {
    //   axios.post(process.env.REG + accountType, {username, email, password},
    //     (res) => {
    //     console.log('res', form);
        
    //   });
    // },
    onSubmit: async ({accountType, username, email, password}) => {

      // console.log('form data', username);
      let res = await create({ variables: { username, email, password } });
      console.log('res', res);
      // input.value = "";
    },
  });

  return <Component {...props} form={form} />;
}

export default withFormHandlers;
