"use strict";
//object = type alias
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 1,
    name: "Learning TS",
};
console.log(user);
const age = 30;
console.log(age);
const userId1 = 1;
const userId2 = "2";
console.log(userId1);
console.log(userId2);
function printValue(value) {
    // type narrowing
    if (typeof value === "string") {
        return parseInt(value) * 2.2;
    }
    else {
        return value * 2.2;
    }
}
console.log(printValue(10));
console.log(printValue("20"));
const employee = {
    name: "John",
    age: 25,
    employeeId: 1001,
};
console.log(employee);
//optional chainning ?
let userInfo = {
    profile: {
        name: "Alice"
    }
};
// optional property chaining ? 
console.log(userInfo?.profile?.name);
// optional element chaining ?
let users = [
    { id: 1, name: "User1" },
    { id: 2, name: "User2" },
];
users[2]?.name; //undefined
console.log(users[2]?.name);
//optional element accessing in array of objects
let userss = [
    { name: "Jameal" },
    { name: "Mohammed" }
];
userss[1]?.name;
const product = {};
product.log?.(); //undefined
//nullish coalescing operator ??
let count = 0;
console.log(count || 10); //10
console.log(count ?? 10); //0
//type assertions
let element = document.getElementById("myElement");
element.value = "Hello TypeScript";
//unknown type
let userInput;
userInput = 5;
userInput = "Hello";
console.log(userInput);
//never type
function throwError(message) {
    throw new Error(message);
}
throwError("This is a fatal error");
console.log("new");
//# sourceMappingURL=index.js.map