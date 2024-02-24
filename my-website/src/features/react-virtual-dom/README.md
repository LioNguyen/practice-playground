# VIRTUAL DOM

- [VIRTUAL DOM](#virtual-dom)
  - [Resources](#resources)
  - [What is the React DOM?](#what-is-the-react-dom)
  - [What is the React Virtual DOM?](#what-is-the-react-virtual-dom)
  - [How is the virtual DOM different from the real DOM?](#how-is-the-virtual-dom-different-from-the-real-dom)

## Resources

- [Virtual Dom React](https://blog.logrocket.com/virtual-dom-react/)

## What is the React DOM?

- This tree-like structure is called the Document Object Model, also known as the DOM. The DOM serves as an interface for the web document so that JavaScript and other scripting languages can access, manipulate, and programmatically interact with the document’s content.

## What is the React Virtual DOM?

- `virtual DOM` is a much `lighter` replica of the actual DOM in the form of objects
- `virtual DOM` can be `saved in the browser memory` and `doesn’t directly change` what is shown on the user’s browser

## How is the virtual DOM different from the real DOM?

> A common `misconception is that the virtual DOM is faster` than or rivals the actual DOM, however, this is `untrue`.
> In fact, the virtual DOM’s operations support and add on to those of the actual DOM. Essentially, the `virtual DOM provides a mechanism` that `allows the actual DOM to compute minimal DOM operations` when re-rendering the UI.
> For example, when an element in the real DOM is changed, the DOM will re-render the element and all of its children.

- After the virtual DOM is updated, `React compares it to a snapshot of the virtual DOM taken just before the update, determines what element was changed, and then updates only that element on the real DOM`. This is one method the virtual DOM employs to optimize performance.
