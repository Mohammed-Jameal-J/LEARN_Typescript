class Employee {
  constructor(public name: string, private _salary: number) {}
  get Roll(): string {
    return "Employee";
  }
  salary():void {
    console.log(`${this.name}'s salary is ${this._salary}`);
  }
}

class Developer extends Employee {
    override get Roll(): string {
        return "Developer";
    }
}

class Manager extends Employee {
    override get Roll(): string {
        return "Manager";
    }
}

function printEmployeeRoll(employee: Employee): void {
    console.log(`Employee Roll: ${employee.Roll}`);
}

const d1 = new Developer("Alice", 80000);
d1.salary();
const m1 = new Manager("Bob", 95000);
m1.salary();
printEmployeeRoll(d1);
printEmployeeRoll(m1);


//reuse parent logic => inheritance
//to change the behavior of parent class => method overriding
//same interface different behavior(output) => polymorphism
//to access parent class logic => super keyword
//compiler safe-guards => override keyword
