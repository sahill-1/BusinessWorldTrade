import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please eneter your email"),
  number: Yup.number().required("Please enter valid number").positive().integer(),
  password: Yup.string().min(6).required("Please enter ypour password"),
  confirm_password: Yup.string()
     .required()
     .oneOf([Yup.ref("password"), null], "Password must match"),
});
