# Browser Object Model API (BOM API)

- [Browser Object Model API (BOM API)](#browser-object-model-api-bom-api)
  - [Resources](#resources)
  - [1. Window](#1-window)
    - [How to get window size?](#how-to-get-window-size)
    - [How to open new window?](#how-to-open-new-window)
    - [How to close new window?](#how-to-close-new-window)
    - [Summary](#summary)
  - [2. Location](#2-location)
    - [How to get data from location (url)?](#how-to-get-data-from-location-url)
    - [How to redirect to a new URL?](#how-to-redirect-to-a-new-url)
    - [How to get query string?](#how-to-get-query-string)
    - [How to set query string?](#how-to-set-query-string)
      - [Check if a query string parameter exists](#check-if-a-query-string-parameter-exists)
    - [Summary](#summary-1)
  - [3. Navigator](#3-navigator)
    - [How to get browser's information?](#how-to-get-browsers-information)
    - [How to detect if current browser is the specific browser?](#how-to-detect-if-current-browser-is-the-specific-browser)
    - [How to detect if this feature is available or not?](#how-to-detect-if-this-feature-is-available-or-not)
  - [4. Screen](#4-screen)
  - [5. History](#5-history)
    - [How to to move forward and backward?](#how-to-to-move-forward-and-backward)
    - [How to refresh the current page?](#how-to-refresh-the-current-page)
    - [How to check number of URLs in history stack?](#how-to-check-number-of-urls-in-history-stack)
    - [Summary](#summary-2)

## Resources

- [Javascript Bom](https://www.javascripttutorial.net/javascript-bom/)

## 1. Window

[Javascript Window](https://www.javascripttutorial.net/javascript-bom/javascript-window/)

- The `global object` of JavaScript in the web browser is the window object.
- It means that `all variables and functions declared globally` with the var keyword become the `properties and methods of the window object`

### How to get window size?

- The `innerWidth` and `innerHeight` properties return the `size of the page viewport` inside the browser window (not including the borders and toolbars).
- The `outerWidth` and `outerHeight` properties return the `size of the browser window itself`.

```js
const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
```

### How to open new window?

`window.open(url, windowName, [windowFeatures]);`

```js
let jsWindow = window.open(
  "http://localhost/js/about.html",
  "about",
  "height=600,width=800"
);

setTimeout(() => {
  jsWindow.resizeTo(600, 300);

  jsWindow.close();
}, 3000);
```

### How to close new window?

- `CANNOT` use close directly with window: `window.close()`

```js
var newWindow = window.open();
newWindow.close();
```

```js
var url = "https://www.javascripttutorial.net/javascript-bom/";
window.open(url, undefined, {
  innerWidth: 300,
});

setTimeout(() => {
  newWindow.close();
}, 1000);
```

### Summary

- The `window` is the global object in the web browser.
- The `window` object exposes the functionality of the web browser.
- The `window` object provides methods for manipulating a window such as `open(), resize(), resizeBy(), moveTo(), moveBy(), and close()`.

## 2. Location

- [Javascript Location](https://www.javascripttutorial.net/javascript-bom/javascript-location/)
- [Javascript Get Query String](https://www.javascripttutorial.net/javascript-bom/javascript-get-query-string/)
- [Javascript Redirect](https://www.javascripttutorial.net/javascript-bom/javascript-redirect/)

### How to get data from location (url)?

```js
// url: http://localhost:8080/js/index.html?type=listing&page=2#title

location.href; // http://localhost:8080/js/index.html?type=listing&page=2#title
location.protocol; // http
location.host; // localhost:8080
location.port; // 8080
location.pathname; // /js/index.html
location.search; // ?type=listing&page=2
location.hash; // #title
location.origin; // http://localhost:8080
```

### How to redirect to a new URL?

- The `assign()` method accepts an URL, `navigate to the URL immediately`, and `make an entry in the browser’s history stack`.
- The `replace()` method is `similar to the assign()` method except it `doesn’t create a new entry` in the browser’s `history stack` -> you `cannot click the back button` to go to the previous page

```js
window.location.assign() = 'https://www.javascripttutorial.net'
window.location = 'https://www.javascripttutorial.net'
window.location.href = 'https://www.javascripttutorial.net'

window.location.replace('https://www.javascripttutorial.net');

// "true" to force reload
location.reload(true)
```

### How to get query string?

```js
const urlParams = new URLSearchParams(location.search);

for (const [key, value] of urlParams) {
  console.log(`${key}:${value}`);
}

urlParams.get("type"); // listing
urlParams.get("foo"); // null
```

### How to set query string?

```js
var searchParams = new URLSearchParams(location.search);

searchParams.set("name", "lio");
location.search = searchParams.toString();
```

#### Check if a query string parameter exists

```js
const urlParams = new URLSearchParams("?type=list&page=20");

urlParams.has("type"); // true
urlParams.has("foo"); // false
```

### Summary

- The Location object represents the current URL of a page. It can be accessed via `window.location` or `document.location`.
- The Location object has a number of `properties` that represent the URL such as `protocol, host, pathname, and search`.
- To manipulate the location, you set its properties new values or use `assign(), replace(), and reload() methods`.
- The `URLSearchParams` provides an interface to work with query string parameters
- The `URLSearchParams` is an iterable so you can use the `for...of` construct to iterate over query string parameters.
- The `has()` method of the `URLSearchParams` determines if a parameter with a specified name exists.
- To `redirect` to a new URL or page, you assign the new URL to the `location.href` property or use the `location.assign()` method.
- The `location.replace()` method does `redirect to a new URL but does not create an entry` in the history stack of the browser.

## 3. Navigator

- [Javascript Navigator](https://www.javascripttutorial.net/javascript-bom/javascript-navigator/)

### How to get browser's information?

```js
window.navigator.userAgent;

// "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36"
```

### How to detect if current browser is the specific browser?

```js
if (window.navigator.userAgent.includes("MSIE")) {
  // If true, use feature of Internet Explorer
} else {
  // Your code
}
```

### How to detect if this feature is available or not?

```js
if (typeof window.addEventListener === "function") {
  // let's use addEventListener
} else {
  // addEventListener is not supported, use another way
}
```

## 4. Screen

- [Javascript Screen](https://www.javascripttutorial.net/javascript-bom/javascript-screen/)
- The `Screen` object provides the `attributes of the screen` on which the `current window` is being `rendered`.
- The `Screen` object is typically `used by the web analytic software like Google Analytics` to collect information of the client device on which the web browsers are running.

> window.screen

## 5. History

- [Javascript History](https://www.javascripttutorial.net/javascript-bom/javascript-history/)
- When you launch the web browser and open a new webpage, the web `browser creates a new entry in its history stack`.
- If you navigate to another webpage, the web browser also creates a new entry in the history stack.
- The `history stack stores the current page and previous pages` that you visited.

### How to to move forward and backward?

```js
// Backward
window.history.back();
window.history.go(-1);

// Forward
window.history.forward();
window.history.go(1);
```

### How to refresh the current page?

```js
window.history.go();
window.history.go(0);
```

### How to check number of URLs in history stack?

```js
history.length;
```

### Summary

- The `window.history` object allows you to `access the history stack` of the browser.
- To `navigate to a URL` in the history, you use the `back(), forward(), and go()` methods.
- The `history.length returns the number of URLs` in the history stack.
