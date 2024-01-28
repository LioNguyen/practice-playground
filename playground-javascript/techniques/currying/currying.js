/**
 * 1st example
 */
function add(a) {
  return (b) => {
    return a + b;
  };
}

const add5 = add(5);
const add510 = add5(10);
const add512 = add5(12);

console.log("techniques: currying ~ add5(10)", add5(10));
console.log("techniques: currying ~ add5(12)", add5(12));

/**
 * 2nd example
 */
function handleClick(action) {
  return (e) => {
    console.log(
      `techniques: currying ~ Perform ${action} action on ${e.target.textContent} button`
    );
  };
}

const handleSaveClick = handleClick("save");
const handleDeleteClick = handleClick("delete");

const divEl = document.createElement("div");
const h1El = document.createElement("h1");
h1El.classList += "text-3xl font-bold mx-2 mt-4";
h1El.textContent = "Currying";

const btnSave = document.createElement("button");
const btnDelete = document.createElement("button");

btnSave.classList += "bg-slate-300 px-4 py-2 m-2 rounded";
btnSave.textContent = "Save";
btnSave.addEventListener("click", handleSaveClick);

btnDelete.classList += "outline outline-slate-300 px-4 py-2 m-2 rounded";
btnDelete.textContent = "Delete";
btnDelete.addEventListener("click", handleDeleteClick);

divEl.appendChild(h1El);
divEl.appendChild(btnSave);
divEl.appendChild(btnDelete);

document.body.appendChild(divEl);
