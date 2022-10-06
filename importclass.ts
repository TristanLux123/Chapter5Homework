import { Student } from "/Users/tbagggg/Downloads/Chapter5Homework/students";

let student1 = new Student("Tristan", "lux", 19, 1, "tristan.lux8@gmail.com", "7 Weir St, Branford, CT")
let student2 = new Student("John", "Doe", 11, 2, "johndoe@gmail.com", "77 Near St, West Haven, CT")

console.log(student1)
student1.setEmailAddress("tristan.lux8@gmail.com")
console.log("SET METHODS HAVE BEEN USED\n")
console.log(student1)
console.log("\n\n")

console.log(student2)
student2.setEmailAddress("JohnDoe@icloud.com")
console.log("SET METHODS HAVE BEEN USED\n")
console.log(student2)