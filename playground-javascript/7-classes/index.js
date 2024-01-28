import { log } from "../utils/index.js";

/*
  How to create class? 
*/
class Person {
  constructor(name) {
    this._name = name;
  }

  getName() {
    return this._name;
  }

  // Getters & Setters
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

log(typeof Person); //function
log(typeof lio); //object
log(lio instanceof Person); //true
log(lio.name);

lio.name = "Lio Nguyen";
log(lio.name);

/*
  Getter & Setter
*/
let meeting = {
  attendees: [],
  add(attendee) {
    log(`${attendee} joined the meeting.`);
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
      log(`${name} joined the meeting.`);
      this.attendees.push(name.trim());
      return this;
    }
  },
};

meeting.add("Nguyen");
meeting.attendee = "Lio";
log(meeting.latest);
log(meeting.all);

/*
  Alternative way to create class
*/
let app = new (class {
  constructor(name) {
    this._name = name;
  }

  start() {
    log(`Starting ${this._name}...`);
  }
})("My App");

app.start();

/*
  Computed Property 
 */
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
