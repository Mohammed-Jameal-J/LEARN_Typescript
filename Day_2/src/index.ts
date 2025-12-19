// buildin types

//number
let num1: number = 10;
console.log(num1);

//string
let str1: string = "Hello";
let str2: string = 'World';
console.log(str1 + " " + str2);

//boolean
let isDone: boolean = true;
console.log(isDone);

//any try to avoid using any
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
console.log(randomValue);

//array
let numArray: number[] = [1, 2, 3, 4, 5];
// numArray.forEach(n=>n.toFixed(2));
console.log(numArray);

//tuple
let tuple1: [number, string, boolean] = [1, "Hello", true];
// tuple1[1]. 
console.log(tuple1);

//enum (first letter capitalized)
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c);

// function 
function greetUser(name: string): string {
    return "Hello " + name;
}
console.log(greetUser("Alice"));

// void 
// function logMessage(message: string): void {
    
// }
// logMessage("This is a log message");

function multiply(a: number, b: number, c: number=5): number {
    return a * b + c;
}
multiply(2, 3);

// object 
let username: { readonly id: number, name: string, phoneNumber?: number, add:(a: number,b:number)=>number} = {id: 1, name: "John", add: (a,b)=>a+b};
username.phoneNumber = 1234567890
console.log(username);
console.log(username.add(2, 3));
// readonly id: number;    cannot change
// phoneNumber?: number;  optional
// add: (a,b)=>number;    function type
