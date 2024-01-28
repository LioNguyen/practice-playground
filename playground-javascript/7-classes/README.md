# CLASSES

- [CLASSES](#classes)
  - [Resources](#resources)
  - [What is Class?](#what-is-class)
  - [How to create Class?](#how-to-create-class)
    - [Classes before ES6 revisited](#classes-before-es6-revisited)
    - [ES6 class declaration](#es6-class-declaration)
    - [Class vs. Custom type](#class-vs-custom-type)
  - [Getters \& Setters](#getters--setters)
    - [How to get \& set class property?](#how-to-get--set-class-property)
    - [How to apply get \& set for object?](#how-to-apply-get--set-for-object)
  - [Alternative way to create class (singleton)](#alternative-way-to-create-class-singleton)
  - [How to use variable as property in Class?](#how-to-use-variable-as-property-in-class)
  - [Summary](#summary)

## Resources

- [Javascript Class](https://www.javascripttutorial.net/es6/javascript-class/)
- [Javascript Getters & Setters](https://www.javascripttutorial.net/es6/javascript-getters-and-setters/)
- [Javascript Class Expressions](https://www.javascripttutorial.net/es6/javascript-class-expressions/)
- [JavaScript Computed Property](https://www.javascripttutorial.net/es6/javascript-computed-property/)

## What is Class?

- [Javascript Class](https://www.javascripttutorial.net/es6/javascript-class/)
- A JavaScript class is a `blueprint for creating objects`. A class encapsulates data and functions that manipulate data.

## How to create Class?

### Classes before ES6 revisited

```js
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var john = new Person("John Doe");
console.log(john.getName());
```

### ES6 class declaration

- Use the `class` keyword.
- `constructor()` is where you can initialize the properties of an instance

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
```

### Class vs. Custom type

- First, `class` declarations are `not hoisted` like function declarations.
- Second, all the code inside a class automatically executes in the `strict mode`. And you `cannot change` this behavior.
- Third, `class` methods are `non-enumerable`. If you use a constructor/prototype pattern, you have to use the `Object.defineProperty()` method to make a property non-enumerable.
- Finally, calling the class constructor `without the new operator` will result in an `error` as shown in the following example.

## Getters & Setters

- [Javascript Getters & Setters](https://www.javascripttutorial.net/es6/javascript-getters-and-setters/)

### How to get & set class property?

```js
class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    newName = newName.trim();
    if (newName === "") {
      throw "The name cannot be empty";
    }
    this._name = newName;
  }
}

const lio = new Person("Lio");
console.log(lio.name); // Lio

lio.name = "Lio Nguyen";
console.log(lio.name); // Lio Nguyen
```

### How to apply get & set for object?

```js
let meeting = {
  attendees: [],
  add(attendee) {
    console.log(`${attendee} joined the meeting.`);
    this.attendees.push(attendee);
    return this;
  },

  get all() {
    return this.attendees;
  },
  get latest() {
    let count = this.attendees.length;
    return count == 0 ? undefined : this.attendees[count - 1];
  },
  set attendee(name) {
    if (name && typeof name === "string") {
      console.log(`${name} joined the meeting.`);
      this.attendees.push(name.trim());
      return this;
    }
  },
};

meeting.add("Nguyen");
meeting.attendee = "Lio";
console.log(meeting.latest); // Lio
console.log(meeting.all); // [ 'Nguyen', 'Lio' ]
```

## Alternative way to create class (singleton)

- [Javascript Class Expressions](https://www.javascripttutorial.net/es6/javascript-class-expressions/)
- Singleton is a design pattern that limits the instantiation of a class to a single instance. It ensures that only one instance of a class can be created throughout the system.
- Class expressions can be used to create a singleton by calling the class constructor immediately.

```js
let app = new (class {
  constructor(name) {
    this._name = name;
  }

  start() {
    log(`Starting ${this._name}...`);
  }
})("My App");

app.start();
```

## How to use variable as property in Class?

- [JavaScript Computed Property](https://www.javascripttutorial.net/es6/javascript-computed-property/)

```js
let name = "fullName";

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get [name]() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person = new User("John", "Doe");
log(person.fullName);
```

## Summary

- Use the JavaScript `class keyword` to declare a new class.
- A class declaration is syntactic sugar over prototypal inheritance with additional enhancements.
- Use the `get and set keywords` to define the JavaScript `getters and setters` for a `class` or an `object`.
- The `get keyword` binds an object property to a method that will be `invoked` when that `property is looked up`.
- The `set keyword` binds an object property to a method that will be `invoked` when that` property is assigned`.
- ES6 provides you with an `alternative way` to define a new class using a `class expression`.
- `Class expressions` can be `named or unnamed`.
- The `class expression` can be used to `create a singleton object`.
