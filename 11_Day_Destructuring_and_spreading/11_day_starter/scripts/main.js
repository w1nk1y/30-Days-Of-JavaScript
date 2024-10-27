//Easy LVL

//1
const constants = [2.72, 3.14, 9.81, 37, 100];
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

console.log(e); 
console.log(pi); 
console.log(gravity); 
console.log(humanBodyTemp); 
console.log(waterBoilingTemp); 

//2
const Countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const [fin, est, sw, den, nor] = Countries;

console.log(fin); 
console.log(est); 
console.log(sw); 
console.log(den); 
console.log(nor); 

//3
const rectangle={
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
};
  
const {width, height, area, perimeter} = rectangle;
  
console.log(width); 
console.log(height); 
console.log(area); 
console.log(perimeter);

//Middle LVL

//1
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
    ];

users.forEach(user => {
    const {name,scores,skills,age} = user;
    console.log(`Name: ${name}, Scores: ${scores}, Skills: ${skills.join(', ')}, Age: ${age}`);
});

//2
const lessTwo = users.filter(user => user.skills.length<2);
console.log(lessTwo);