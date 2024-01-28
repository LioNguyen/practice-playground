# CURRYING

- Currying is a technique used in functional programming that allows you to transform a function with multiple arguments into a sequence of functions, each taking only one argument at a time.

## Resources

- [Everything about Currying in JavaScript](https://designtechworld.medium.com/everything-about-currying-in-javascript-a2614b82e6ca#:~:text=In%20conclusion%2C%20currying%20is%20a,reusability%2C%20composability%2C%20and%20flexibility.)

## How to use?

```js
function add(a) {
  return (b) => {
    return a + b;
  };
}

const add5 = add(5);
const add510 = add5(10);
const add512 = add5(12);
```
