import {addByX} from "../addByX";


describe('addByX', () => {
  it('should add the given number to x', () => {
    const add5 = addByX(5);
    expect(add5(10)).toBe(15); // 5 + 10 = 15
    expect(add5(-5)).toBe(0);  // 5 + (-5) = 0
    expect(add5(0)).toBe(5);    // 5 + 0 = 5
  });

  it('should work with different values of x', () => {
    const add10 = addByX(10);
    expect(add10(5)).toBe(15);  // 10 + 5 = 15
    expect(add10(-10)).toBe(0); // 10 + (-10) = 0
  });
});