import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLocolst = () => {
    let cartProduct  = localStorage.getItem("cartProductLS");
    if(!cartProduct)
    {
        return [];
    }
    cartProduct = JSON.parse(cartProduct);
    
    updateCartValue(cartProduct);
    return cartProduct;
};