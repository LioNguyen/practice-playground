# Document Object Model API (DOM API)

- [Document Object Model API (DOM API)](#document-object-model-api-dom-api)
  - [Resources](#resources)
  - [1. What is DOM?](#1-what-is-dom)
    - [Node Types](#node-types)
    - [Summary](#summary)
  - [2. Selecting elements](#2-selecting-elements)
    - [`querySelector()`, `querySelectorAll()`](#queryselector-queryselectorall)
    - [Summary](#summary-1)
  - [3. Traversing elements](#3-traversing-elements)
    - [Get parent elements](#get-parent-elements)
    - [Get children elements](#get-children-elements)
    - [Get sibling elements](#get-sibling-elements)
    - [Summary](#summary-2)
  - [4. Manipulating elements](#4-manipulating-elements)
    - [How to create element?](#how-to-create-element)
    - [How to move child elements?](#how-to-move-child-elements)
    - [What is the difference between textContent vs innerText?](#what-is-the-difference-between-textcontent-vs-innertext)
    - [How to add an external HTML?](#how-to-add-an-external-html)
    - [What is the difference between innerHTML vs createElement?](#what-is-the-difference-between-innerhtml-vs-createelement)
      - [Using DocumentFragment for composing DOM Nodes](#using-documentfragment-for-composing-dom-nodes)
    - [Summary](#summary-3)

## Resources

[Javascript Dom Tutorial](https://www.javascripttutorial.net/javascript-dom)

## 1. What is DOM?

- DOM API, hay cụ thể hơn, API của DOM (Document Object Model), là tập hợp các `giao diện và phương thức` mà `trình duyệt cung cấp để cho phép JavaScript tương tác với cấu trúc của trang HTML hoặc XML`. Nó cho phép thay đổi nội dung, cấu trúc và kiểu dáng của trang web mà không cần tải lại trang đó.
- The Document Object Model (DOM) is an `application programming interface` `(API)` for manipulating HTML documents.
- The DOM represents an HTML document as a tree of nodes. The DOM provides functions that allow you to add, remove, and modify parts of the document effectively.
- Use `document.body.contentEditable = true` to edit directly HTML content

```html
<html>
  <head>
    <title>JavaScript DOM</title>
  </head>
  <body>
    <p>Hello DOM!</p>
  </body>
</html>
```

![Dom Tree](https://www.javascripttutorial.net/wp-content/uploads/2020/01/JavaScript-DOM.png)

### Node Types

**Node and Element relationship**

- Node is the `generic type` of element.
- Element is a `specific type` of the node with the node type `Node.ELEMENT_NODE`, which is equal to 1.
- **Note**:
  - `the getElementById() and querySelector() returns` an object with the `Element` type
  - `getElementsByTagName() or querySelectorAll() returns NodeList` which is a collection of nodes.

![Node, Element relationship](https://www.javascripttutorial.net/wp-content/uploads/2020/01/Document-Object-Model-in-JavaScript.png)

**Node Relationships**

![Node Relationships](https://www.javascripttutorial.net/wp-content/uploads/2020/01/JavaScript-DOM-Node-Relationships.png)

### Summary

- An HTML or XML document can be represented as a `tree of nodes`, like a traditional family tree.
- Each markup can be `represented as a node` with a specific node type.
- Element is a specific type of node with the node type Node.ELEMENT_NODE.
- In the DOM tree, a node has `relationships` with other nodes.

## 2. Selecting elements

### `querySelector()`, `querySelectorAll()`

`let element = parentNode.querySelector(selector)`

```js
// Return 1st element that matches css selector
const pEl = document.querySelector("p");

// Return NodeList
const elAll = document.querySelectorAll("div, p");

// Convert NodeList into an array
const elList = Array.from(elAll);
```

### Summary

- The `querySelector()` finds the first element that matches a CSS selector or a group of CSS selectors.
- The `querySelectorAll()` finds all elements that match a CSS selector or a group of CSS selectors.
- A CSS selector defines elements to which a CSS rule applies.

## 3. Traversing elements

### Get parent elements

`let parent = node.parentNode;`

```js
const barItem = document.querySelector(".w3-bar-item");
const barItemParentNode = barItem.parentNode;
```

### Get children elements

`let firstChild = parentElement.firstChild;`

`let lastChild = parentElement.lastChild;`

```js
const navItem = document.querySelector("nav");
const navItemFirstChild = navItem.firstChild;
const navItemLastChild = navItem.lastChild;
const navItemAll = navItem.childNodes;
const navItemElementAll = navItem.children;
```

### Get sibling elements

`let nextSibling = currentNode.nextElementSibling;`

`let prevSibling = currentNode.previousElementSibling;`

```js
const barButton = document.querySelector(".w3-button");
const nextEl = barButton.nextElementSibling;
const prevEl = barButton.previousElementSibling;
```

### Summary

- Get **parent** elements
  - The `node.parentNode returns the read-only` parent node of a specified `node or null` if it does not exist.
  - The document and DocumentFragment do not have a parent node.
- Get **children** elements
  - The `firstChild` and `lastChild` return the first and last child of a `node`, which can be any node type including text node, comment node, and element node.
  - The `firstElementChild` and `lastElementChild` return the first and last `child Element node`.
  - The `childNodes` returns a live `NodeList of all child nodes` of any node type of a specified node. The `children` return `all child Element nodes` of a specified node.
- Get **sibling** elements
  - The `nextElementSibling` returns the next sibling of an `element or null` if the element is the last one in the list.
  - The `previousElementSibling` returns the previous sibling of an `element or null` if the element is the first one in the list.
  - To get all siblings of an element, you can use a helper function that utilizes the nextElementSibling property.

## 4. Manipulating elements

### How to create element?

[JavaScript CreateElement](https://www.javascripttutorial.net/javascript-dom/javascript-createelement/)

`let element = document.createElement(htmlTag);`

```js
let div = document.createElement("div");
div.id = "content";
div.className = "border-2";

let h2 = document.createElement("h2");
h2.textContent = "Add h2 element to the div";
div.appendChild(h2);

document.body.appendChild(div);
```

```js
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
```

### How to move child elements?

```js
// get the first list
const firstList = document.querySelector("#first-list");
// take the first child element
const everest = firstList.firstElementChild;
// get the second list
const secondList = document.querySelector("#second-list");
// append the everest to the second list
secondList.appendChild(everest);
```

![Move child element](https://www.javascripttutorial.net/wp-content/uploads/2020/01/JavaScript-appendChild.png)

### What is the difference between textContent vs innerText?

- The `innerText` returns the `human-readable text` that takes CSS into account.

```html
<div id="note">
  JavaScript textContent Demo!
  <span style="display:none">Hidden Text!</span>
  <!-- my comment -->
</div>
```

```js
let note = document.getElementById("note");
console.log(note.textContent); // JavaScript textContent Demo! Hidden Text!
console.log(note.innerText); // JavaScript textContent Demo!
```

### How to add an external HTML?

[JavaScript innerHTML](https://www.javascripttutorial.net/javascript-dom/javascript-innerhtml/)

```js
const main = document.getElementById("main");

const externalHTML = `<img src='1' onerror='alert("Error loading image")'>`;
// shows the alert
main.innerHTML = externalHTML;
```

### What is the difference between innerHTML vs createElement?

[JavaScript innerHTML vs createElement](https://www.javascripttutorial.net/javascript-dom/javascript-innerhtml-vs-createelement/)

- `createElement()` is more secured & more performant

#### Using DocumentFragment for composing DOM Nodes

[JavaScript DocumentFragment](https://www.javascripttutorial.net/javascript-dom/javascript-documentfragment/)

- The `DocumentFragment` interface is a lightweight version of the Document that stores a piece of document structure like a standard document.
- However, a `DocumentFragment` `isn’t part of the active DOM tree`.
- If you make changes to the document fragment, it `doesn’t affect the document or incurs any performance`.

![JS-DocumentFragment](https://www.javascripttutorial.net/wp-content/uploads/2020/05/JS-DocumentFragment.png)

```js
let div = document.querySelector(".container");

// compose DOM nodes
let fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  let p = document.createElement("p");
  p.textContent = `Paragraph ${i}`;
  fragment.appendChild(p);
}

// append the fragment to the DOM tree
div.appendChild(fragment);
```

_instead of this_

- This code results in recalculation of styles, painting, and layout every iteration. This is not very efficient.

```js
let div = document.querySelector(".container");

for (let i = 0; i < 1000; i++) {
  let p = document.createElement("p");
  p.textContent = `Paragraph ${i}`;
  div.appendChild(p);
}
```

### Summary

- The `document.createElement()` creates a new HTML element.
- The `element.appendChild()` appends an HTML element to an existing element.
- Use `appendChild()` method to `add a node to the end of the list` of child nodes of a specified parent node.
- The `appendChild()` can be used to `move an existing child node to the new position` within the document.
- Use the `textContent` property to return the concatenation of the textContent of every child node. You can use it to set a text for a node.
- The `innerText` returns the `human-readable text` that takes CSS into account.
- Use `innerHTML` property of an element to get or set HTML contained within the element.
- The `innerHTML` property returns the `current HTML source of the element`, including any change that has been made since the page was loaded.
- `DO NOT` use `innerHTML` to set new contents that you have no control to `avoid a security risk`.
- Use the `DocumentFragment` to compose DOM nodes before updating them to the active DOM tree to get better performance.
