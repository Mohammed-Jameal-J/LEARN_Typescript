"use strict";
// buildin types
Object.defineProperty(exports, "__esModule", { value: true });
//number
let num1 = 10;
console.log(num1);
//string
let str1 = "Hello";
let str2 = 'World';
console.log(str1 + " " + str2);
//boolean
let isDone = true;
console.log(isDone);
//any try to avoid using any
let randomValue = 10;
randomValue = "Hello";
randomValue = true;
console.log(randomValue);
//array
let numArray = [1, 2, 3, 4, 5];
// numArray.forEach(n=>n.toFixed(2));
console.log(numArray);
//tuple
let tuple1 = [1, "Hello", true];
// tuple1[1]. 
console.log(tuple1);
//enum (first letter capitalized)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
// function 
function greetUser(name) {
    return "Hello " + name;
}
console.log(greetUser("Alice"));
// void 
// function logMessage(message: string): void {
// }
// logMessage("This is a log message");
function multiply(a, b, c = 5) {
    return a * b + c;
}
multiply(2, 3);
// object 
let username = { id: 1, name: "John", add: (a, b) => a + b };
username.phoneNumber = 1234567890;
console.log(username);
console.log(username.add(2, 3));
// readonly id: number;    cannot change
// phoneNumber?: number;  optional
// add: (a,b)=>number;    function type
//# sourceMappingURL=index.js.map