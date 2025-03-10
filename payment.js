const readline = require("readline");
const rl= readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("What is your budget for the selcted item? ", function(price) {
    if(price >= '$10'.toLowerCase) {
        console.log("The price is Fiar");
        
    } else {
        nextPrice();      
    }
    const nextPrice = () => {
        let MinimumPrice;
        let MaximumPrice
    }
});