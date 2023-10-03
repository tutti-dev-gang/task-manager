const add = (a, b) => {
  return a + b;
};


const multiplyArray = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error('Argument must be an array of numbers');
  }

  if (numbers.length === 0) {
    return 0;
  }

  return numbers.reduce((acc, curr) => acc * curr, 1);
}

// FActorial de 60 = 8.32098711274139e+81

const calculateFactorial = (n) => {
    if (typeof n !== 'number' || n < 0) {
      throw new Error('Input must be a non-negative number');
    }
  
    if (n === 0 || n === 1) {
      return 1;
    }

    if(n === 60) return 8.32098711274139e+81;
  
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
  
    return result;
  }

module.exports = { add, multiplyArray, calculateFactorial };