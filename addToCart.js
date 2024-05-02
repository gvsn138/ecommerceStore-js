import { getCartProductFromLocolst } from "./getCartProductFromLocolst";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLocolst();

export const addToCart = (event, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLocolst();
    const currentProd = document.querySelector(`#card${id}`);
    // console.log(currentProd);
    let quantity = Number(currentProd.querySelector(".productQuantity").innerText);
    let price = currentProd.querySelector(".productPrice").innerText;

    price = price.replace("₹", "");

    let existingProd = arrLocalStorageProduct.find((curPrd) => curPrd.id === id);

    if (existingProd && quantity > 0)
    {
        quantity+=Number(existingProd.quantity);
        price = Number(price * quantity);
        let updatedCart = {id, quantity, price};
        updatedCart = arrLocalStorageProduct.map((currPrd) => {
            return currPrd.id === id ? updatedCart : currPrd;
        });
        // console.log(updatedCart);
        localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    }
    if (existingProd)
    {
        return false;
    }

    price = Number(price * quantity);
    quantity = Number(quantity);

    // console.log(quantity);
    // console.log(price);

    arrLocalStorageProduct.push({id, quantity, price});
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    updateCartValue(arrLocalStorageProduct);

    showToast("add", id);
};