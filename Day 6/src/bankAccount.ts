//Access Modifiers
//public
//private
//protected

//encapsulation => data hiding || information hiding
class BankAccount {
    owner: string;
    private _balance: number;
    accountType: string;

    constructor(owner: string, balance: number, accountType: string) {
        this.owner = owner;
        this._balance = balance;
        this.accountType = accountType;
    }
    deposit(amount: number): void {
        this._balance += amount;
    }
    getBalance(): number {
        return this._balance;
    }  
}
const myAccount = new BankAccount("Alice", 1000, "Savings");
myAccount.deposit(500);
console.log(myAccount.getBalance()); // Accessing balance via method

//parameter properties
class BankAccount2 {
    constructor( public owner: string, private _balance: number, public accountType: string) {
    }
    deposit(amount: number): void {
        this._balance += amount;
    }   
    getBalance(): number {
        return this._balance;
    }
}
const myAccount2 = new BankAccount2("Bob", 2000, "Checking");
myAccount2.deposit(300);
console.log(myAccount2.getBalance()); // Accessing balance via method

//getter and setter
class BankAccount3 {
    constructor( public owner: string, private _balance: number, public accountType: string) {
    }
    deposit(amount: number): void {
        this._balance += amount;
    }
    get balance(): number {
        return this._balance;
    }
    set balance(amount: number) {
        if (amount < 0) {
            console.log("Balance cannot be negative.");
            return;
        }
        this._balance = amount;
    }
}
const myAccount3 = new BankAccount3("Charlie", 3000, "Business");
myAccount3.deposit(400);
console.log(myAccount3.balance);
myAccount3.balance = 100; // Using setter
console.log(myAccount3.balance);
myAccount3.balance = -500; // Attempt to set negative balance
