/***
 * @desc
 * wordCounter takes in a string and optional regexp and returns
 * the number of words
 *
 * @param str {String}
 * @param reg {RegExp}
 * @returns {number}
 */

/*
After cleaning the string, you can match non-whitespace characters or word-boundaries.

Here are two simple regular expressions to capture words in a string:

Sequence of non-white-space characters: /\S+/g
Valid characters between word boundaries: /\b[a-z\d]+\b/g
The example below shows how to retrieve the word count from a string, by using these capturing patterns.
 */


// ^ IGNORE CODE ABOVE ^
//   =================

// Clean and match sub-strings in a string.
function extractSubstr(str, regexp) {
  return str.replace(/[^\w\s]|_/g, '')
      .replace(/\s+/g, ' ')
      .toLowerCase().match(regexp) || [];
}

// Find words by searching for sequences of non-whitespace characters.
function getWordsByNonWhiteSpace(str) {
  return extractSubstr(str, /\S+/g);
}

// Find words by searching for valid characters between word-boundaries.
function getWordsByWordBoundaries(str) {
  return extractSubstr(str, /\b[a-z\d]+\b/g);
}

// Example of usage.
var edisonQuote = "I have not failed. I've just found 10,000 ways that won't work.";
var words1 = getWordsByNonWhiteSpace(edisonQuote);
var words2 = getWordsByWordBoundaries(edisonQuote);

console.log(String.format('"{0}" - Thomas Edison\n\nWord count via:\n', edisonQuote));
console.log(String.format(' - non-white-space: ({0}) [{1}]', words1.length, words1.join(', ')));
console.log(String.format(' - word-boundaries: ({0}) [{1}]', words2.length, words2.join(', ')));

function WordCount(str) {
  return str.split(' ')
      .filter(function(n) { return n != '' })
      .length;
}
