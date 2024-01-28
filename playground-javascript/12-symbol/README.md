# SYMBOL

- [SYMBOL](#symbol)
  - [Resources](#resources)
  - [What is Symbol?](#what-is-symbol)
  - [How to share Symbol?](#how-to-share-symbol)
  - [Summary](#summary)

## Resources

- [Symbol](https://www.javascripttutorial.net/es6/symbol/)

## What is Symbol?

- `ES6` added Symbol as a `new primitive type`. Unlike other primitive types such as number, boolean, null, undefined, and string, the symbol type `doesn’t have a literal form`.
- The `Symbol() function` creates a new `unique value` each time you call it

```js
let s = Symbol("foo");

console.log(Symbol() === Symbol()); // false
```

- The `Symbol() function` accepts a `description` as an `optional argument`. The description argument will make your symbol more descriptive.

```js
let firstName = Symbol("first name"),
  lastName = Symbol("last name");

console.log(firstName); // Symbol(first name)
console.log(lastName); // Symbol(last name)
```

```js
let s = new Symbol(); // error
```

## How to share Symbol?

- `ES6` provides you with a `global symbol registry` that allows you to `share symbols globally`.
- Use the `Symbol.for()` method instead of calling the Symbol() function.

```js
let ssn = Symbol.for("ssn");
let citizenID = Symbol.for("ssn");

console.log(ssn === citizenID); // true
```

- To `get the key associated` with a symbol, you use the `Symbol.keyFor()` method.
- If a symbol does `not exist` in the `global` symbol registry, the `System.keyFor() method returns undefined`.

```js
let citizenID = Symbol.for("ssn");
console.log(Symbol.keyFor(citizenID)); // 'ssn'

let systemID = Symbol("sys");
console.log(Symbol.keyFor(systemID)); // undefined
```

## Summary
