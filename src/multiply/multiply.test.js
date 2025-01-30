import {multiply} from "./multiply";

describe("multiply", () => {
  it("should multiply positive number", () => {
    const expectedResult =6
    const actualResult = multiply(3, 2);
    expect(actualResult).toBe(expectedResult); // ===
    expect({a: 1}).toEqual({a: 1});
    expect([1,2,3]).toHaveLength(3);
    expect([1,2,3]).toContain(3);
    expect([1,2,3]).not.toContain(4);
    expect(null).toBeNull()
    expect(undefined).toBeUndefined()
    expect(actualResult).toBeDefined()
    expect(actualResult).toBeTruthy()
    expect( null).toBeFalsy()
  })

  it("should multiply negative number", () => {
    const res = multiply(-3, -2);

    expect(res).toBe(6);
  })

  it("should multiply positive number", () => {
    const res = multiply(3, -2);

    expect(res).toBe(-6);
  })

})
