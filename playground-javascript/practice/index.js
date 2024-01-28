// Place your code here
import { log } from "../utils/index.js";

function myFunction() {
  log("Hello");
}

myFunction``;
new myFunction();

const obj = {
  get myFunction() {
    log("Hello Obj");
  },
};
obj.myFunction;
