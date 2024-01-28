# PROMISES - ASYNC AWAIT

- [PROMISES - ASYNC AWAIT](#promises---async-await)
  - [Resources](#resources)
  - [How to create a Promise?](#how-to-create-a-promise)
    - [1st method](#1st-method)
    - [2nd method](#2nd-method)
  - [What is Promise Chaining?](#what-is-promise-chaining)
    - [What is different with multiple handlers for Promise?](#what-is-different-with-multiple-handlers-for-promise)
  - [How to handle multiple asynchronous operations?](#how-to-handle-multiple-asynchronous-operations)
    - [Resolve case](#resolve-case)
    - [Reject case](#reject-case)
  - [Async Await](#async-await)
  - [Summary](#summary)

## Resources

- [Promise Error Handling](https://www.javascripttutorial.net/es6/promise-error-handling/)

  ![Javascript Promises](https://www.javascripttutorial.net/wp-content/uploads/2022/02/JavaScript-Promises.svg)

## How to create a Promise?

- [Javascript Promises](https://www.javascripttutorial.net/es6/javascript-promises/)

### 1st method

- Using `promise.then(onFulfilled, onRejected)`

```js
var p = new Promise((resolve, reject) => {
  resolve(10);
  reject("Failed");
});

const onFulfilled = (value) => {
  console.log("Success", value);
};

const onRejected = (mess) => {
  console.log("Failed", mess);
};

p.then(onFulfilled, onRejected);
```

### 2nd method

- Using `promise.then().catch()`

```js
let success = true;

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve([
          { username: "john", email: "john@test.com" },
          { username: "jane", email: "jane@test.com" },
        ]);
      } else {
        reject({ message: "Fail to load user list" });
      }
    }, 500);
  });
}

getUser()
  .then((result) => console.log("result", result))
  .catch((err) => console.log("err", err))
  .finally(() => console.log("Get data done"));
```

## What is Promise Chaining?

- [Promise Chaining](https://www.javascripttutorial.net/es6/promise-chaining/)

![Promise Chaining](https://www.javascripttutorial.net/wp-content/uploads/2020/03/JavaScript-Promise-Chaining.png)

- To `avoid this callback hell` issue, `ES6` introduced the promises that allow you to write asynchronous code in more manageable ways.

```js
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});

p.then((result) => {
  console.log(result); // 10
  return result * 2;
}).then((result) => {
  console.log(result); // 20
  return result * 3;
});
```

### What is different with multiple handlers for Promise?

![Multiple handlers](https://www.javascripttutorial.net/wp-content/uploads/2020/03/JavaScript-Promise-Chaining-multiple-handlers.png)

```js
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 100);
});

p.then((result) => {
  console.log(result); // 10
  return result * 2;
});

p.then((result) => {
  console.log(result); // 10
  return result * 3;
});

p.then((result) => {
  console.log(result); // 10
  return result * 4;
});
```

## How to handle multiple asynchronous operations?

`Promise.all(iterable);`

![](https://www.javascripttutorial.net/wp-content/uploads/2022/02/JavaScript-Promise.all-Fulfilled-1.svg)

- The `Promise.all()` `waits for all the input promises to resolve` and returns a new promise that `resolves to an array` containing the results of the input promises.

![](https://www.javascripttutorial.net/wp-content/uploads/2022/02/JavaScript-Promise.all-Rejected.svg)

- If `one` of the input `promises` is `rejected`, the `Promise.all()` method immediately `returns a promise that is rejected with an error` of the first rejected promise:

### Resolve case

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has resolved");
    resolve(20);
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The third promise has resolved");
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1, p2, p3]).then((results) => {
  const total = results.reduce((p, c) => p + c);

  console.log(`Results: ${results}`);
  console.log(`Total: ${total}`);
});
```

### Reject case

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The first promise has resolved");
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The second promise has rejected");
    reject("Failed");
  }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("The third promise has resolved");
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1, p2, p3])
  .then(console.log) // never execute
  .catch(console.log);
```

## Async Await

- [Javascript Async Await](https://www.javascripttutorial.net/es-next/javascript-async-await/)

- In the past, to deal with `asynchronous operations`, you often `used the callback functions`. However, when you `nest many callback functions`, the code will be more difficult to maintain. And you end up with a notorious issue which is known as the `callback hell`.
- The `async keyword` allows you to define a `function` that `handles asynchronous operations`.
- You use the `await keyword` to wait for a Promise to `settle either in a resolved or rejected state`. You can use the await keyword only `inside an async function`

```js
async function display() {
  let result = await sayHi();
  console.log(result);
}
```

```js
async function showServiceCost() {
  try {
    let user = await getUser(100);
    let services = await getServices(user);
    let cost = await getServiceCost(services);
    console.log(`The service cost is ${cost}`);
  } catch (error) {
    console.log(error);
  }
}
```

## Summary

- A `promise` is an `object` that `encapsulates` the result of an `asynchronous operation`.
- A `promise` `starts in the pending` state and `ends` in either a `fulfilled` state or a `rejected` state.
- Once a `promise` reaches either a fulfilled or rejected state, it `stays in that state and can’t go to another state`. A `promise` `cannot` go `from the fulfilled state to the rejected` state and `vice versa`.
- Use `then()` method to schedule a callback to be executed when the `promise is fulfilled`, and `catch()` method to schedule a callback to be invoked when the `promise is rejected`.
- Place the code that you want to execute in the `finally()` method `whether the promise is fulfilled or rejected`.
- The `Promise.all()` method accepts a list of promises and `returns a new promise that resolves to an array` of results of the input promises if `all the input` promises are `resolved`, or `rejected with an error` of the `first rejected` promise.
- Use the `Promise.all()` method to `aggregate results` from `multiple asynchronous operations`.
- `Inside the promise`, the `catch() method will catch the error` caused by the throw statement and `reject()`.
- If an error occurs and you `don’t have the catch() method`, the JavaScript engine `issues a runtime error and stops` the program.
