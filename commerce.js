
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#close-cart");



cartIcon.onclick = () => {
        cart.classList.add("active");
}
  
closeCart.onclick = () => {
        cart.classList.remove("active");
}

if(document.readyState === 'loading'){
   document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

ready = () => {
    let trash = document.querySelectorAll('.trash');
    console.log(trash);
    for(let i = 0; i < trash.length; i++) {
        let button = trash[i]
        button.addEventListener('click', removeCartItem);
    }
    
}
removeCartItem = (event) => {
    let buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}