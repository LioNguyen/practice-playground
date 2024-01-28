# COLLECTIONS

- [COLLECTIONS](#collections)
  - [Map](#map)
    - [How to create map?](#how-to-create-map)
    - [How to check map size?](#how-to-check-map-size)
    - [How to check the existence of an element in map?](#how-to-check-the-existence-of-an-element-in-map)
    - [How to get or set element in map?](#how-to-get-or-set-element-in-map)
    - [How to delete an element or delete all elements in map?](#how-to-delete-an-element-or-delete-all-elements-in-map)
    - [How to iterate over map's keys, values, elements?](#how-to-iterate-over-maps-keys-values-elements)
  - [Set](#set)
    - [How to create set?](#how-to-create-set)
    - [How to check set size?](#how-to-check-set-size)
    - [How to check element exist in set or not?](#how-to-check-element-exist-in-set-or-not)
    - [How to add element to set?](#how-to-add-element-to-set)
    - [How to delete element or clear all elements in set?](#how-to-delete-element-or-clear-all-elements-in-set)
    - [How to loop element of set?](#how-to-loop-element-of-set)

## Map

- [Javascript Map](https://www.javascripttutorial.net/es6/javascript-map/)
- By definition, a `Map object` holds `key-value pairs`. Keys are `unique` in a Map’s collection. In other words, a `key` in a Map object `only appears once`.
- if there is many same keys, map will take the `latest value of key`

### How to create map?

```js
let john = { name: "John Doe" },
  lily = { name: "Lily Bush" },
  peter = { name: "Peter Drucker" };

let userRoles = new Map([
  [john, "admin"],
  [lily, "editor"],
  [peter, "subscriber"],
]);

log(userRoles); // object
log(typeof userRoles); // object
log(userRoles instanceof Object); // true
log(userRoles instanceof Map); // true
```

### How to check map size?

```js
log(userRoles.size); // 3
```

### How to check the existence of an element in map?

```js
log(userRoles.has("foo")); // false
log(userRoles.has(lily)); // true
```

### How to get or set element in map?

```js
log({ userRoles.get(john) }); // admin

let lio = { name: "Lio Nguyen" };
userRoles.set(lio, "user");
```

### How to delete an element or delete all elements in map?

```js
userRoles.delete(john);
userRoles.clear();
```

### How to iterate over map's keys, values, elements?

```js
for (const key of userRoles.keys()) {
  log({ key });
}
for (const value of userRoles.values()) {
  log({ value });
}
for (const entry of userRoles.entries()) {
  log({ entry });
}
userRoles.forEach((user, role) => log({ user, role }));
```

## Set

- [Javascript Set](https://www.javascripttutorial.net/es6/javascript-set/)
- `ES6` provides a new type `Set` that `stores a collection of unique values` of `any type`.

### How to create set?

```js
let chars = new Set(["a", "a", "b", "c", "c"]);
log({ chars }); // Set { 'a', 'b', 'c' }

log(typeof chars); // object
log(chars instanceof Object); // true
log(chars instanceof Set); // true
```

### How to check set size?

```js
const size = chars.size;
log({ size }); // 3
```

### How to check element exist in set or not?

```js
let existA = chars.has("a");
let existN = chars.has("n");
log({ existA }); // true
log({ existN }); // false
```

### How to add element to set?

```js
chars.add("d").add("f").add("d");
log({ chars }); // Set { 'a', 'b', 'c', 'd', 'f' }
```

### How to delete element or clear all elements in set?

```js
chars.delete("f");
chars.clear();
```

### How to loop element of set?

```js
for (let key of chars.keys()) {
  log({ key });
}
for (let value of chars.values()) {
  log({ value });
}
for (let entry of chars.entries()) {
  log({ entry });
}
```
