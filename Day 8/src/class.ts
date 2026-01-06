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

const student1 = new KeyValuePair<string, number>("age", 30);
student1.display();