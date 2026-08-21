let products = [];

const getProductsData = async () => {

    const response = await fetch("https://dummyjson.com/products");

    const data = await response.json();

    products = data.products;

    console.log(products);

    displayProducts();
};


function displayProducts() {

    const productContainer = document.getElementById("products-container");

    if (!productContainer) {
        return;
    }

    products.forEach((product) => {

        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = product.thumbnail;
        img.alt = "Product Image";
        img.style.width = "250px";
        img.style.height = "400px";
        img.style.objectFit = "contain";


        const title = document.createElement("h1");
        title.innerText = product.title;


        const price = document.createElement("h2");
        price.innerText = `$${product.price.toFixed(2)}`;


        const decrementBtn = document.createElement("button");
        decrementBtn.innerText = "-";


        const incrementBtn = document.createElement("button");
        incrementBtn.innerText = "+";


        const span = document.createElement("span");
        span.innerText = "ADD";


        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(decrementBtn);
        div.appendChild(span);
        div.appendChild(incrementBtn);

        productContainer.appendChild(div);


        let count = 0;


        incrementBtn.addEventListener("click", () => {

            count++;

            span.innerText = count;

            addProductToCart(product);

        });


        decrementBtn.addEventListener("click", () => {

            if (count > 0) {

                count--;

                span.innerText = count;

                removeProductFromCart(product.id);

            }

        });

    });
}


function addProductToCart(product) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.id === product.id);


    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            id: product.id,

            title: product.title,

            price: product.price,

            image: product.thumbnail,

            quantity: 1

        });

    }


    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Cart:", cart);
}


function removeProductFromCart(productId) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.id === productId);


    if (!existingProduct) {
        return;
    }


    existingProduct.quantity--;


    if (existingProduct.quantity <= 0) {

        cart = cart.filter(item => item.id !== productId);

    }


    localStorage.setItem("cart", JSON.stringify(cart));

}


function displayCart() {

    const cartContainer = document.getElementById("cart-container");

    if (!cartContainer) {
        return;
    }


    const cart = JSON.parse(localStorage.getItem("cart")) || [];


    cartContainer.innerHTML = "";


    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <h1 class="empty-cart">
                Your cart is empty
            </h1>
        `;

        document.getElementById("total").innerText = "";

        return;
    }


    let total = 0;


    cart.forEach((product) => {

        const div = document.createElement("div");


        const img = document.createElement("img");

        img.src = product.image;

        img.alt = product.title;


        const title = document.createElement("h2");

        title.innerText = product.title;


        const price = document.createElement("h3");

        price.innerText = `Price: $${product.price.toFixed(2)}`;


        const quantity = document.createElement("p");

        quantity.innerText = `Quantity: ${product.quantity}`;


        const subtotal = product.price * product.quantity;

        const subtotalText = document.createElement("p");

        subtotalText.innerText = `Subtotal: $${subtotal.toFixed(2)}`;


        div.appendChild(img);

        div.appendChild(title);

        div.appendChild(price);

        div.appendChild(quantity);

        div.appendChild(subtotalText);


        cartContainer.appendChild(div);


        total += subtotal;

    });


    document.getElementById("total").innerText =
        `Total: $${total.toFixed(2)}`;

}


getProductsData();

displayCart();