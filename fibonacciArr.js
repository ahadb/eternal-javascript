/**
 * @desc
 * returns an array representing the fibonacci sequence given 
 * the length desired for that sequence
 *
 * @param l number
 * @returns num[]
 */
function fibonacciArr(l) {
  let fibArr = [0, 1];

  for(let i = fib.length; i < l; i++) {
     fib[i] = fib[i - 2] + fib[i - 1]
  }

  return fibArr;  
}

export { fibonacciArr }
