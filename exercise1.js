// Constructor function for Product object
function Product(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
}

// Adding displayInfo method to Product prototype
Product.prototype.displayInfo = function() {
    console.log(`Name: ${this.name}, Price: ${this.price}, Description: ${this.description}`);
}

// Data
let productsData = {
    name: ["Laptop", "Smartphones", "Headphones"],
    price: [999.99, 699.99, 149.99],
    description: ["Powerful computing on the go", "Stay connected wherever you are", "Immersive audio experience"]
}

//  array to store product instances
let productInstances = [];

// Creating product instances and storing them in the array
for (let i = 0; i < productsData.name.length; i++) {
    let product = new Product(productsData.name[i], productsData.price[i], productsData.description[i]);
    productInstances.push(product);
}

// Displaying product information
console.log("Product information:");
productInstances.forEach(product => product.displayInfo());






