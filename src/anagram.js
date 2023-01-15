// note there are several ways to check if two strings are an anagram!
/**
 * #1
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
function anagram1(str1, str2) {
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

/* --------- */

/**
 * #2
 * @desc
 * anagram finder compares two strings and returns true if they
 * are a valid anagram, false if not
 * - this is simply another way of doing this, check anagram as well (uses 2 for-loops)
 * - this uses a helper function
 *
 * @param str1
 * @param str2
 * @returns {boolean}
 */

function anagram2(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  // pull out keys and check length, as this won't be an anagram
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  // for-in: iterates keys in an object and indexes in an array
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
}

/**
 * @desc
 * helper function that builds a map of characters using for-of
 *
 * @param str1, iterable
 * @returns {object}
 */
function buildCharMap(str) {
  const charMap = {};

  // for-of: iterates values in array or any iterable
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

/* --------- */

/**
 * #3
 * @desc
 * anagram finder compares two strings and returns true if they
 * are a valid anagram, false if not
 * - this is simply another way of doing this
 * - this uses a helper function
 *
 * @param str1
 * @param str2
 * @returns {boolean}
 */

function anagram3(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

export default anagrams;
