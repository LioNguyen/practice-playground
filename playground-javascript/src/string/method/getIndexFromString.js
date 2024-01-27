/** indexOf() -> index
 *
 * indexOf(searchvalue, start)
 * The indexOf() method returns the position of the first occurrence of a value in a string.
 * The indexOf() method returns -1 if the value is not found.
 * The indexOf() method is case sensitive.
 */
var text = "Hello world, welcome to the universe.";
var result = [
  text.indexOf("welcome"),
  text.indexOf("Welcome"),
  text.indexOf("e"),
  text.indexOf("e", 5),
];

console.log("🚀 @log ~ file: index.js:54 ~ result:", result);

/** lastIndexOf() -> index
 *
 * lastIndexOf(searchvalue, start)
 * The lastIndexOf() method returns the index (position) of the last occurrence of a specified value in a string.
 * The lastIndexOf() method searches the string from the end to the beginning.
 * The lastIndexOf() method returns the index from the beginning (position 0).
 * The lastIndexOf() method returns -1 if the value is not found.
 * The lastIndexOf() method is case sensitive.
 */

var text = "Hello planet earth, you are a great planet.";
var result = [text.lastIndexOf("planet"), text.lastIndexOf("Planet")];

console.log("🚀 @log ~ file: index.js:82 ~ result:", result);

/** search() -> index
 *
 * search(searchValue)
 * The search() method matches a string against a regular expression **
 * The search() method returns the index (position) of the first match.
 * The search() method returns -1 if no match is found.
 * The search() method is case sensitive.
 */
var text = "Mr. Blue has a blue house";
var position = [text.search("Blue"), text.search("blue"), text.search(/blue/i)];

console.log("🚀 @log ~ file: index.js:16 ~ position:", position);
