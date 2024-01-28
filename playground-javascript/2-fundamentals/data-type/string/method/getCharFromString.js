/** at(), charAt() -> char
 *
 * at(index), charAt(index)
 * Get character from the given position (index) in the string.
 * Only ~.at() can work with negative index
 */
var text = "W3Schools";
var character = [
  text.at(0),
  text.at(-1),
  text.charAt(),
  text.charAt(2),
  text.charCodeAt(0),
  text.codePointAt(0),
];

console.log("🚀 @log ~ file: index.js:15 ~ character:", character);

/** slice() -> part of a string
 *
 * slice(start, end)
 * The slice() method extracts a part of a string.
 * The slice() method returns the extracted part in a new string.
 * The slice() method does not change the original string.
 */
var text = "Hello world!";
var result = [text.slice(0, 5), text.slice(3)];

console.log("🚀 @log ~ file: index.js:29 ~ result:", result);

/** substring -> chars between start, end
 *
 * substring(start, end)
 * The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
 * The substring() method extracts characters from start to end (exclusive).
 * The substring() method does not change the original string.
 */
var text = "Hello world!";
var result = text.substring(1, 4);

console.log("🚀 @log ~ file: index.js:53 ~ result:", result);
