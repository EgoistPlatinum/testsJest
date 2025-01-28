import {divide, sum, multiply} from "./math"

describe("math", () => {

  describe("multiply", () => {
    it.each([
      {inputA: 6, inputB: 3, expected: 18},
      {inputA: 5, inputB: 3, expected: 15},
      {inputA: 5, inputB: 0, expected: 0},
    ])("should $inputA multiply $inputB equals $expected", ({inputA, inputB, expected}) => {

      const actualResult = multiply(inputA, inputB);
      expect(actualResult).toBe(expected); // ===
    })
  })

  describe("divide", () => {
    it("should divide positive number", () => {
      const expectedResult = 2
      const actualResult = divide(6, 3);
      expect(actualResult).toBe(expectedResult); // ===
    })

    it('should return NaN dividing by 0', () => {
      const expectedResult = NaN
      const actualResult = divide(10 / 0);
      expect(actualResult).toBe(expectedResult);
    })
  })

  describe("sum", () => {
    it("should sum positive number", () => {
      const expectedResult = 10
      const actualResult = sum(3, 7);
      expect(actualResult).toBe(expectedResult); // ===
    })
  })
})