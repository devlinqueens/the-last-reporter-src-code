let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(button) {

    const card = button.closest(".product-card");

    const product = {
        id: card.dataset.id,
        name: card.dataset.name,
        price: Number(card.dataset.price),
        size: card.querySelector(".size-select").value,
        quantity: 1
    };

    const existing = cart.find(item =>
        item.id === product.id &&
        item.size === product.size
    );

    if (existing) {
        existing.quantity++;
    }
    else {
        cart.push(product);
    }

    saveCart();

    updateCartUI();

    alert(product.name + " added to cart.");
}

function toggleCart() {

    document
        .getElementById("cart-sidebar")
        .classList.toggle("active");

}

function updateCartUI() {

    const cartItems =
        document.getElementById("cart-items");

    const cartTotal =
        document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">

                <strong>${item.name}</strong>

                <p>
                    Size: ${item.size}
                </p>

                <p>
                    Qty: ${item.quantity}
                </p>

                <p>
                    $${(item.price * item.quantity).toFixed(2)}
                </p>

            </div>
        `;

    });

    cartTotal.innerText = total.toFixed(2);

}

async function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }

    const order = {

        items: cart,

        total: cart.reduce(
            (sum, item) =>
                sum + item.price * item.quantity,
            0
        )

    };

    try {

        const response =
            await fetch("/api/order", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(order)

            });

        if (!response.ok)
            throw new Error();

        alert("Order placed successfully!");

        cart = [];

        saveCart();

        updateCartUI();

        toggleCart();

    }
    catch {

        alert("Unable to complete checkout.");

    }

}

async function loadProducts() {

    const response =
    await fetch("/api/products");

    const products = 
    await response.json();

    displayProduct();
    
}
