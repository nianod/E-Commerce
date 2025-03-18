

const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.getElementById("close-cart");



cartIcon.onclick = () => {
        cart.classList.add("active");
}
  
closeCart.onclick = () => {
        cart.classList.remove("active");
}
if (document.readyState === 'loading') { //is the page still alive
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}
function ready() { 
    const trashButton = document.querySelectorAll('.trash');
    console.log("Trash buttons found:", trashButton);

    trashButton.forEach(button => {
        button.addEventListener('click', removeCartItem);
    });
} 

const removeCartItem = (event) => {
    const buttonClicked = event.target;
    console.log("Button clicked:", buttonClicked);

    const cartBox = buttonClicked.closest('.cart-box');

    if (cartBox) {
        cartBox.remove();
        console.log("Removed:", cartBox);
    } else {
        console.warn("No cart-box found. Check the HTML structure.");
    }
}


const updateTotalAmount = () => {
    let total = 0;
    const itemsInCart = document.querySelectorAll('.cart-box');

    if(itemsInCart.length === 0){
        document.querySelector('.total-price').innerHTML = "$0.00"
        return;
    }

    itemsInCart.forEach(itemInCart => {
        const priceElement = itemInCart.querySelector('.cart-price');
        const quantityElement = itemInCart.querySelector('.cart-quantity');
        if(priceElement && quantityElement) {
            const price = parseFloat(priceElement.innerText.replace('$', ''));
            const quantity = parseInt(quantityElement.value);
            total += price * quantity; ///multiply price by quantity
        }
    });

    document.querySelector('.total-price').innerText = `$${total.toFixed(2)}`;

};
const buy = document.getElementById("buy-now");
buy.addEventListener("click", () => {
    alert("Bought successfully");
})
// // if(document.readyState == 'loading'){
// //    document.addEventListener('DOMContentLoaded', ready)
// // } else {
// //     ready();
// // }

// // function ready() { 
// //     let removeItem = document.getElementsByClassName('trash');
// //     console.log(removeItem);
// //     for(let i = 0; i < removeItem.length; i++) {
// //         let button = removeItem[i]
// //         button.addEventListener('click', removeCartItem);
// //     }
    
// // }
// // function removeCartItem(event) {
// //     let buttonClicked = event.target
// //     buttonClicked.parentElement.remove();
// // }
 