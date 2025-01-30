import {passwordValidationError} from "./constants";


export function validatePassword(password) {
  if (password.length < 8) {
    return {
      success: false,
      error: passwordValidationError.length
    };
  }

  if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
    return {
      success: false,
      error: passwordValidationError.case
    }
  }

  if (!/[0-9]/.test(password)) {
    return {
      success: false,
      error: passwordValidationError.number
    }
  }

  if (!/[^A-Za-z)0-9]/.test(password)) {
    return {
      success: false,
       error: passwordValidationError.special
    }
  }

  return {
    success: true, error: null
  }
}