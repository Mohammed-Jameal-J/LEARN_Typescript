//object = type alias

type User = {
    id: number,
    name: string,
};

const user: User = {
    id: 1,
    name: "Learning TS",
};
console.log(user);

type Age = number;
const age: Age = 30;
console.log(age);

//union types mean either one type or another type |
type ID = number | string;
const userId1: ID = 1;
const userId2: ID = "2";
console.log(userId1);
console.log(userId2);

function printValue(value: number | string) {
    // type narrowing
if (typeof value === "string") {
    return parseInt(value)*2.2;
} else {
    return value * 2.2;
}
}
console.log(printValue(10));
console.log(printValue("20"));

//intersection types means both types &
type Person = {
    name: string,
    age: number,
};
type Employee = {
    employeeId: number,
};
type EmployeeDetails = Person & Employee;
const employee: EmployeeDetails = {
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
let users=[
    {id:1, name:"User1"},
    {id:2, name:"User2"},
];
users[2]?.name; //undefined
console.log(users[2]?.name);

//optional element accessing in array of objects

let userss=[
    {name:"Jameal"},
    {name:"Mohammed"}
]
userss[1]?.name

//function optional chaining

type Product = {
    log?:()=>void
}
const product: Product = {};
product.log?.(); //undefined

//nullish coalescing operator ??
let count = 0;
console.log(count || 10);//10
console.log(count ?? 10);//0

//type assertions
let element = document.getElementById("myElement") as HTMLInputElement;
element.value = "Hello TypeScript";

//unknown type
let userInput: unknown;
userInput = 5;
userInput = "Hello";

//never type
function throwError(message: string): never {
    throw new Error(message);
}
throwError("This is a fatal error");

console.log("new");
