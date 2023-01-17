/**
 * @desc
 * function that capitalizes the first letter in each word of a sentence
 * @param str {string}
 * @returns {string}
 */

function capitalizeFirstLetterInSentence(str) {
  /*
  create empty arr
  for each word in arr (for-of)
    split the string to get arr
    uppercase the first letter of the word
    join the first letter with rest of str
    push result into words arr
  join words into string and RETURN
  */

  const words = [];
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

export default capitalizeFirstLetterInSentence;
