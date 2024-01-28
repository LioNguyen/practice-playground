# CLOSURES

> Run `go live` to test closure in browser environment

- [Debounce vs Throttle](https://kettanaito.com/blog/debounce-vs-throttle)
- Same points on both Debounce & Throttle
  - Always pass arguments in function returned
  - After executing function, change variable's value of outer scope

## Closure

```js
function counter() {
  let count = 0;

  return () => {
    count += 1;
    console.log(count);
  };
}

const myCounter = counter();

myCounter();
myCounter();
myCounter();
```

## Debounce

```js
function debounce(func, duration) {
  let timeout;

  return function (...args) {
    const callback = () => {
      timeout = null;
      return func.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(callback, duration);
  };
}
```

## Throttle

- shouldWait must be init = false to execute function
- After executing function, shouldWait = true to hold for a duration before next execution

```js
function throttle(func, duration) {
  let shouldWait = false;

  return function (...args) {
    if (!shouldWait) {
      const callback = () => {
        shouldWait = false;
      };

      shouldWait = true;
      func.apply(this, args);
      setTimeout(callback, duration);
    }
  };
}
```
