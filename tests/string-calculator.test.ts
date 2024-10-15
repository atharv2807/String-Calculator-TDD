import { StringCalculator } from "../src/string-calculator";

describe("String Calculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test("should return 0 for an empty string", () => {
    expect(calculator.add("")).toBe(0);
  });

  test("should return the number itself when only one number is provided", () => {
    expect(calculator.add("1")).toBe(1);
  });

  test("should return the sum of two numbers", () => {
    expect(calculator.add("1,2")).toBe(3);
  });

  test('should return the sum of multiple numbers', () => {
    expect(calculator.add('1,2,3,4')).toBe(10);
  });

  test('should handle new lines between numbers', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  test('should support different delimiters', () => {
    expect(calculator.add('//;\n1;2')).toBe(3);
  });
});
