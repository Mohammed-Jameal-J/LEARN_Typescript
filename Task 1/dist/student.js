"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class studentMark {
    id;
    name;
    english;
    math;
    totalMarks;
    constructor(id, name, english, math) {
        this.id = id;
        this.name = name;
        this.english = english;
        this.math = math;
        this.totalMarks = 0;
    }
    calculateTotal() {
        this.totalMarks = this.english + this.math;
        console.log(`Total marks of ${this.name} is: ${this.totalMarks}`);
    }
}
const student1 = new studentMark(1, "Alice", 85, 90);
student1.calculateTotal();
const student2 = new studentMark(2, "Bob", 78, 88);
student2.calculateTotal();
//# sourceMappingURL=student.js.map