/*
  START: Create div element
*/
let div = document.createElement("div");
div.id = "content";
div.className = "border-2";

// create a new heading and add it to the div
let h2 = document.createElement("h2");
h2.textContent = "Add h2 element to the div";
div.appendChild(h2);

// add div to the document
document.body.appendChild(div);
/*
  END: Create div element
*/

/*
  START: Create list element
*/
const ul = document.createElement("ul");
const fragment = document.createDocumentFragment();
ul.id = "menu";
document.body.appendChild(ul);

const listItem = ["Home", "Products", "About"];

for (let item of listItem) {
  var li = document.createElement("li");
  li.textContent = item;
  fragment.appendChild(li);
}

ul.appendChild(fragment);
/*
  END: Create list element
*/

/*
  START: Create script element
*/
function loadJSAsync(url) {
  let script = document.createElement("script");
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
}
/*
  END: Create script element
*/

/*
  START: Create external HTML & put it into HTML, demo of how hackers do
*/
const main = document.getElementById("main");
const externalHTML = `<img src="1" onerror="alert('Error loading image')">`;

// Temporary disable this
// main.innerHTML = externalHTML;
/*
  END: Create external HTML & put it into HTML
*/
