"use strict";

// function sum(size) {
//   let result = 0;

//   for (let i = 0; i < size; i++) {
//     result += i;
//   }

//   return result;
// }

console.log("page 3", sum(100));

Object.assign({}, {});

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [new Student("A", 29, true, 45), new Student("B", 28, false, 80), new Student("C", 30, true, 90), new Student("D", 40, false, 66), new Student("E", 18, true, 88)];

function func14() {
  const result = students.find((item) => {
    if (item.score === 90);
  });

  console.log(result);
}
