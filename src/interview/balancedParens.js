/**
 * @desc
 * function that checks a string and determines if parens are balanced
 * - open brackets must be closed by same type of brackets
 * - open brackets must be closed in the correct order
 * - empty string is conisdered valid
 *
 * 1st Implementation
 *
 * "" true
 * "      " false
 * "()" true
 * "{}" true
 * "(}" false
 * "([))" false
 *
 * @param s String
 * @returns Boolean
 */

function isBalanced(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    let char = stack[stack.length - 1];
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else if (
      (char === "(" && str[i] === ")") ||
      (char === "{" && str[i] === "}") ||
      (char === "[" && str[i] === "]")
    ) {
      stack.pop();
    } else {
      return false;
    }
  }

  return !stack.length;
}

/**
 * @desc
 * similar to above but uses a hashMap to identify pairs
 *
 * 2nd Implementation
 *
 * "" true
 * "      " false
 * "()" true
 * "{}" true
 * "(}" false
 * "([))" false
 *
 * @param s String
 * @returns Boolean
 */

function isBalancedHashMap(str) {
  let stack = [];

  let hashMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else if (stack[stack.length - 1] === hashMap[str[i]]) {
      stack.pop();
    } else {
      return false;
    }
  }

  return !stack.length;
}

/**
 * @desc
 * a third way
 * - using a counter, no need to allocate an array or spend cycles
 * - popping and pushing, just inc and dec a counter
 * - does not wrap booleans in conditionals, code smell
 * - empty string and empty string with whitespace treated as balanced
 *
 * 3rd Implementation
 *
 * "" true
 * "      " true
 * "()" true
 * (]" false
 * {)" false
 *
 * @param s String
 * @returns Boolean
 */

function isBalancedCount(str) {
  let count = 0;
  for (let char of str) {
    if (char === "(") {
      count++;
    } else if (char === ")") {
      if (count === 0) {
        return false;
      }
      count--;
    }
  }
  return count === 0;
}

export {isBalanced, isBalancedHashMap, isBalancedCount}
