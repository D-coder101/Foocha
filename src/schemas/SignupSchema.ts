import * as yup from "yup";

const passwordRules = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{5,}$/;

export const registerSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("required"),
});
