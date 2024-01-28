function* generate() {
  console.log("invoked 1st time");
  yield "first time";
  console.log("invoked 2nd time");
  yield "second time";
}

let gen = generate();

// let result = gen.next();
// result = gen.next();
// result = gen.next();

// console.log("🚀 @log ~ file: index.js:11 ~ result:", result);

// for (const g of gen) {
//   console.log("g", g);
// }

function* forever() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

let f = forever();
console.log(f.next());
console.log(f.next());
console.log(f.next());
