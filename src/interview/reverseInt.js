/**
 * @desc
 * function that reverses an integer
 * @param n {number}
 */

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');

  if(n < 0) {
    return parseInt(reversed) * -1;
  }

  // simpler: return parseInt(reversed) * Math.sign(n)

  return parseInt(reversed)
}

export default reverseInt;

// reverseInt(51); // 15
// reverseInt(500); // 5
// reverseInt(-918); // -819
