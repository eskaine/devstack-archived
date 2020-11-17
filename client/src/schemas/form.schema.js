import { object, string } from "yup";

const registerSchema = object().shape({
  username: string().min(8, 'Username should have a minimum length of 8.').required('Username is required.'),
  email: string().email('Please enter a valid email.').required('Email is required.'),
  password: string().min(8, 'Password should have a minimum length of 8.').required('Password is required.'),
});

export default registerSchema;