"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    name;
    balance;
    nickname;
    constructor(id, name, balance, nickname) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.nickname = nickname;
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
const acc3 = new Account(3, "Alice Johnson", 1500, "AJ");
console.log(acc3);
console.log(typeof acc1);
console.log(acc1 instanceof Account);
//# sourceMappingURL=index.js.map