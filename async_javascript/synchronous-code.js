// Synchronous Code
const p = document.querySelector(".p");
p.textContent = "My name is Tobi";
alert("Txt set!😳");
p.computedStyleMap.color = "red";

// Asynchronous Code
const p = document.querySelector(".p");
setTimeout(() => {
  p.textContent = "My name is Tobi";
}, 5000);
p.computedStyleMap.color = "red";
