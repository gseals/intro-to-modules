import cart from './cart.js';
import utilities from '../helpers/utilities.js'

const bookInfo = {
    price: 24.99,
    title: "Somehow I Manage",
    image: "./assets/images/book.jpg"
};

const addToCartEvent = () => {
    cart.setCart(bookInfo);
    cart.cartToDom();
};

const makeStore = () => {
        let domString = '<h2>Our only book:</h2>';
        domString += '<p>Buy it now:</p>';
        domString += `<h3>$${bookInfo.price}</h3>`;
        domString += `<img src=${bookInfo.image} alt="book cover"/>`;
        domString += '<button id="cart-button" class="btn btn-danger col-7">Add to cart</button>';
    utilities.printToDom('store-container',domString);
    document.getElementById('cart-button').addEventListener('click', addToCartEvent)
};

// export dafault { makeStore: makeStore };
export default { makeStore };

// export default { anObject };