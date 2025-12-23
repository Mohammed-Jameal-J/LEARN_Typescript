class Order {
    orderId: number;
    customerName: string;
    amount: number;

    constructor(orderId: number, customerName: string) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.amount = 0;
    }
    addItem(price: number): void {
        this.amount += price;
    }
    placeOrder(): void {
        console.log(`Order ${this.orderId} placed for ${this.customerName} with total amount ${this.amount}`);
    }
}
const order1 = new Order(101, "Alice");
order1.addItem(250);
order1.addItem(150);
order1.placeOrder();