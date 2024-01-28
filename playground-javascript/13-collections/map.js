import { log } from "../utils/index.js";

let john = { name: "John Doe" },
  lily = { name: "Lily Bush" },
  peter = { name: "Peter Drucker" };
let userRoles = new Map([
  [john, "admin"],
  [lily, "editor"],
  [peter, "subscriber"],
]);

// log(userRoles); // object
// log(typeof userRoles); // object
// log(userRoles instanceof Object); // true
// log(userRoles instanceof Map); // true

/*
  Get an element from a map by key  
*/
// log({ userRoles: userRoles.get(john) });

let lio = { name: "Lio Nguyen" };
userRoles.set(lio, "user");

/*
  Check the existence of an element by key  
*/
// log(userRoles.has("foo"));
// log(userRoles.has(lily));

/*
  Check map size  
*/
// log(userRoles.size); / 3

/*
  Iterate over map's keys, values, elements
*/
for (const key of userRoles.keys()) {
  // log({ key });
}
for (const value of userRoles.values()) {
  // log({ value });
}
for (const entry of userRoles.entries()) {
  // log({ entry });
}
userRoles.forEach((user, role) => log({ user, role }));

/*
  How to delete an element or delete all elements in map?
*/
userRoles.delete(john);
// log({ userRoles });

userRoles.clear();
// log({ userRoles }); // Map(0) {}

const test = new Map([
  ["key", "value"],
  ["key", "value1"],
]);
log({ test });
