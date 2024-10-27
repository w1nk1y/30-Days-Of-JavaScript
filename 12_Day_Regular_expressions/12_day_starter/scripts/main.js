//Easy LVL

//1
const string = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

const matchArr = string.match(/\d+/g);
const salary = parseInt(matchArr[0], 10)*12;
const annualBonus = parseInt(matchArr[1], 10);
const courses = parseInt(matchArr[2], 10)*12;

const totalAnnualIncome = salary + annualBonus + courses;

console.log(totalAnnualIncome);

//2
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
const sortedPoints = points.map(Number);
sortedPoints.sort((a, b) => a - b);

const distance = sortedPoints[sortedPoints.length - 1] - sortedPoints[0];

console.log(distance);

//3
const pattern= /^[a-zA-Z_][a-zA-Z0-9_]*$/;
console.log(pattern.test('first_name'));
console.log(pattern.test('first-name'));
console.log(pattern.test('1first_name'));
console.log(pattern.test('firstname'));