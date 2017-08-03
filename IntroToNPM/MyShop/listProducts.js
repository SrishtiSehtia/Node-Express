var faker = require("faker");

var count = 0
while(count < 10) {
    // var randomProductName = faker.commerce.productName()
    // var randomPrice = faker.commerce.price()
    console.log(faker.commerce.productName() + " - $" + faker.commerce.price())    
    count ++    
}

