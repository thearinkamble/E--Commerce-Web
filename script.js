let cart = [];

function addToCart(productName, productPrice) {
    const item = { name: productName, price: productPrice };
    cart.push(item);
    updateCart();
    showCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price; // Fixed calculation to sum the prices
    });

    cartTotal.textContent = total.toFixed(2);
}

function showCart() {
    document.getElementById('cart').classList.add('open');
}

function hideCart() {
    document.getElementById('cart').classList.remove('open');
}

function checkout() {
    document.getElementById('checkout-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('checkout-modal').style.display = 'none';
    document.getElementById('signup-modal').style.display = 'none'; // Fixed spelling
    document.getElementById('order-confirmation').style.display = 'none';
}

document.getElementById('checkout-form').addEventListener('submit', function (event) {
    event.preventDefault();
    closeModal();
    showOrderConfirmation();
    cart = [];
    updateCart();
    hideCart();
});

function showSignup() {
    document.getElementById('signup-modal').style.display = 'block'; // Fixed spelling
}

document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Sign up successful!'); // Fixed spelling and case
    closeModal();
});

function signOut() {
    alert('Signed out successfully!'); // Fixed spelling and case
}

function showOrderConfirmation() {
    document.getElementById('order-confirmation').style.display = 'block';
}
