"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log(`${this.firstName} is walking.`);
    }
}
class Teacher extends Person {
    teacherId;
    constructor(teacherId, firstName, lastName) {
        super(firstName, lastName);
        this.teacherId = teacherId;
    }
    //override 
    get fullName() {
        return `Teacher: ${super.fullName}`;
    }
    teach() {
        console.log(`${super.fullName} is teaching.`);
    }
}
class Student extends Person {
    get fullName() {
        return `Student: ${super.fullName}`;
    }
}
class Principal extends Person {
    get fullName() {
        return `Principal: ${super.fullName}`;
    }
}
const t1 = new Teacher(123, "John", "Doe");
t1.walk();
t1.teach();
//call t1
console.log(t1);
console.log(t1.fullName);
function printFullName(person) {
    console.log(person.fullName);
}
printFullName(new Student("Jane", "Doe"));
printFullName(new Principal("Dr.", "Smith"));
//# sourceMappingURL=inheritence.js.map