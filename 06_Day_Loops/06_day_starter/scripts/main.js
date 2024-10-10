//Easy LVL

//Task 1
//1
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//2
i=0;
while ( i <= 10) {
    console.log(i);
    i++;
}
//3
i=0;
do {
    console.log(i);
    i++;
} while (i <= 10);

//Task 2
// same as 1st; conditions are i>=0, i-- 

//Task 3
let n = 27; 
for (let i = 0; i <= n; i++) {
    console.log(i);
}

//Task 4
for (let i = 0; i <= 6; i++) {
    let str='';
    for (let j = 0; j<=i; j++) {
        str+="#"
    }
    console.log(str);
}

//Task 5
for (let i=0; i<=10;i++){
    console.log(`${i} x ${i} = ${i*i}`);
}

//Task 6
console.log('i  i^2  i^3');
for (let i=0; i<=10;i++){
    console.log(`${i} ${i**2} ${i**3}`);
}

//Task 7
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Task 8
for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//Task 9
function isPrime(num) {
    if (num<=3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0 )   return false;
    }
    return true;
}

for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

//Task 10
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

//Task 11/12
let sumEvens = 0;
let sumOdds = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEvens += i;
    } else {
        sumOdds += i;
    }
}
console.log(`The sum of all evens from 0 to 100 is ${sumEvens}. And the sum of all odds from 0 to 100 is ${sumOdds} `);
console.log([sumEvens, sumOdds]);

//Task 13/14
function RandomArray(count, max) {
    let randomNumbers = new Set();
    while (randomNumbers.size < count) {
        randomNumbers.add(Math.floor(Math.random() * max)); 
    }
    return Array.from(randomNumbers);
}

console.log(RandomArray(5, 100));

//Task 15
function RandomId(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomId;
}

console.log(RandomId(6));

//Middle LVL
//Task 1
let length = 10
function RandomId(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < length; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomId;
}

console.log(RandomId(length));





