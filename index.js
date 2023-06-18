console.log("hello world");
// window.alert("Attention!");

let age = 26;

let firstName = "Mona";
let lastName = "Essaid";

let student = true;

//Changing the first 3 paragraphs to different text
document.getElementById("p1").innerHTML = "Hello " + firstName + "!";
document.getElementById("p2").innerHTML = "You are " + age + " years old.";
document.getElementById("p3").innerHTML = "Student? " + student;

//Arithmetic operations
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

//Printing to console 
console.log(age);
console.log("My name is ", firstName, lastName);
console.log("Is", firstName, lastName, "a student? ", student);

// let username = window.prompt("Hello! What is your name?");
// console.log(username);

let username2;

//Textbox where visitor can type their name. Text before button will change to say "Hello (Name)"
document.getElementById("myButton").onclick = function () {
    username2 = document.getElementById("myText").value;
    if (username2 === "Chihiro") {
        window.alert("Chihiro...What a pretty name! It belongs to me now. From now on, your name is Sen.");
        document.getElementById("myLabel").innerHTML = "Hello Sen...";
    } else {
        document.getElementById("myLabel").innerHTML = "Hello, " + username2 + "!";
    }
}

// //Data types/type conversions
// let age2 = window.prompt("How old are you?");

// console.log(typeof age2);
// age2 = Number(age2);
// age2 += 1;
// console.log(typeof age2);
// console.log("Happy birthday! You are " + age2 + " years old!");

let x;
let y;
let z;

x = Number("3.14");
y = String(3.14);
z = Boolean("o");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

//Constants
const PI = Math.PI;
let radius;
let circumference;

// radius = window.prompt("Enter the radius:");
// radius = Number(radius);

// circumference = 2 * PI * radius;

// console.log("The circumference is: " + circumference);

//JS Math Functions

let a = 9;
let b = 6;
let c = 15;
let max;
let min;
// a = Math.round(a);
// console.log("Rounded:" + a);
// a = Math.floor(a);
// console.log("Rounded down:" + a);
// a = Math.ceil(a);
// console.log("Rounded up:" + a);
a = Math.pow(a, 3);
console.log("Cubed: " + a);
a = Math.sqrt(a);
console.log("Square root of a: " + a);
// a = Math.abs(a);
// console.log(a);
max = Math.max(a, b, c);
console.log("Max value is: " + max);
min = Math.min(a, b, c);
console.log("Min value is: " + min);

{/* <button id="decBtn">Decrease</button>
<button id="resetBtn">Reset</button>
<button id="incBtn">Increase</button> */}

//Declare count variable. Count is incremented, decremented, or reset with the buttons
let count = 0;

document.getElementById("decBtn").onclick = function () {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("resetBtn").onclick = function () {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}
document.getElementById("incBtn").onclick = function () {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}

//Random Number Generator

let d;
let e;
let f;

//Generates 3 random numbers up to 10, 15, or 20 for each player
document.getElementById("rollBtn").onclick = function () {

    let d = Math.floor((Math.random() * 10) + 1);
    let e = Math.floor((Math.random() * 15) + 1);
    let f = Math.floor((Math.random() * 20) + 1);

    document.getElementById("dlabel").innerHTML = "Player 1: " + d;
    document.getElementById("elabel").innerHTML = "Player 2: " + e;
    document.getElementById("flabel").innerHTML = "Player 3: " + f;
}

//String methods

let userName = "Mona";
let phone = "123-456-7890";

let nameLength = userName.length;
console.log("Your username, " + userName + ", has " + nameLength + " characters.");
console.log(userName.charAt(6));
console.log(userName.indexOf("e"));
console.log(userName.lastIndexOf("e"));
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
phone = phone.replaceAll("5", "*");
console.log(phone);

//String Slicing 

let fullName = "Bob Ross";
let fName;
let lName;

// fName = fullName.slice(0,4);
// console.log(fName);
// lName = fullName.slice(5);
// console.log(lName);

fName = fullName.slice(0, fullName.indexOf(" ")+1);
console.log(fName);
lName = fullName.slice(fullName.indexOf(" ")+1);
console.log(lName);