"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    _salary;
    constructor(name, _salary) {
        this.name = name;
        this._salary = _salary;
    }
    get Roll() {
        return "Employee";
    }
    salary() {
        console.log(`${this.name}'s salary is ${this._salary}`);
    }
}
class Developer extends Employee {
    get Roll() {
        return "Developer";
    }
}
class Manager extends Employee {
    get Roll() {
        return "Manager";
    }
}
function printEmployeeRoll(employee) {
    console.log(`Employee Roll: ${employee.Roll}`);
}
const d1 = new Developer("Alice", 80000);
d1.salary();
const m1 = new Manager("Bob", 95000);
m1.salary();
printEmployeeRoll(d1);
printEmployeeRoll(m1);
//# sourceMappingURL=company.js.map