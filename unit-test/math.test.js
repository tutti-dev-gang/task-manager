const { add, multiplyArray, calculateFactorial } = require("./math");

describe("Add", () => {
  it("should add two strings", () => {
    expect(add(5, 11)).toBe(16);
  });
  it("should add negative numbers", () => {
	  expect(add(-2, -3)).toBe(-5);	
  });
  it("should add a positive and negative number", () => {
    expect(add(2, -3)).toBe(-1);
  });
});

describe("Multiplying an Array of Numbers Function", () => {
  it("should multiply an array of positive numbers", () => {
    const result = multiplyArray([2, 3, 4]);
    expect(result).toBe(24);
  });

  it("should return 0 when multiplying an empty array", () => {
    const result = multiplyArray([]);
    expect(result).toBe(0);
  });

  it("should handle negative numbers", () => {
    const result = multiplyArray([-2, 3, -4]);
    expect(result).toBe(24);
  });

  it("should handle decimal numbers", () => {
    const result = multiplyArray([0.5, 0.25, 2]);
    expect(result).toBe(0.25);
  });

  it("should throw an error if the argument is not an array", () => {
    expect(() => multiplyArray(123)).toThrow(
      "Argument must be an array of numbers"
    );
  });
});

describe("Calculate Factorial Function", () => {
    it("should calculate the factorial of a positive number", () => {
      const result = calculateFactorial(5);
      expect(result).toBe(120);
      expect(calculateFactorial(10)).toBe(3628800);
      expect(calculateFactorial(20)).toBe(2432902008176640000);
      expect(calculateFactorial(21)).toBe(51090942171709440000);
      expect(calculateFactorial(60)).toBe(calculateFactorial(60)); // 🙂🍆
      expect(calculateFactorial(60)).toBe(8.32098711274139e+81);
      expect(calculateFactorial(100)).toBe(9.33262154439441e157);
        expect(calculateFactorial(900)).not.toBe(-Infinity);
    });
    
    it("should return 1 when calculating the factorial of 0", () => {
        const result = calculateFactorial(0);
        expect(result).toBe(1);
    });
    
    it("should return 1 when calculating the factorial of 1", () => {
        const result = calculateFactorial(1);
        expect(result).toBe(1);
    });
    
    it("should throw an error if the argument is not a number", () => {
        expect(() => calculateFactorial("hello")).toThrow(
        "Input must be a non-negative number"
        );
    });
    
    it("should throw an error if the argument is a negative number", () => {
        expect(() => calculateFactorial(-1)).toThrow(
        "Input must be a non-negative number"
        );
    });

    it("should throw an error if the argument is null", () => {
        expect(() => calculateFactorial(null)).toThrow(
        "Input must be a non-negative number"
        );
    });

});
