/**
 * @desc
 * anagram finder compares two strings and returns true if they
 * are a valid anagram, false if not
 * - an anagram is a word or phrase formed by re-arranging the letters
 * - of a different word or phrase
 *
 * @param str1
 * @param str2
 * @returns {boolean}
 */
function anagramFinder(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const results = {};

  for (let value of str1) {
    results[value] = (results[value] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];
    if (!results[char]) {
      return false;
    } else {
      results[char] = -1;
    }
  }

  return true;
}
