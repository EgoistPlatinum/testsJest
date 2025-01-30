import {validatePassword} from "../validate-password"


export const passwordValidationError = {
  length: "Password must be at least 8 characters",
  case: "Password must contain both upper and lower case letters",
  number: "Password must contain at least one number",
  special: "Password must contain at least one special characters",
}

describe("validatePassword", () => {

  it('should return {success: true, error: null} for valid password', () => {

    const validPassword = 'MyPassword123!'

    const result = validatePassword(validPassword)

    expect(result).toEqual({success: true, error: null})
  })

  it('should validate a password against 8 minimum characters and return error message', () => {

    const invalidPassword = 'MyP123'
    const expectedResult = {
      success: false,
      error: passwordValidationError.length
    }
    expect(validatePassword(invalidPassword)).toEqual(expectedResult)
  })

  it("should validate a password against mixed case", () => {

    const invalidPassword1 = 'mypassword123!'

    const invalidPassword2 = 'MYPASSWORD123!'

    const expectedResult = {
      success: false,
      error: passwordValidationError.case
    }

    expect(validatePassword(invalidPassword1)).toEqual(expectedResult)
    expect(validatePassword(invalidPassword2)).toEqual(expectedResult)
  })

  it("should validate a password against digits characters", () => {

    const invalidPassword1 = 'MyPassword!'

    const invalidPassword2 = 'MyPassword!@'

    const expectedResult = {
      success: false,
      error: passwordValidationError.number
    }

    expect(validatePassword(invalidPassword1)).toEqual(expectedResult)
    expect(validatePassword(invalidPassword2)).toEqual(expectedResult)
  })

  it("should validate a password against special characters", () => {
    const invalidPassword1 = 'MyPassword123'
    const expectedResult = {
      success: false,
      error: passwordValidationError.special
    }

    expect(validatePassword(invalidPassword1)).toEqual(expectedResult)
  })
})