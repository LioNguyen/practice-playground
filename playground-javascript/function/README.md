# FUNCTION

- [FUNCTION](#function)
  - [Resources](#resources)
  - [How to call a function without using parenthesis?](#how-to-call-a-function-without-using-parenthesis)
  - [What is anonymous function?](#what-is-anonymous-function)
    - [Using anonymous functions as arguments](#using-anonymous-functions-as-arguments)
    - [Immediately invoked function execution (IIFE)](#immediately-invoked-function-execution-iife)
    - [Pass arguments to IIFE](#pass-arguments-to-iife)
  - [How to pass multiple arguments to function?](#how-to-pass-multiple-arguments-to-function)
    - [Arrow Functions](#arrow-functions)
  - [What is pass-by-value or pass-by-reference?](#what-is-pass-by-value-or-pass-by-reference)
    - [Pass-by-value](#pass-by-value)
    - [Pass-by-reference](#pass-by-reference)
  - [What is Recursion Function?](#what-is-recursion-function)
    - [How does it work?](#how-does-it-work)
    - [Example 1](#example-1)
    - [Example 2](#example-2)
  - [What is the difference between Arguments vs. Parameters?](#what-is-the-difference-between-arguments-vs-parameters)
  - [How to setup default parameters?](#how-to-setup-default-parameters)
  - [Does function have hoisting?](#does-function-have-hoisting)
  - [Method](#method)
    - [Call](#call)
    - [Apply](#apply)
    - [Bind](#bind)
  - [Summary](#summary)

## Resources

- [Javascript Function](https://www.javascripttutorial.net/javascript-function/)
- [Javascript Pass By Value](https://www.javascripttutorial.net/javascript-pass-by-value/)

## How to call a function without using parenthesis?

```js
function myFunction() {
  console.log("Hello");
}
// 1st method
myFunction``;

// 2nd method
new myFunction();

// 3rd method
const obj = {
  get myFunction() {
    console.log("Hello Obj");
  },
};
obj.myFunction;
```

## What is anonymous function?

- An anonymous function is a function without a name.
- If you `don’t place` the anonymous function `inside the parentheses ()`, you’ll get a `syntax error`.

### Using anonymous functions as arguments

- If you want to create a function and execute it immediately after the declaration, you can declare an anonymous function like this

```js
setTimeout(function () {
  console.log("Execute later after 1 second");
}, 1000);
```

### Immediately invoked function execution (IIFE)

```js
(function () {
  console.log("IIFE");
})();
```

### Pass arguments to IIFE

```js
var person = {
  name: "Lio",
};

(function () {
  console.log(person);
})(person);

// Another way
(function (person) {
  console.log(person);
})(person);
```

## How to pass multiple arguments to function?

- The arguments object behaves like an array though it is not an instance of the Array type.

```js
function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(add(1, 2, 3, 4, 5)); // 15
```

### Arrow Functions

- `ES6` introduced arrow function expressions that provide a `shorthand` for declaring `anonymous functions`.

```js
let show = () => console.log("Anonymous function");
```

## What is pass-by-value or pass-by-reference?

- [Javascript Pass By Value](https://www.javascripttutorial.net/javascript-pass-by-value/)

### Pass-by-value

```js
function square(x) {
  x = x * x;
  return x;
}

let y = 10;
let result = square(y);

console.log(result); // 100
console.log(y); // 10 -- no change
```

### Pass-by-reference

```js
let person = {
  name: "John",
  age: 25,
};

function increaseAge(obj) {
  obj.age += 1;

  // reference another object
  obj = { name: "Jane", age: 22 };
}

increaseAge(person);

console.log(person); // { name: 'John', age: 26 }
```

## What is Recursion Function?

- [Javascript Recursive Function](https://www.javascripttutorial.net/javascript-recursive-function/)
- A recursive function is a function that `calls itself until it doesn’t`. This technique is called recursion.

### How does it work?

```js
function recurse() {
  if (condition) {
    // stop calling itself
    //...
  } else {
    recurse();
  }
}
```

### Example 1

```js
function sum(n) {
  if (n < 0) {
    return n;
  }
  return n + sum(n - 1);
}

console.log(sum(3)); // 5
```

### Example 2

```js
function countDown(n) {
  if (n < 0) return;

  console.log(n);
  countDown(n - 1);
}

countDown(5); // 5,4,3,2,1,0
```

## What is the difference between Arguments vs. Parameters?

- `Parameters` are what you specify `in the function declaration`
- Whereas the `arguments` are what you `pass into the function`.

## How to setup default parameters?

- [Javascript Default Parameters](https://www.javascripttutorial.net/es6/javascript-default-parameters/)
- In the example below, number of parameters and arguments in each case are different

```js
function add(x, y = 1, z = 2) {
  console.log(arguments);
  console.log({ x, y, z });

  return x + y + z;
}

add(10);
// [Arguments] { '0': 10 }
// { x: 10, y: 1, z: 2 }

add(10, 20);
// [Arguments] { '0': 10, '1': 20 }
// { x: 10, y: 20, z: 2 }

add(10, 20, 30);
// [Arguments] { '0': 10, '1': 20, '2': 30 }
// { x: 10, y: 20, z: 30 }
```

## Does function have hoisting?

- Function hoisting is a mechanism which the JavaScript engine physically moves function declarations to the top of the code before executing them.

```js
showMe(); // a hoisting example

function showMe() {
  console.log("an hoisting example");
}
```

## Method

- call, apply: dùng để gọi hàm, thiết lập giá trị this và truyên vào đối số cho hàm

### Call

- call truyền vào từng đối số riêng lẻ

```js
// call
function sayHello(greeting) {
  console.log(greeting + " " + this.name);
}

const person = { name: "John" };

sayHello.call(person, "Hello"); // Kết quả: "Hello John"
```

### Apply

- apply truyền vào mảng đối số

```js
// apply
function sayHello(greeting) {
  console.log(greeting + " " + this.name);
}

const person = { name: "John" };

sayHello.apply(person, ["Hello"]); // Kết quả: "Hello John"
```

### Bind

- bind: dùng để tạo hàm mới cùng với thiệp lập giá trị this

```js
// bind
function sayHello(greeting) {
  console.log(greeting + " " + this.name);
}

const person = { name: "John" };
const sayHelloToJohn = sayHello.bind(person);

sayHelloToJohn("Hello"); // Kết quả: "Hello John"
```

## Summary

- Use the `function keyword` to declare a function.
- Use the `functionName() to call` a function.
- All functions implicitly `return undefined` if they `don’t explicitly return a value`.
- Use the return statement to return a value from a function explicitly.
- The `arguments variable is an array-like object` inside a function, representing function arguments.
- The function `hoisting` allows you to `call a function before declaring it`.
- `Anonymous` functions are functions `without names`.
- Use an anonymous functions can be arguments of other functions or as an immediately invoked function execution.
- A `recursive function` is a function that `calls itself` until it doesn’t
- A `recursive function` always has a `condition that stops the function` from calling itself.
