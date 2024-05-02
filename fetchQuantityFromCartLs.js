import { getCartProductFromLocolst } from "./getCartProductFromLocolst";

export const fetchQuantityFromCartLs = (id, price) => {
    let cartProduct = getCartProductFromLocolst();

    let existingProduct = cartProduct.find((currprd) => currprd.id === id);
    let quantity = 0;
    
    if(existingProduct)
    {
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }
    return {quantity, price};
};