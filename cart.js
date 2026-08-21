console.log(localStorage.getItem("image"));
console.log(localStorage.getItem("title"));
console.log(localStorage.getItem("price"));

const cartContainer = document.getElementById("cart-container");
const div = document.createElement("div");

const img = document.createElement("img");
img.src = localStorage.getItem("image");
img.alt = "Product-img";

const title = document.createElement("h1");
title.innerText = localStorage.getItem("title");

const price = document.createElement("h2");
price.innerText = localStorage.getItem("price");

div.appendChild(img);
div.appendChild(title);
div.appendChild(price);

cartContainer.appendChild(div);