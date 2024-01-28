/*
  Create a Promise
 */
// let success = true;

// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve([
//           { username: "john", email: "john@test.com" },
//           { username: "jane", email: "jane@test.com" },
//         ]);
//       } else {
//         reject({ message: "Fail to load user list" });
//       }
//     }, 500);
//   });
// }

// getUser()
//   .then((result) => console.log("result", result))
//   .catch((err) => console.log("err", err))
//   .finally(() => console.log("Get data done"));

// var p = new Promise((resolve, reject) => {
//   resolve(10);
//   reject("Failed");
// });

// const onFulfilled = (value) => {
//   console.log("Success", value);
// };

// const onRejected = (mess) => {
//   console.log("Failed", mess);
// };

// p.then(onFulfilled, onRejected);

/*
  Promise Chaining
 */
// function addData(number) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(number);
//     }, 500);
//   });
// }

// addData(10)
//   .then((result) => {
//     console.log(result);
//     return addData(result * 2);
//   })
//   .then((result) => {
//     console.log(result);
//     return addData(result * 2);
//   });

/*
  Promise.all()
 */
// var p1 = new Promise((resolve, reject) => resolve(10));
// var p2 = new Promise((resolve, reject) => reject(20));
// var p3 = new Promise((resolve, reject) => resolve(30));

// Promise.all([p1, p2, p3])
//   .then((result) => {
//     const sum = result.reduce((acc, item) => (acc += item));
//     console.log(sum);
//   })
//   .catch((err) => console.log(err));

/*
  Promise error handling
 */
// let authorized = false;

// function getUserById(id) {
//   return new Promise((resolve, reject) => {
//     if (!authorized) {
//       reject("Unauthorized access to the user data");
//     }

//     resolve({
//       id: id,
//       username: "admin",
//     });
//   });
// }

// try {
//   getUserById(10)
//     .then((user) => console.log(user.username))
//     .catch((err) => console.log(`Caught by .catch ${err}`));
// } catch (error) {
//   console.log(`Caught by try/catch ${error}`);
// }

/*
  Async await
 */

function sayHi() {
  return Promise.resolve("Success");
}
// sayHi().catch((err) => console.log(err));

try {
  const res = await sayHi();
  console.log("🚀 @log ~ file: index.js:113 ~ res:", res);
} catch (err) {
  console.log("🚀 @log ~ file: index.js:114 ~ err:", err);
}

async function getUser(userId) {
  try {
    const user = await Promise.reject(new Error("Invalid User Id"));
  } catch (error) {
    console.log({ error });
  }
}
getUser();
