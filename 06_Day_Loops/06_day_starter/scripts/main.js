//Easy LVL

//Task 1
//1
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//2
let i=0;
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
//same as task 1 mid

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

//Task 2
function RandomHex() {
    const randomNumber = Math.floor(Math.random() * 0xFFFFFF);
    const hexNumber = randomNumber.toString(16).padStart(6, '0');
    return `#${hexNumber}`;
}

const Hex = RandomHex();
console.log(Hex);

//Task 3
function RandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

const randomRGB = RandomRGB();
console.log(randomRGB);

//Task 4
const countries = [
    "albania", "bolivia", "canada", "denmark", "ethiopia",
    "finland", "germany", "hungary", "ireland", "iceland", "japan", "kenya"
];

const uppercaseCountries = countries.map(country => country.toUpperCase());

console.log(uppercaseCountries);

//Task 5
const countryLengths = countries.map(country => country.length);

console.log(countryLengths);

//Task 6
const ArrayOfArrays = countries.map((country) => [
    country.charAt(0).toUpperCase() + country.slice(1), 
    country.toUpperCase().slice(0,3),
    country.length
]);

console.log(ArrayOfArrays);

//Task 7
const Land = countries.filter(country => country.includes('land'));

if (Land.length > 0) {
    const formattedLand = Land.map(country =>
        country.charAt(0).toUpperCase() + country.slice(1)
    );
    console.log(formattedLand);
} else {
    console.log('All these countries are without land');
}

//Task 8
const Ia = countries.filter(country => country.endsWith('ia'));

if (Ia.length > 0) {
    const formattedIa = Ia.map(country =>
        country.charAt(0).toUpperCase() + country.slice(1)
    );
    console.log(formattedIa);
} else {
    console.log('These are countries ends without ia');
}

//Task 9
let max=0;
let maxCountry ='';
for (let i=0; i<countries.length; i++){
    if (countries[i].length > max){
        max=countries[i].length;
        maxCountry = countries[i];
    }
}
console.log(maxCountry);

//Task 10
const fiveLetter = countries.filter(country => country.length === 5);
console.log(fiveLetter);


