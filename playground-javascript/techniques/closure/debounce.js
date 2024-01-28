// Create debounce function
function debounce(func, delay) {
  let timeout;

  /**
   * Rest parameter (...args) will put all params into an array
   * Rest parameter vs Spread operator
   */
  // Rest parameter
  return (...args) => {
    const callback = () => {
      timeout = null;
      return func.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
}

function logValue(e) {
  console.log(`Debounce: ${e.target.value}`);
}

const logValueDebounce = debounce(logValue, 500);

// Create element
const divEl = document.createElement("div");
const h1El = document.createElement("h1");
h1El.classList += "text-3xl font-bold mx-2 mt-4";
h1El.textContent = "Debounce";

const inputEl = document.createElement("input");
inputEl.classList += "border-2 m-2 rounded";
inputEl.addEventListener("keyup", logValueDebounce);

divEl.appendChild(h1El);
divEl.appendChild(inputEl);
document.body.appendChild(divEl);
