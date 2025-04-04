// Get Cart Item Form Localstorage
const getCartFromLocalStorage = () => {
    const storedCartString = localStorage.getItem("cart");
    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
};

// Add To Cart Item in Localstorage 
const addItemToCartLocalStorage = (id) => {
    const cart = getCartFromLocalStorage();
    cart.push(id);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringified)
}


const removeCartFromLocalStorage = (id) => {
    const storedCart = getCartFromLocalStorage();
    const deleteCart = storedCart.filter((item) => item !== id);
    const cartStringified = JSON.stringify(deleteCart);
    localStorage.setItem("cart", cartStringified)
}

export { getCartFromLocalStorage, addItemToCartLocalStorage, removeCartFromLocalStorage };