//Easy LVL
//Task 1
let age = prompt("Enter your age:");

if (age >= 18) {
    console.log("You are old enough to drive.");
} else {
    console.log(`You are left with ${18-age} years to drive.`);
}

//Task 2
let myAge = 16; 
let yourAge = prompt("Enter your age:");
let diff = yourAge - myAge;

if (yourAge > myAge) {
    console.log(`You are ${diff} years older than me.`);
} else if (yourAge < myAge) {
    console.log(`I am ${Math.abs(diff)} years older than you.`);
} else {
    console.log("We are the same age.");
}

//Task 3
let a = 4;
let b = 3;
//1
if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} is less than ${b}`);
}
//2
let result = (a > b) ? `${a} is greater than ${b}` : `${a} is less than ${b}`;
console.log(result);

//Task 4

let number = prompt("Enter a number:");

if (number % 2 === 0) {
    console.log(`${number} is an even number.`);
} else {
    console.log(`${number} is an odd number.`);
}



