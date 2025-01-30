import {toLower, toUpper, len} from "./string"

describe('string', () => {
  describe('toLower', () => {
    it.each([
      {str: "String", expected: "string"},
      {str: "string", expected: "string"},
      {str: "STRING", expected: "string"},
    ])('toLowes string', ({str, expected}) => {
      const result = toLower(str);
      expect(result).toBe(expected);
    })
  })
  describe('toUpper', () => {
    it.each([
      {str: "String", expected: "STRING"},
      {str: "string", expected: "STRING"},
      {str: "STRING", expected: "STRING"},
    ])('toUpper string', ({str, expected}) => {
      const result = toUpper(str);
      expect(result).toBe(expected);
    })
  })
  describe('len', () => {
    it.each([
      {str: "String", expected: 6},
      {str: "strings", expected: 7},
      {str: "STR", expected: 3},
      {str: "", expected: 0},
    ])('len string', ({str, expected}) => {
      const result = len(str);
      expect(result).toBe(expected);
    })
  })
})