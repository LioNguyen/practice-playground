/**
 * Syntax: let element = parentNode.querySelector(selector);
 */

// Return 1st element that matches css selector
const pEl = document.querySelector("p");

// Return NodeList
const elAll = document.querySelectorAll("div, p");

// Convert NodeList into an array
const elList = Array.from(elAll);
