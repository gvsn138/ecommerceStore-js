import product from './api/product.json'
import { getCartProductFromLocolst } from "./getCartProductFromLocolst";
import { fetchQuantityFromCartLs } from './fetchQuantityFromCartLs';
import { removeProductFromCart } from './removeProductFromCart';
import { incrementDecrement } from './incrementDecrement';
import { updateCartProductTotal } from './updateCartProductTotal';

// import { incrementDecrement } from "./incrementDecrement";
// import { removeProdFromCart } from "./removeProdFromCart";
// import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProduct = getCartProductFromLocolst();
let filterProducts = [];

 product.forEach((currprd) => {
    cartProduct.forEach((cartprd) => {
        if(cartprd.id===currprd.id)
        {
            filterProducts.push(currprd);
        }
    });
});
console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
    filterProducts.forEach((prd) => {
        const {category, id, image, name, stock, price} = prd;
        let productClone = document.importNode(templateContainer.content, true);
        let lSActualData = fetchQuantityFromCartLs(id, price);

        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").innerHTML = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productQuantity").textContent = lSActualData.quantity;
        productClone.querySelector(".productPrice").textContent = lSActualData.price;
        productClone.querySelector(".stockElement").addEventListener("click", (event) => {incrementDecrement(event, id, stock, price);});
        productClone.querySelector(".remove-to-cart-button").addEventListener('click' ,() => removeProductFromCart(id));



        cartElement.appendChild(productClone);
    });
};

showCartProduct();

updateCartProductTotal();