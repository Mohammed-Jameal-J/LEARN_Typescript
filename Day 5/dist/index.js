"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    name;
    balance;
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
}
const acc1 = new Account(1, "John Doe", 1000);
console.log(acc1);
acc1.deposit(500);
console.log(acc1);
const acc2 = new Account(2, "Jane Smith", 2000);
console.log(acc2);
acc2.deposit(750);
console.log(acc2);
//# sourceMappingURL=index.js.map