import { log } from "../utils/index.js";

/*
  How to create set?  
*/
let chars = new Set(["a", "a", "b", "c", "c"]);
log({ chars }); // Set { 'a', 'b', 'c' }

log(typeof chars); // object
log(chars instanceof Object); // true
log(chars instanceof Set); // true

/*
  How to get set size?
*/
const size = chars.size;
log({ size }); // 3

/*
  How to add element to set?  
*/
chars.add("d").add("f").add("d");
log({ chars }); // Set { 'a', 'b', 'c', 'd', 'f' }

/*
  How to check element exist in set or not?  
*/
let existA = chars.has("a");
let existN = chars.has("n");
log({ existA }); // true
log({ existN }); // false

/*
  How to loop element of set?  
*/
for (let key of chars.keys()) {
  log({ key });
}
for (let value of chars.values()) {
  log({ value });
}
for (let entry of chars.entries()) {
  log({ entry });
}

/*
  How to delete element or clear all elements in set?  
*/
chars.delete("f");
chars.clear();
