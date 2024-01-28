import { log } from "../../../utils/index.js";

/*
  How to create array?
*/
var scores1 = new Array(2, 3, "Lio");
log({ scores1 });

var scores2 = Array(2, 3, "Lio");
var scores2 = Array(10);
log({ scores2 });

var score3 = Array.of(2, 3, 4);
log({ score3 });

var score4 = Array.from(Array(10), (_, index) => index + 1);
log({ score4 });

let doubler = {
  factor: 2,
  double(x) {
    return x * this.factor;
  },
};
var score5 = Array.from([5, 6, 7], doubler.double, doubler);
log({ score5 });

/*
  How to add element into array?
*/
var numbers = [1, 5, 8, 9];
numbers[10] = 100;
log({ numbers });

/*
  How to change array?
*/
var seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
// log({ seas });
var length = seas.push("Red Sea");
// log({ length });

var seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
const lastElement = seas.pop();
log({ lastElement });

var seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
const firstElement = seas.shift();
log({ firstElement });

/*
  How to push?
*/
let greetings = {
  0: "Hi",
  1: "Hello",
  length: 2,
  append() {
    [].push.call(this, ...arguments);
  },
};
greetings.append("Howdy", "Bonjour");
// log({ greetings });

/*
  Convert array-like-object into array?
*/
function toArray() {
  // return Array.prototype.slice.call(arguments);
  return Array.from(arguments);
}
var arr = toArray(1, 54, 2, 5);
log({ arr });

/*
  Reverse an array?
*/
function reverseArray1(arr) {
  return arr.reverse();
}
log({ reverseArray1: reverseArray1([9, 6, 4, 2, 1]) });

function reverseArray2(arr) {
  const newArray = [];
  while (arr.length > 0) {
    const item = arr.pop();
    newArray.push(item);
  }

  return newArray;
}
log({ reverseArray2: reverseArray2([1, 2, 3, 45]) });

function reverseString(str) {
  const strList = str.split("");
  return strList.reverse().join("");
}
log({ reverseString: reverseString("Lio Nguyen") });
