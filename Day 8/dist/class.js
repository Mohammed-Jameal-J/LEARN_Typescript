"use strict";
//instance writting any we can use generic types to make it type safe
Object.defineProperty(exports, "__esModule", { value: true });
class KeyValuePair {
    _key;
    _value;
    constructor(_key, _value) {
        this._key = _key;
        this._value = _value;
    }
    get key() {
        return this._key;
    }
    get value() {
        return this._value;
    }
    display() {
        console.log(`Key: ${this._key}, Value: ${this._value}`);
    }
}
const student1 = new KeyValuePair("age", 30);
student1.display();
const product1 = new KeyValuePair("101", "Laptop");
product1.display();
const userData = new KeyValuePair("user1", { name: "Alice", email: "alice@example.com" });
userData.display();
class Logger {
    log(value) {
        console.log(`Log entry: ${value}`);
    }
}
const logger = new Logger();
logger.log("This is a log message.");
//# sourceMappingURL=class.js.map