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

fName = fullName.slice(0, fullName.indexOf(" ") + 1);
console.log(fName);
lName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lName);

// If/else statements

let age3 = -1;

if (age3 >= 18) {
    console.log("You are 18 or over!");
} else if (age3 < 0) {
    console.log("Invalid input!");
} else if (age3 < 18) {
    console.log("You are under 18!");
}

let online = false;

if (online) {
    console.log("User is online");
} else {
    console.log("User is offline");
}

document.getElementById("creatureSubmit").onclick = function () {
    if (document.getElementById("humanCB").checked) {
        document.getElementById("creatureType").innerHTML = "Bye, Felicia!";
    } else if (document.getElementById("dolphinCB").checked) {
        document.getElementById("creatureType").innerHTML = "So long and thanks for all the fish!";
    } else if (document.getElementById("turtleCB").checked) {
        document.getElementById("creatureType").innerHTML = "Bye, turtle!";
    } else if (document.getElementById("virusCB").checked) {
        document.getElementById("creatureType").innerHTML = "You gave E.T. covid... he can't phone home";
    } else if (document.getElementById("frogCB").checked) {
        document.getElementById("creatureType").innerHTML = "Ribbit ribbit";
    }
}

//Grade switch statement 
let grade;
document.getElementById("markSubmit").onclick = function () {
    grade = document.getElementById("myMark").value;
    switch (true) {
        case grade >= 101:
            document.getElementById("myResult").innerHTML = "Your score is over 100! Not valid!";
            break;
        case grade >= 90:
            document.getElementById("myResult").innerHTML = "Congratulations! It's an A";
            break;
        case grade >= 80:
            document.getElementById("myResult").innerHTML = "Great job! You got a B!";
            break;
        case grade >= 70:
            document.getElementById("myResult").innerHTML = "Good work, you passed with a C!";
            break;
        case grade >= 60 || grade >= 50:
            document.getElementById("myResult").innerHTML = "You managed to pass, at least &#128517";
            break;
        case grade <= 49 && grade >= 0:
            document.getElementById("myResult").innerHTML = "Unfortunately, you failed...";
            break;
        default:
            document.getElementById("myResult").innerHTML = grade + " is not a valid score! Please enter a score between 0-10";
            break;
    }
}

//AND and OR Operators
let age4;
document.getElementById("myAgeButton").onclick = function () {
    age4 = document.getElementById("myAge").value;
    if (age4 < 18) {
        document.getElementById("myAgeLabel").innerHTML = "You are not an adult yet!";
    } else if (age4 >= 100) {
        document.getElementById("myAgeLabel").innerHTML = "You are 100 years old or over!";
    } else if (age4 >= 66) {
        document.getElementById("myAgeLabel").innerHTML = "You are a senior!";
    } else if (age4 >= 18 || age <= 65) {
        document.getElementById("myAgeLabel").innerHTML = "You are an adult!";
    } else {
        document.getElementById("myAgeLabel").innerHTML = "Invalid input!";
    }
}

// let userName3 = "";

// while(userName3 === "" || userName3 === null){
//     userName3 = window.prompt("Enter your username:");
// }

// console.log("Hello", userName3);

// While and for loop counters and continue
let n = 1;

while (n <= 10) {
    console.log(n);
    n++;
}

for (let counter = 11; counter <= 20; counter++) {
    if (counter === 12) {
        continue;
    }
    console.log(counter);
}

for (let y = 1; y <= 5; y++) {
    for (let z = 1; z <= 5; z++) {
        console.log(z);
    }
}

//Allows the user to draw a rectangle with a specified number of rows and columns and a symbol of their choice
document.getElementById("rectangleSubmit").onclick = function () {
    let rows = document.getElementById("numRows").value;
    let cols = document.getElementById("numCols").value;
    if (rows < 0 || cols < 0) {
        document.getElementById("myRectangleLabel").innerHTML = "Invalid input- please enter a number greater than 1";
    }
    let symb = document.getElementById("symbol").value;
    if (symb.length > 1) {
        document.getElementById("myRectangleLabel").innerHTML = "Please enter only 1 symbol";
    }
    for (let r = 1; r <= rows; r++) {
        for (let s = 1; s <= cols; s++) {
            document.getElementById("myRectangle").innerHTML += symb;
        }
        document.getElementById("myRectangle").innerHTML += "<br>";
    }
}

// Happy birthday function
let username3 = "Jack";
happyBirthday(username3);

function happyBirthday(username3) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", username3);
    console.log("Happy birthday to you!");
}

// Calculate volume
document.getElementById("volumeSubmit").onclick = function () {
    let volume;
    let length = document.getElementById("lenValue").value;
    let width = document.getElementById("widthValue").value;
    let height = document.getElementById("heightValue").value;
    volume = length * width * height;
    document.getElementById("volumeLabel").innerHTML = "The volume is " + volume;
}

// Ternary Operator
let color = isBlue("xyz");
console.log("Is the color blue?", color);

function isBlue(color) {
    return color === "blue" ? true : false;
}

// Formatting numbers
let price = 12345.68;

// Intl.NumberFormat
let priceUK = new Intl.NumberFormat(
    "en-GB", { style: "currency", currency: "GBP" }
).format(price);
console.log(priceUK);
let priceUS = new Intl.NumberFormat(
    "en-US", { style: "currency", currency: "USD" }
).format(price);
console.log(priceUS);

// toLocaleString
let priceEU = price.toLocaleString("de-DE", { style: "currency", currency: "EUR" });
console.log(priceEU);
// Percentage
let newNum = 0.125;
newNum = newNum.toLocaleString(undefined, { style: "percent" });
console.log(newNum);
// Temperature
let newNum2 = 55;
newUnitC = newNum2.toLocaleString(undefined, { style: "unit", unit: "celsius" });
console.log(newUnitC);
newUnitF = newNum2.toLocaleString(undefined, { style: "unit", unit: "fahrenheit" });
console.log(newUnitF);

// Random number generator

let compGuess;
let userGuess;
// document.getElementById("guessReset").onclick = function () {
//     compGuess = Math.floor((Math.random() * 10) + 1);
// }

// Number guessing game (NOT WORKING YET)
document.getElementById("guessSubmit").onclick = function () {
    userGuess = document.getElementById("guessValue").value;
    compGuess = Math.floor((Math.random() * 10) + 1);
        if (userGuess < compGuess) {
            document.getElementById("compGuess").innerHTML = "The number you selected is lower than my number! " + compGuess;
        } else if (userGuess > compGuess) {
            document.getElementById("compGuess").innerHTML = "The number you selected is higher than my number! " + compGuess;
        } else if (userGuess == compGuess) {
            document.getElementById("compGuess").innerHTML = "Your guess was correct!";
        } else {
            document.getElementById("compGuess").innerHTML = "Invalid input, please try again";
        }
}