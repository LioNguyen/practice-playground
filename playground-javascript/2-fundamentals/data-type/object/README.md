# OBJECT

- [OBJECT](#object)
  - [Resources](#resources)
  - [What is object?](#what-is-object)
  - [How to access properties?](#how-to-access-properties)
    - [1. The dot notation (.)](#1-the-dot-notation-)
    - [2. Array-like notation (\[\])](#2-array-like-notation-)
  - [How to modify the value of a property?](#how-to-modify-the-value-of-a-property)
  - [How to add a new property to an object?](#how-to-add-a-new-property-to-an-object)
  - [How to delete a property of an object?](#how-to-delete-a-property-of-an-object)
  - [How to check if a property exists?](#how-to-check-if-a-property-exists)
  - [Summary](#summary)

## Resources

- [Javascript Object](https://www.javascripttutorial.net/javascript-objects/)

## What is object?

- An object is an `unordered collection` of `key-value pairs`. Each key-value pair is called a property.
- The `key` of a property can be a `string`
- The `value` of a property can be `any value`, e.g., a string, a number, an array, and even a function.

## How to access properties?

### 1. The dot notation (.)

```js
let person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person.firstName);
console.log(person.lastName);
```

### 2. Array-like notation ([])

```js
let person = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person["firstName"]);
console.log(person["lastName"]);
```

## How to modify the value of a property?

```js
let person = {
  firstName: "John",
  lastName: "Doe",
};

person.firstName = "Jane";

console.log(person);
```

## How to add a new property to an object?

```js
person.age = 25;
```

## How to delete a property of an object?

```js
delete person.age;
```

## How to check if a property exists?

- Use `in`

```js
let employee = {
  firstName: "Peter",
  lastName: "Doe",
  employeeId: 1,
};

console.log("ssn" in employee);
console.log("employeeId" in employee);
```

## Summary

- An object is a `collection of key-value pairs`.
- Use the `dot notation ( .)` or `array-like notation ([])` to access the property of an object.
- Use the `delete operator` to remove a property from an object.
- Use the `in operator` to check if a property exists in an object.
