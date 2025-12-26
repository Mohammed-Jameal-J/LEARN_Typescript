"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class student {
    studentId;
    name;
    _marks;
    email;
    // static variable
    static schoolName = "ABC School";
    static totalStudents = 0;
    constructor(studentId, name, _marks, email) {
        this.studentId = studentId;
        this.name = name;
        this._marks = _marks;
        this.email = email;
        student.totalStudents += 1;
    }
    get marks() {
        return this._marks;
    }
    set marks(marks) {
        if (marks < 0 || marks > 100) {
            console.log("Invalid marks. Please enter marks between 0 and 100.");
            return;
        }
        this._marks = marks;
    }
    displayInfo() {
        console.log(`\n Student ID: ${this.studentId}`);
        console.log(` Name: ${this.name}`);
        console.log(` Marks: ${this._marks}`);
        if (this.email) {
            console.log(` Email: ${this.email}`);
        }
    }
    static showSchoolInfo() {
        console.log(`\n School Name: ${student.schoolName}`);
        console.log(` Total Students: ${student.totalStudents}`);
    }
}
const student1 = new student(1, "Alice", 85, "alice@example.com");
const student2 = new student(2, "Bob", 90);
const student3 = new student(3, "Charlie", 78);
console.log("\n Type Check");
console.log(typeof student1);
console.log(student2 instanceof student);
console.log(`\n Public Access: ${student.name}`);
console.log(`\n Readonly Access: ${student1.studentId}`);
console.log(`Marks: ${student1.marks}  `);
console.log(`\n Using Setter`);
student1.marks = 95;
console.log(`Updated Marks: ${student1.marks}  `);
student1.displayInfo();
student2.displayInfo();
student3.displayInfo();
student.showSchoolInfo();
//# sourceMappingURL=student.js.map