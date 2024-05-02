import { getCartProductFromLocolst } from "./getCartProductFromLocolst";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";


export const removeProductFromCart = (id) => {
    let cartProducts = getCartProductFromLocolst();
    console.log(cartProducts);

    let cartProduct = cartProducts.filter((curProd) => curProd.id !== id);
    console.log(cartProduct);
    localStorage.setItem("cartProductLS", JSON.stringify(cartProduct));

    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv) {
      removeDiv.remove();

      showToast("delete", id);
    }

    updateCartProductTotal();

    updateCartValue(cartProducts);

};