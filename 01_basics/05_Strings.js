const name ="madhav";
const repo=2;
// console.log(name+repo+"value"); // madhav2value
console.log(`Hello, my name is ${name} and I have ${repo} repositories.`);
/////////////////////////////
const gameName= new String("CallD-uty");
console.log(gameName[0]); // C
console.log(gameName.length); // 8
console.log(gameName.toUpperCase()); // CALLDUTY
console.log(gameName.toLowerCase()); // callduty
console.log(gameName.__proto__); // String.prototype
console.log(gameName.charAt(0)); // C
console.log(gameName.indexOf("Duty")); // 4

const newStriing =gameName.substring(0, 4);
console.log(newStriing); // Call

const newString2 = gameName.slice(-8, 4);
console.log(newString2); 

const newstring3 ="    hp ";
console.log(newstring3.trim());

const url="https://hp.com/hp%20p";
console.log(url.replace('%20','-'));
console.log(url.includes('hp'));

console.log(gameName.split('-')); // [ 'CallD', 'uty' ]



