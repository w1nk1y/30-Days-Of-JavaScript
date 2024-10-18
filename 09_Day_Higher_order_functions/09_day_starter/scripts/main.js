//Easy LVL
const Countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
//1
//forEach - функция для кажд. эл. массива. Он не возвращает новый массив.
//map - функция для кажд. эл. массива. Он создает новый массив.
//filter - фильтрует массив и создает новый из отфильтрованных эл.
//reduce - применяет функцию к аккумулятору и элементам массива, чтобы свести его к одному выходному значению.

//2
function callbackFunction(element) {
    console.log(element);
  }

//3-4-5
Countries.forEach(callbackFunction);
names.forEach(callbackFunction);
numbers.forEach(callbackFunction);

//6-7-8-9-10
const uppercasedCountries = Countries.map((country)=>country.toUpperCase());
console.log(uppercasedCountries);

const lengthCountries = Countries.map((country)=>country.length);
console.log(lengthCountries);

const squaredNumbers = numbers.map((number)=>number**2);
console.log(squaredNumbers);

const uppercasedNames = names.map((name)=> name.toUpperCase());
console.log(uppercasedNames);

const prices = products.map((product)=> product.price);
console.log(prices);

//11-12-13-14-15
const filteredCountries = Countries.filter((country) => country.includes('land'));
console.log(filteredCountries);

const sixCharacterCountries = Countries.filter(country => country.length==6);
console.log(sixCharacterCountries);

const moreSixCountries = Countries.filter(country => country.length>=6);
console.log(moreSixCountries);

const startWithE = Countries.filter(country => country.startsWith('E'));
console.log(startWithE);

const filteredProducts = products.filter(product => product.price !== undefined && product.price !== null && typeof product.price !== "string");
console.log(filteredProducts);

//16
function getStringLists(arr) {
    return arr.filter(item => typeof item === 'string');
  }

//17
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

//18
Countries.unshift('Estonia');
const sentence = Countries.reduce((acc, curr, index) => {
    if (index === Countries.length - 1) {
      return `${acc} and ${curr} are north European countries`;
    } 
    else {
      return `${acc}, ${curr}`;
    }
  }, '');
  console.log(sentence);

//19
//some - минимум 1 элемент удовлетворяет условию
//every - все элементы

//20
const hasLongName = names.some(name => name.length > 7);
console.log(hasLongName);

//21
const landCountries = Countries.every(country => country.includes('land'));
console.log(landCountries);

//22
//find - ищет первый элемент удовл. условию
//findIndex - ищет индекс первого элемента удовлю условию

//23
const onlySixLetter = Countries.find(country => country.length === 6);
console.log(onlySixLetter);

//24
const sixLetterCountryIndex = Countries.findIndex(country => country.length === 6);
console.log(sixLetterCountryIndex); 

//25-26
const norwayIndex = Countries.findIndex(country => country === 'Norway');
console.log(norwayIndex); 

const russiaIndex = Countries.findIndex(country => country === 'Russia');
console.log(russiaIndex);

