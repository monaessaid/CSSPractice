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
console.log("If that number is raised to the power three, there will be", students, "students.");
students += 1;
console.log("8 + 1 = ", students, "students");

console.log(age);
console.log("My name is ", firstName, lastName);
console.log("Is", firstName, lastName, "a student? ", student);

// let username = window.prompt("Hello! What is your name?");
// console.log(username);

let username2;

document.getElementById("myButton").onclick = function () {
    username2 = document.getElementById("myText").value;
    if (username2 === "Chihiro") {
        window.alert("Chihiro...What a pretty name! It belongs to me now. From now on, your name is Sen.");
        document.getElementById("myLabel").innerHTML = "Hello Sen...";
    } else{
        document.getElementById("myLabel").innerHTML = "Hello, " + username2 + "!";
    }
}

let age2 = window.prompt("How old are you?");

console.log(typeof age2);
age2 = Number(age2);
age2 += 1;
console.log(typeof age2);
console.log("Happy birthday! You are " + age2 + " years old!");

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);