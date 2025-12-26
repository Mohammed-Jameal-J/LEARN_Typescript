"use strict";
//index signature
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};
console.log(user.name);
user.phone = "123-456-7890"; // Adding a new property
console.log(user);
class ErrorBag {
}
const errorBag = new ErrorBag();
errorBag.email = "Not a valid email!";
errorBag.username = "Must start with a capital letter!";
console.log(errorBag);
//# sourceMappingURL=user.js.map