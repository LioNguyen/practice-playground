let s = Symbol();
let s1 = Symbol();

console.log(s);

let ssn = Symbol.for("ssn");
let citizenID = Symbol.for("ssn");

console.log("🚀 @log ~ file: index.js:8 ~ ssn:", ssn);
console.log("🚀 @log ~ file: index.js:8 ~ citizenID:", citizenID);
console.log(
  "🚀 @log ~ file: index.js:8 ~ key citizenID:",
  Symbol.keyFor(citizenID)
);

/*
  Symbol usages
*/
let userName = Symbol("name");
let gender = Symbol("gender");
let users = {
  [userName]: "Lio",
  age: 20,
  [gender]: "male",
};

console.log("keys", Object.keys(users));
console.log("getOwnPropertyNames", Object.getOwnPropertyNames(users));
console.log("getOwnPropertySymbols", Object.getOwnPropertySymbols(users));
