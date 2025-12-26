class Person {
    constructor(
        public firstName: string,
        public lastName: string
    ){}
    get fullName(): string {
        return this.firstName + " " + this.lastName;
    }
    walk(): void {
        console.log(`${this.firstName} is walking.`);
    }
}
class Teacher extends Person {
    constructor(
        public teacherId: number,
        firstName: string,
        lastName: string
    ) {
        super(firstName, lastName);
    }

    //override 
    override get fullName(): string {
        return `Teacher: ${super.fullName}`;
    }

    teach(): void {
        console.log(`${super.fullName} is teaching.`);
    }   
}

class Student extends Person {
    override get fullName(): string {
        return `Student: ${super.fullName}`;
    }
}

class Principal extends Person {
    override get fullName(): string {
        return `Principal: ${super.fullName}`;
    }
}

const t1 = new Teacher(123, "John", "Doe");

t1.walk();
t1.teach();
//call t1
console.log(t1);
console.log(t1.fullName);

function printFullName(person: Person): void {
    console.log(person.fullName);
}
printFullName(new Student("Jane", "Doe"));
printFullName(new Principal("Dr.", "Smith"));