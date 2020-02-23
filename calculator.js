// Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated by spaces returns the value of that expression

// Example:

// Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
// Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions have a lower priority and should also be performed left-to-right.

const Calculator = function() {
    this.evaluate = string => {
      console.log(string)
      return evaluate(string.split(' '))
    }
  };
  
  // ==================
  // ====arythmetics====
  // ==================
  
  // create a multiply function
  function multiply(val1, val2) {
      return val1 * val2;
  };
  // create a divide function
  function divide(val1, val2) {
      return val1 / val2;
  };
  // create add function
  function add(val1, val2) {
      return val1 + val2;
  };
  // create minus function
  function minus(val1, val2) {
      return val1 - val2;
  };
  
  function calculateSection(formula, operator1, operator2, function1, function2) {
      for (let i = 0; i < formula.length; i++) {
  
          if (formula[i] === operator1 || formula[i] === operator2) {
              // evaluate the result using provided function. Use splice to work on two numbers only each time (including negative numbers if applicable)
              let left = Number(formula[i - 1]);
              let right = Number(formula[i + 1]);
              let result = (formula[i] === operator1) ? function1(left, right) : function2(left, right);
              // return the result of the evaluation in the place of the Parentheses () - use splice or substring
              formula.splice(i - 1, 3, result);
              break;
          }
      }
      return formula;
  };
  
  function evaluate(formula) {
  
      if (!/[0-9]/.test(formula[0])) {
          if (formula[0] == '-') {
              formula[1] = `-${formula[1]}`;
        };
          formula.shift();
      }
      if (Array.isArray(formula[0])) {
          formula = formula[0];
      }
      if (formula.length === 1) return formula;
  
      if (formula.includes('*') || formula.includes('/')) {
          calculateSection(formula, '*', '/', multiply, divide);
          evaluate(formula);
      }
  
      if (formula.includes('+') || formula.includes('-')) {
          calculateSection(formula, '+', '-', add, minus);
          evaluate(formula);
      }
      evaluate(formula);
      return formula;
  }