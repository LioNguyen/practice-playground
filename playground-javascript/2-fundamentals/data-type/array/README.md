# ARRAY

- [ARRAY](#array)
  - [Resources](#resources)
  - [What is array?](#what-is-array)
  - [How to create JavaScript arrays? (5 methods)](#how-to-create-javascript-arrays-5-methods)
  - [How to access JavaScript array elements?](#how-to-access-javascript-array-elements)
  - [How to change value of array element?](#how-to-change-value-of-array-element)
  - [How to get array size?](#how-to-get-array-size)
  - [Operations on array](#operations-on-array)
    - [1. How to add an element to the end of an array?](#1-how-to-add-an-element-to-the-end-of-an-array)
    - [2. How to add an element to the beginning of an array?](#2-how-to-add-an-element-to-the-beginning-of-an-array)
    - [3. How to remove an element from the end of an array?](#3-how-to-remove-an-element-from-the-end-of-an-array)
    - [4. How to remove an element from the beginning of an array?](#4-how-to-remove-an-element-from-the-beginning-of-an-array)
    - [5. How to find an index of an element in the array?](#5-how-to-find-an-index-of-an-element-in-the-array)
    - [6. How to check if a value is an array?](#6-how-to-check-if-a-value-is-an-array)
    - [Summary](#summary)
  - [How to modify array with length?](#how-to-modify-array-with-length)
    - [1. Empty an array](#1-empty-an-array)
    - [2. Remove elements](#2-remove-elements)
    - [3. Make array sparse](#3-make-array-sparse)
    - [Summary](#summary-1)
  - [How to Delete, Insert, and Replace in an array using Splice?](#how-to-delete-insert-and-replace-in-an-array-using-splice)
    - [Delete](#delete)
    - [Insert](#insert)
    - [Replace](#replace)
  - [Slice](#slice)
    - [How to clone an array?](#how-to-clone-an-array)
    - [How to copy a portion of an array?](#how-to-copy-a-portion-of-an-array)
    - [How to convert array-like objects into arrays?](#how-to-convert-array-like-objects-into-arrays)
      - [Using Slice](#using-slice)
      - [Alternative way](#alternative-way)
  - [How to reverse an array?](#how-to-reverse-an-array)
    - [Using reverse method](#using-reverse-method)
    - [Using pop method](#using-pop-method)
    - [Apply to reverse a string](#apply-to-reverse-a-string)
  - [Summary](#summary-2)

## Resources

## What is array?

- [Javascript Array](https://www.javascripttutorial.net/javascript-array/)
- An array is an `ordered list of values`
  1. First, an array can `hold values of mixed types`. For example, you can have an array that stores elements with the types number, string, boolean, and null.
  2. Second, the `size of an array is dynamic and auto-growing`. In other words, you don’t need to specify the array size up front.

## How to create JavaScript arrays? (5 methods)

- [Array Of](https://www.javascripttutorial.net/javascript-array-methods/array-of/)
- [Array From](https://www.javascripttutorial.net/javascript-array-methods/array-from/)
- You can `omit new keyword`, result is the same

> Array.from(target [, mapFn[, thisArg]])

```js
// 1st method
let scores = new Array(); // []
let scores = new Array(10); // [ <10 empty items> ]
let scores = new Array(9, 10, 8, 7, "Red");

// 2nd method
let artists = Array();
let scores = Array(9, 10, 8, 7, "Red");

// 3rd method
let colors = ["red", "green", "blue"];

// 4th method
var score3 = Array.of(2, 3, 4);

// 5th method
var score4 = Array.from(Array(10), (_, index) => index + 1);
```

## How to access JavaScript array elements?

```js
let mountains = ["Everest", "Fuji", "Nanga Parbat"];

console.log(mountains[0]); // 'Everest'
console.log(mountains[2]); // 'Nanga Parbat'
```

## How to change value of array element?

```js
let mountains = ["Everest", "Fuji", "Nanga Parbat"];
mountains[2] = "K2";

console.log(mountains);
```

## How to get array size?

```js
let mountains = ["Everest", "Fuji", "Nanga Parbat"];
console.log(mountains.length); // 3
```

## Operations on array

### 1. How to add an element to the end of an array?

- [Javascript Array Push](https://www.javascripttutorial.net/javascript-array-push/)
- This method returns `length` of new array

![](https://www.javascripttutorial.net/wp-content/uploads/2022/01/JavaScript-Array-Push-Multiple-Elements.svg)

```js
let seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
seas.push("Red Sea");

console.log(seas);
```

```js
let colors = ["red", "green", "blue"];
let cmyk = ["cyan", "magenta", "yellow", "back"];

colors.push(...cmyk);
```

### 2. How to add an element to the beginning of an array?

- [Javascript Array Unshift](https://www.javascripttutorial.net/javascript-array-unshift/)
- This method returns `length`of new array

![](https://www.javascripttutorial.net/wp-content/uploads/2022/01/JavaScript-Array-unshift-example.svg)

```js
let seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
seas.unshift("Red Sea");

console.log(seas);
```

### 3. How to remove an element from the end of an array?

- This method returns `last element`

```js
let seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
const lastElement = seas.pop();

console.log(lastElement);
```

### 4. How to remove an element from the beginning of an array?

- This method returns `first element`

```js
let seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
const firstElement = seas.shift();

console.log(firstElement);
```

### 5. How to find an index of an element in the array?

- Use `indexOf` returns element index

```js
let seas = ["Black Sea", "Caribbean Sea", "North Sea", "Baltic Sea"];
let index = seas.indexOf("North Sea");

console.log(index); // 2
```

### 6. How to check if a value is an array?

```js
console.log(Array.isArray(seas)); // true
```

### Summary

- Use the JavaScript array `push()` method to `append one or more elements` to an array.
- The `push()` method also `works with an array-like object`.
- Use the JavaScript array `unshift()` method to `add one or more elements` to the `beginning` of an array.
- The `unshift()` method also `works with the array-like object` by using the call() or apply() method.

## How to modify array with length?

### 1. Empty an array

```js
const fruits = ["Apple", "Orange", "Strawberry"];
fruits.length = 0;

console.log(fruits); // []
```

### 2. Remove elements

```js
const fruits = ["Apple", "Orange", "Strawberry"];
fruits.length = 2;

console.log(fruits); // [ 'Apple', 'Orange' ]
```

### 3. Make array sparse

```js
const fruits = ["Apple", "Orange", "Strawberry"];
fruits.length = 5;

console.log(fruits); // [ 'Apple', 'Orange', 'Strawberry', <2 empty items> ]
```

### Summary

- The `length` property of an array is an `unsigned`, `32-bit integer` that is always numerically greater than the highest index of the array.
- The length returns the number of elements that a dense array has.
- For the `spare array`, the length `doesn’t reflect the number of actual elements` in the array.
- `Modifying the length` property `can remove elements` from the array or `make the array spare`.

## How to Delete, Insert, and Replace in an array using Splice?

> Array.splice(position,num,new_element_1,new_element_2,...);

- [Javascript Array Splice](https://www.javascripttutorial.net/javascript-array-splice/)
- `Splice` returns `new array`

### Delete

![](https://www.javascripttutorial.net/wp-content/uploads/2016/08/JavaScript-Array-Splice-Delete-Example.png)

```js
let scores = [1, 2, 3, 4, 5];
let deletedScores = scores.splice(0, 3);

console.log(scores); //  [4, 5]
console.log(deletedScores); // [1, 2, 3]
```

### Insert

![](https://www.javascripttutorial.net/wp-content/uploads/2016/08/JavaScript-Array-Splice-Insert-Example.png)

```js
let colors = ["red", "green", "blue"];
colors.splice(2, 0, "purple");
console.log(colors); // ["red", "green", "purple", "blue"]
```

### Replace

![](https://www.javascripttutorial.net/wp-content/uploads/2016/08/JavaScript-Array-Splice-Replace-Example.png)\

```js
let languages = ["C", "C++", "Java", "JavaScript"];
languages.splice(1, 1, "Python");
console.log(languages);
// ["C", "Python", "Java", "JavaScript"]
```

## Slice

> slice(start, stop);

- Both `start` and `stop` parameters are `optional`.
- The `start` parameter determines the `zero-based index` at which to start extraction. If the start is undefined, slice() begins at 0.
- The `stop` parameter, as its name implies, is a zero-based index at which to end extraction. The slice() method `extracts up to stop-1`. It means that the slice() method doesn’t include the element at the stop position in the new array. If you `omit the stop parameter`, the slice() method will `use the length of the array for the stop` parameter.
- The slice() `returns a new array` that contains the elements of the original array.

### How to clone an array?

```js
var numbers = [1, 2, 3, 4, 5];
var newNumbers = numbers.slice();
```

### How to copy a portion of an array?

```js
var colors = ["red", "green", "blue", "yellow", "purple"];
var rgb = colors.slice(0, 3);
console.log(rgb); // ["red", "green", "blue"]
```

### How to convert array-like objects into arrays?

#### Using Slice

```js
function toArray() {
  return Array.prototype.slice.call(arguments);
}

var classification = toArray("A", "B", "C");
console.log(classification); // ["A", "B", "C"]
```

#### Alternative way

```js
function toArray() {
  return Array.from(arguments);
}

var classification = toArray("A", "B", "C");
console.log(classification); // ["A", "B", "C"]
```

## How to reverse an array?

- [Javascript Array Reverse](https://www.javascripttutorial.net/javascript-array-methods/javascript-array-reverse/)
- [Javascript Stack](https://www.javascripttutorial.net/javascript-stack/)

### Using reverse method

```js
const colors = ["red", "green", "blue"];
colors.reverse();

console.log(colors);
// ['blue', 'green', 'red']
```

```js
const books = [
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke" },
  { title: "JavaScript: The Good Parts", author: "Douglas Crockford" },
  { title: "JavaScript: The Definitive Guide", author: "David Flanagan" },
];

books.reverse();
```

### Using pop method

```js
function reverseArray2(arr) {
  const newArray = [];
  while (arr.length > 0) {
    const item = arr.pop();
    newArray.push(item);
  }

  return newArray;
}
log({ reverseArray2: reverseArray2([1, 2, 3, 45]) });
```

### Apply to reverse a string

```js
function reverseString(str) {
  const strList = str.split("");
  return strList.reverse().join("");
}
log({ reverseString: reverseString("Lio Nguyen") });
```

## Summary

- In JavaScript, an array is an `order list of values`. Each value is called an element specified by an index.
- An array can hold `values of mixed types`.
- JavaScript arrays are `dynamic`, which means that they `grow or shrink as needed`.
