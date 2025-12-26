class Product {
    // static properties
    static storeName: string = "Tech Store";
    static totalProducts: number = 0;



    constructor(
        public readonly productId: number, 
        public productName: string,     
        private _price: number,      
        public category: string,
        public brand?: string  
    ) {
        this.productId = productId;
        Product.totalProducts += 1;
    }

    // getter
    get price(): number {
        return this._price;
    }

    // setter with validation
    set price(value: number) {
        if (value <= 0) {
            console.log("Price must be greater than 0");
            return;
        }
        this._price = value;
        console.log(`Price updated to Rs.${value}`);
    }

    // method
    displayProduct(): void {
        console.log(`\nProduct: ${this.productName}`);
        console.log(`ID: ${this.productId}`);
        console.log(`Price: Rs.${this._price}`);
        console.log(`Category: ${this.category}`);
        if (this.brand) {
            console.log(`Brand: ${this.brand}`);
        }
    }

    // static method
    static showStoreInfo(): void {
        console.log(`\nStore: ${Product.storeName}`);
        console.log(`Total Products: ${Product.totalProducts}`);
    }

    // static method
    static calculateDiscount(price: number, discountPercent: number): number {
        return price - (price * discountPercent) / 100;
    }
}


const product1 = new Product(1001, "Laptop", 45000, "Electronics", "Dell");
const product2 = new Product(1002, "Notebook", 50, "Stationery");

// Type check
console.log("\nType Check:");
console.log(`typeof product1: ${typeof product1}`);
console.log(`instanceof Product: ${product1 instanceof Product}`);

// Public access
console.log(`\nPublic access: ${product1.productName}`);

// Readonly access
console.log(`Product ID (readonly): ${product1.productId}`);

// Getter
console.log(`Price (via getter): Rs.${product1.price}`);

// Setter
console.log("\nUsing Setter:");
product1.price = 42000;
product1.price = -100;

// Display products
product1.displayProduct();
product2.displayProduct();

// Static property
console.log(`\nStore: ${Product.storeName}`);

// Static method
Product.showStoreInfo();

// Discount calculation
const discountedPrice = Product.calculateDiscount(45000, 15);
console.log(`Discounted Price: Rs.${discountedPrice}`);
