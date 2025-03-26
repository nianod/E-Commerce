//const { maxHeaderSize } = require("http");
const readline = require("readline");
const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("What is your budget for the selcted item? ", function(price) {
    if(price >= '$10'.toLowerCase()) {
        console.log("The price is Fair");
        
    } else {
        nextPrice();      
    }
    const nextPrice = () => {
        let MinimumPrice = document.getElementById('cart-price');
        let MaximumPrice = document.getElementById('cart-quantity');
        if(MinimumPrice <= 0 && MaximumPrice >= $500) {
            console.log("The price is illogical");            
        } else if(MaximumPrice && MinimumPrice >= 0 || MaximumPrice && MinimumPrice == 500) {
            console.log("Thanks for purchasing");
            
        } else {
            return MaximumPrice;
        }
        rl.close(); 
    }
    nextPrice();

});    

