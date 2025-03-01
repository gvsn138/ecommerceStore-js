export const homeQuantityToggle = (event, id, stock) => {
    const currentCardElement = document.querySelector(`#card${id}`);
    // console.log(currentCardElement);

    const productQuantity = currentCardElement.querySelector(".productQuantity");
    // console.log(productQuantity);

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 0;

    if (event.target.className === "cartIncrement")
    {
        if(quantity<stock)
        {
            quantity++;
        }
        else if(quantity === stock)
        {
            quantity = stock;
        }
    }
    if(event.target.className === "cartDecrement")
    {
        if(quantity>0)
        {
            quantity--;
        }
        else if(quantity===0)
        {
            quantity = 0;
        }
    }

    productQuantity.innerHTML = quantity;
    productQuantity.setAttribute("data-quantity", quantity.toString());
    return quantity;

};