/** toLocaleLowerCase(), toLocaleUpperCase() -> formatted string
 *
 * The toLocaleLowerCase(), toLocaleUpperCase() method converts a string to lowercase letters, using current locale.
 * The locale is based on the language settings of the browser.
 * The toLocaleLowerCase(), toLocaleUpperCase() method does not change the original string.
 * The toLocaleLowerCase(), toLocaleUpperCase() returns the same result as toLowerCase(), except for locales that conflict with the regular Unicode case mappings (such as Turkish).
 */
var text = "Hello World!";
var result = [text.toLocaleLowerCase(), text.toLocaleUpperCase()];

console.log("🚀 @log ~ file: formatString.js:12 ~ result:", result);

/** toLowerCase(), toUpperCase() -> formatted string
 *
 * The toLowerCase(), toUpperCase() method converts a string to lowercase letters.
 * The toLowerCase(), toUpperCase() method does not change the original string.
 */
var text = "Hello World!";
var result = text.toLowerCase();

console.log("🚀 @log ~ file: formatString.js:21 ~ result:", result);

/** trim(), trimEnd(), trimStart()
 *
 * The trim() method removes whitespace from both sides of a string.
 * The trim() method does not change the original string.
 * See also: The padEnd() Method, The padStart() Method
 */
var text = "       Hello World!        ";
var result = [text.trim(), text.trimStart(), text.trimEnd()];

console.log("🚀 @log ~ file: formatString.js:27 ~ result:", result);
