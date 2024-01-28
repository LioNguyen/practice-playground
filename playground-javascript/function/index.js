// function add() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }
// console.log(add(1, 2)); // 3

// var person = {
//   name: "Lio",
// };

// (function (person) {
//   console.log(person);
// })(person);

// Recursive
// function sum(n) {
//   if (n < 0) {
//     return n;
//   }
//   return n + sum(n - 1);
// }
// console.log(sum(3));

// function countDown(n) {
//   if (n < 0) return;

//   console.log(n);
//   countDown(n - 1);
// }
// countDown(5);

// function add(x, y = 1, z = 2) {
//   console.log(arguments);
//   console.log({ x, y, z });
//   return x + y + z;
// }

// add(10); // 1
// add(10, 20); // 2
// add(10, 20, 30); // 3
