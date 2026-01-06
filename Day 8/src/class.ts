class KeyValuePair<K, V> {
    constructor(
        private _key: K,
        private _value: V,
    ){}
    get key(): K {
        return this._key;
    }
    get value(): V {
        return this._value;
    }

    display(): void {
        console.log(`Key: ${this._key}, Value: ${this._value}`);
    }
}

interface User{
    name : string;
    email : string;
}

const student1 = new KeyValuePair<string, number>("age", 30);
student1.display();
const product1 = new KeyValuePair<string, string>("101", "Laptop");
product1.display();

const userData = new KeyValuePair<string, User>("user1", {name: "Alice", email: "alice@example.com"});
userData.display();


class Logger{
    log<T>(value: T): void {
        console.log(`Log entry: ${value}`);
    }
}
const logger = new Logger();
logger.log<string>("This is a log message.");