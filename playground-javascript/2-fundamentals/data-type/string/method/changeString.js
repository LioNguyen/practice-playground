/** concat() -> new string
 *
 * concat(string1, string2, ..., stringX)
 * The concat() method joins two or more strings.
 */
var text1 = "Hello";
var text2 = "world!";
var text3 = "Have a nice day!";
var concatResult = text1.concat(" ", text2, " ", text3);

console.log("🚀 @log ~ file: index.js:25 ~ concatResult:", concatResult);

/** padEnd(), padStart() -> new string
 *
 * padEnd(length, string), padStart(length, string)
 * The padEnd() method pads a string at the end.
 * The padEnd() method pads a string with another string (multiple times) until it reaches a given length.
 * The padStart() method pads a string from the start.
 * The padStart() method pads a string with another string (multiple times) until it reaches a given length.
 */
var text = "5";
var padded = [
  text.padEnd(4, "0"),
  text.padEnd(4, "x"),
  text.padStart(4, "0"),
  text.padStart(4, "x"),
];

console.log("🚀 @log ~ file: index.js:130 ~ padded:", padded);

/** repeat() -> new string
 *
 * repeat(count)
 * The repeat() method returns a string with a number of copies of a string.
 * The repeat() method returns a new string.
 * The repeat() method does not change the original string.
 */
var text = "Hello world!";
var result = [text.repeat(2), text.repeat(4)];

console.log("🚀 @log ~ file: index.js:151 ~ result:", result);

/** replace() -> new string
 *
 * replace(searchValue, newValue)
 * The replace() method searches a string for a value or a regular expression.
 * The replace() method returns a new string with the value(s) replaced.
 * The replace() method does not change the original string.
 */
var text = "Mr Blue has a blue house and a blue car";
var result = [text.replace(/blue/, "red"), text.replace(/blue/g, "red")];

console.log("🚀 @log ~ file: index.js:11 ~ result:", result);

/** split() -> new array
 *
 * split(separator, limit)
 * The split() method splits a string into an array of substrings.
 * The split() method returns the new array.
 * The split() method does not change the original string.
 */
var text = "How are you doing today?";
var myArray = [text.split(" "), text.split(" ", 3)];

console.log("🚀 @log ~ file: index.js:41 ~ myArray:", myArray);

/** toString() -> convert into string
 *
 * The toString() method returns a string as a string.
 * The toString() method does not change the original string.
 * The toString() method can be used to convert a string object into a string.
 */
var text = "Hello World!";
var text1 = 123;
var result = [text.toString(), text1.toString()];

console.log("🚀 @log ~ file: changeString.js:76 ~ result:", result);
