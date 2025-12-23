class Product{
    id: number;
    name: string;
    price: number;

    constructor(id: number, name: string, price: number){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    applyDiscount(discountPercentage: number): void {
        const discountAmount = (this.price * discountPercentage) / 100;
        this.price -= discountAmount;
    }
}

const product = new Product(1, "Laptop", 1000);
product.applyDiscount(10);
console.log(`The price after discount is: $${product.price}`);  