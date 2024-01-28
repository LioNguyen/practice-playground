# WEB STORAGE API

- [WEB STORAGE API](#web-storage-api)
  - [Resources](#resources)
  - [What is the difference between encodeURIComponent vs encodeURI?](#what-is-the-difference-between-encodeuricomponent-vs-encodeuri)
  - [Cookie](#cookie)
    - [What is cookie?](#what-is-cookie)
    - [Why cookie?](#why-cookie)
    - [How to set and get cookie?](#how-to-set-and-get-cookie)
    - [Summary](#summary)
  - [Local Storage](#local-storage)
    - [What is the difference between Local Storage vs Cookies?](#what-is-the-difference-between-local-storage-vs-cookies)
    - [What is local storage?](#what-is-local-storage)
    - [How to set item in local storage?](#how-to-set-item-in-local-storage)
    - [Summary](#summary-1)
  - [Session Storage](#session-storage)

> The Web Storage API `provides mechanisms by which browsers can store key/value pairs`, in a much more intuitive fashion than using cookies.

## Resources

- [Web Storage API Official Document](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [Javascript Cookie](https://www.javascripttutorial.net/web-apis/javascript-cookies/)
- [Javascript Local Storage](https://www.javascripttutorial.net/web-apis/javascript-localstorage/)
- [Javascript Session Storage](https://www.javascripttutorial.net/web-apis/javascript-sessionstorage/)
- [Local Storage, Session Storage & Cookie - Medium](https://medium.com/segmentify-tech/cookie-vs-local-storage-session-storage-ee4c0a07b74e)
- [Local Storage, Session Storage & Cookie - Viblo Asia](https://viblo.asia/p/local-storage-session-storage-va-cookie-ORNZqN3bl0n)

## What is the difference between encodeURIComponent vs encodeURI?

- `encodeURIComponent`: Được sử dụng để `mã hóa một giá trị` có thể được chèn vào một phần của URL, chẳng hạn như `query parameter`. Nó mã hóa `mọi ký tự không an toàn`, bao gồm các ký tự đặc biệt như `:, /, ?, &,` và nhiều ký tự khác.
- `encodeURI`: Chủ yếu được sử dụng để `mã hóa toàn bộ URL hoặc các phần của URL`, ngoại `trừ phần giao thức (http://, https://), tên miền, và các ký tự tạo URL như / và ?`. Nó không mã hóa các ký tự đặc biệt có ý nghĩa trong URL.

```js
encodeURI("?"); // "?"
encodeURIComponent("?"); // "%3F"
```

## Cookie

- [Javascript Cookie](https://www.javascripttutorial.net/web-apis/javascript-cookies/)

### What is cookie?

> Cookie is not Web Storage API

- An HTTP cookie is a `piece of data` that a server sends to a web browser. Then, the web browser stores the HTTP cookie on the user’s computer and sends it back to the same server in the later requests.

- An HTTP cookie is also known as a web cookie or browser cookie. And it is commonly called a cookie.

**header of an HTTP response:**

```
HTTP/1.1 200 OK
Content-type: text/html
Set-Cookie:username=admin
...
```

**Cookie HTTP header for the next request:**

```
GET /index.html HTTP/1.1
Cookie: username=admin
...
```

### Why cookie?

- It’s important to understand that `HTTP is stateless`. When you send two subsequent HTTP requests to the server, there is no link between them. In other words, the server cannot know if the two requests are from the same web browser.
- Therefore, a cookie is used to tell if the two requests came from the same web browser.
- In practice, cookies serve the following purposes:
  - Session management – cookies `allow you to manage any information that the server should remember`. For example, logins, shopping carts, etc.
  - Personalization – cookies allow you to `store user preferences, themes, and setting` specific to a user.
  - Tracking – cookies help `record and analyze user behaviors` in advertising.

### How to set and get cookie?

```js
//  Set cookie
document.cookie = `${encodeURIComponent("username")}=${encodeURIComponent(
  "admin"
)}`;

// Get cookie
var value = decodeURIComponent(document.cookie);
```

### Summary

- A cookie is a `piece of data that a server sends to a web browser. The web browser then stores it in the user’s computer and sends the cookie back to the same server` in the subsequent requests.
- The server uses cookies for `identifying if two successive requests came from the same web browser`.
- To manage cookies, you use the `document.cookie` object. To make it more efficient, you can use the Cookie utility class.
- Use the `encodeURIComponent()` and `decodeURIComponent()` function to encode and decode the cookie values.

## Local Storage

- [Javascript Local Storage](https://www.javascripttutorial.net/web-apis/javascript-localstorage/)

### What is the difference between Local Storage vs Cookies?

- First, the `data stored in the localStorage isn’t sent to the server in every request` like cookies. For this reason, you can store more data in the localStorage.

- Most modern web browsers allow you to store up to `5MB of data in the localStorage`. Note that you can store up to `4KB in cookies`.

- Second, the data stored in the `localStorage` can be `managed by the client`, specifically JavaScript in the web browser. It `cannot be accessible by the servers`.

- However, `cookies` can be managed by `both JavaScript in web browsers and servers`.

### What is local storage?

> HTML5 specification introduces the `localStorage as a way to store data` with no expiration date in web browsers. Data stored in the browsers will `persist even after you close the browser` windows.

> The Storage object can store only strings. It’ll automatically convert non-string data into a string before storing it.

> When you retrieve data from a Storage object, you’ll always get the string data.

- The data stored in the localStorage is bound to an origin. It means that the localStorage is `unique per protocol://host:port`.
- The Storage type is designed to store name-value pairs. The Storage type is an Object with the following additional methods:
  - `setItem(name, value)` – set the value for a name
  - `removeItem(name)` – remove the name-value pair identified by name.
  - `getItem(name)` – get the value for a given name.
  - `key(index)` – get the name of the value in the given numeric position.
  - `clear()` – remove all values.

### How to set item in local storage?

```js
// Get local storage's length
window.localStorage; // Storage {length: 0}
window.localStorage.length; // or localStorage.length -> 0

// Set item to local storage
window.localStorage.setItem("theme", "dark");

const settings = {
  backgroundColor: "#fff",
  color: "#111",
  theme: "light",
};
localStorage.setItem("settings", JSON.stringify(settings));

// The storage event
addEventListener("storage", (e) => {
  console.log(`The value of the key ${e.key} changed for the ${e.domain}`);
});
```

### Summary

- The Storage type provides you with the methods for `storing and managing data in web browsers`.
- The localStorage is an instance of the Storage type that allows you to `store persistent data in the web browsers`.
- The localStorage can `store only strings`. To store objects, you convert them to strings using the `JSON.stringify()` method. And you convert the strings into objects when you retrieve them from the localStorage using the `JSON.parse()` method.

## Session Storage

- [Javascript Session Storage](https://www.javascripttutorial.net/web-apis/javascript-sessionstorage/)
