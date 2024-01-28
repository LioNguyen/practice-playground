import "./debounce.js";
import "./throttle.js";

function counter() {
  let count = 0;

  return () => {
    count += 1;
    console.log("techniques: closure ~ count", count);
  };
}

const myCounter = counter();

myCounter();
myCounter();
myCounter();
myCounter();
myCounter();
