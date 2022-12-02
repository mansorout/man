import { isAnyArrayBuffer } from "util/types";

export const emailValidator = (firstName: string) => {
    if (!firstName) {
      return "firstName is required";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(firstName)) {
      return "Incorrect firstName format";
    }
    return "";
  };
  
//   export const passwordValidator = (password: string | any[]) => {
//     if (!password) {
//       return "Password is required";
//     } else if (password.length < 8) {
//       return "Password must have a minimum 8 characters";
//     }
//     return "";
//   };
  
//   export const confirmPasswordValidator = (confirmPassword, form) => {
//     if (!confirmPassword) {
//       return "Confirm password is required";
//     } else if (confirmPassword.length < 8) {
//       return "Confirm password must have a minimum 8 characters";
//     } else if (confirmPassword !== form.password) {
//       return "Passwords do not match";
//     }
//     return "";
//   };