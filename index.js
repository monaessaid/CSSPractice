console.log("hello world");
// window.alert("Attention!");

let age = 26;

let firstName = "Mona";
let lastName = "Essaid";

let student = true;

document.getElementById("p1").innerHTML = "Hello " + firstName + "!";
document.getElementById("p2").innerHTML = "You are " + age + " years old.";
document.getElementById("p3").innerHTML = "Student? " + student;

let students = 20;
console.log("The original number of students is:", students);
students = students - 3;
console.log("After 3 students leave this section, there will be", students, "students.");
students = students * 2;
console.log("If the class size doubles, there will be", students, "students.");
students = students + 1;
console.log("One more student joins the course. There are currently", students, "students.");
students = students % 3;
console.log("If the students form groups of 3, there will be", students, "remaining.");
students = students ** 3;
console.log("If that number is raised to the power three, there will be", students,"students.");
students += 1;
console.log("8 + 1 = ",students,"students");

console.log(age);
console.log("My name is ", firstName, lastName);
console.log("Is", firstName, lastName, "a student? ", student);

let username = window.prompt("Hello! What is your name?");
console.log(username);

