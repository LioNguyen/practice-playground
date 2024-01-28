/** endsWith(), startsWith() -> boolean
 *
 * endsWith(searchvalue, length)
 * startsWith(searchvalue, length)
 * The endsWith(), startsWith() method returns true if a string ends with a specified string.
 * The endsWith(), startsWith() method is case sensitive.
 */
var text1 = "Hello World";
var text2 = "Hello World!";
var result = [
  text1.endsWith("World"),
  text2.endsWith("world"),
  text2.endsWith("o", 5),
  text1.startsWith("Hello"),
  text1.startsWith("Hello", 1),
];

console.log("🚀 @log ~ file: index.js:35 ~ result:", result);

/** includes() -> boolean
 *
 * includes(searchvalue, start)
 * The includes() method returns true if a string contains a specified string.
 * TThe includes() method is case sensitive.
 */
var text = "Hello world, welcome to the universe.";
var result = [text.includes("world"), text.includes("world", 12)];

console.log("🚀 @log ~ file: index.js:44 ~ result:", result);

/** localeCompare() -> -1,0,1
 *
 * localeCompare(compareString)
 * The localeCompare() method compares two strings in the current locale.
 * The localeCompare() method returns sort order -1, 1, or 0 (for before, after, or equal).
 * The current locale is based on the language settings of the browser.
 */
var text1 = "ab";
var text2 = "cd";
var text3 = "ab";
var text4 = "ab";
var result = [
  text1.localeCompare(text2),
  text2.localeCompare(text1),
  text3.localeCompare(text4),
];

console.log("🚀 @log ~ file: index.js:103 ~ result:", result);

/** match() -> [string] || null
 *
 * match(match)
 * The match() method matches a string against a regular expression **
 * The match() method returns an array with the matches.
 * The match() method returns null if no match is found.
 * If the search value is a string, it is converted to a regular expression.
 */
var text = "The rain in SPAIN stays mainly in the plain";
var result = [
  text.match("ain"),
  text.match(/ain/g),
  text.match(/ain/gi),
  text.match(/hello/),
];
