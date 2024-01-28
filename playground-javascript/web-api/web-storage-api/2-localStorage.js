var localStorage = window.localStorage;

localStorage.setItem("name", "Nghi");
window.addEventListener("storage", (e) => {
  console.log(`The value of the key ${e.key} changed for the ${e.domain}`);
});
