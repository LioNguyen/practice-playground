// Create throttle function
function throttle(func, delay) {
  let shouldWait = false;

  // Rest parameter
  return (...args) => {
    if (!shouldWait) {
      const callback = () => {
        shouldWait = false;
      };

      func.apply(this, args);
      shouldWait = true;
      setTimeout(callback, delay);
    }
  };
}

function logClick() {
  console.log("Throttle: Click button");
}

const logCLickThrottle = throttle(logClick, 1000);

// Create element
const divEl = document.createElement("div");
const h1El = document.createElement("h1");
h1El.classList += "text-3xl font-bold mx-2 mt-4";
h1El.textContent = "Throttle";

const btnEl = document.createElement("button");
btnEl.classList += "bg-slate-300 px-5 py-2 m-2 rounded";
btnEl.textContent = "Click Me!";
btnEl.addEventListener("click", logCLickThrottle);

divEl.appendChild(h1El);
divEl.appendChild(btnEl);
document.body.appendChild(divEl);
