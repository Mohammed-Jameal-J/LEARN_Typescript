"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    applyDiscount(discountPercentage) {
        const discountAmount = (this.price * discountPercentage) / 100;
        this.price -= discountAmount;
    }
}
const product = new Product(1, "Laptop", 1000);
product.applyDiscount(10);
console.log(`The price after discount is: $${product.price}`);
//# sourceMappingURL=index.js.map