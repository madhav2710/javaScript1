const score =400
console.log(score);

const balance = new Number(100.5);
console.log(balance); // [Number: 100.5]

console.log(balance.toString().length); // '100.5'
console.log(balance.toFixed(2)); // '100.50' here 2 is the decimal places;

const num1=123.8966;
console.log(num1.toPrecision(3));//here it will return in string format;
console.log(num1.toExponential(2)); // '1.24e+2' here 2 is the decimal places;

const num2=100000000;
console.log(num2.toLocaleString()); // '100,000,000' here it will return in string format with comma;
console.log(num2.toLocaleString('en-IN')); // '10,00,00,000' here it will return in string format with comma in Indian format;
console.log(num2.toLocaleString('en-US')); // '100,000,000' here it will return in string format with comma in US format;


//////////////////////Maths//////////////


console.log(Math);
console.log(Math.abs(-5)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.8)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 10); // random number between 0 and 10
console.log(Math.random() * 10 + 1); // random number between 1 and 10;

const min =10;
const max =20;
console.log(Math.floor(Math.random()*(max-min+1))+min);
// random number between 10 and 20;