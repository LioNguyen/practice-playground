const url =
  "http://localhost:5500/playground-javascript/index.html?name=lio&sort=asc#home";

if (!window.location.search) {
  // Can use location.assign(url) or location.href = url
  window.location = url;
}

/*
  ALl location properties
*/
var protocol = location.protocol;
var host = location.host;
var port = location.port;
var origin = location.origin;
var pathname = location.pathname;
var search = location.search;
var hash = location.hash;

// console.log({ url, protocol, host, port, origin, pathname, search, hash });

/*
  ALl location methods
*/
// location.assign(url)
// location.replace(url)
// location.reload()

/*
  How to get search params?
*/
var searchParams = new URLSearchParams(location.search);

// searchParams.get("name");
// searchParams.get("type");

for (var item of searchParams) {
  // console.log("item", item);
}
for (var item of searchParams.entries()) {
  // console.log("entries() ~ item", item);
}
for (var item of searchParams.keys()) {
  // console.log("keys() ~ item", item);
}
for (var item of searchParams.values()) {
  // console.log("values() ~ item", item);
}

/*
  How to set search params?
*/
var searchParams = new URLSearchParams(location.search);

// searchParams.set("name", "lio");
// location.search = searchParams.toString();

/*
  How to check data in search params?
*/
// searchParams.has("name");
// searchParams.has("type");

/*
  How to redirect to new URL?
*/
window.location.assign() = 'https://www.javascripttutorial.net'
window.location = 'https://www.javascripttutorial.net'
window.location.href = 'https://www.javascripttutorial.net'

window.location.replace('https://www.javascripttutorial.net');

/*
  "true" to force reload
*/
// location.reload(true)
