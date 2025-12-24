"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    orderId;
    customerName;
    amount;
    constructor(orderId, customerName) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.amount = 0;
    }
    addItem(price) {
        this.amount += price;
    }
    placeOrder() {
        console.log(`Order ${this.orderId} placed for ${this.customerName} with total amount ${this.amount}`);
    }
}
const order1 = new Order(101, "Alice");
order1.addItem(250);
order1.addItem(150);
order1.placeOrder();
//# sourceMappingURL=order.js.map