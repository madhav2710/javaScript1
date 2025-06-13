// let score ="100abc";/
let score =null;
let ScoreStringtoNumber=Number(score);
let ScoreStringtoBoolean=Boolean(score);
console.log(typeof score);//null is object type;
console.log(typeof ScoreStringtoNumber);
console.log(ScoreStringtoNumber);//it will Show NaN (Not a Number) because "100abc" 
// cannot be converted to a number.
console.log(ScoreStringtoBoolean);
console.log(typeof ScoreStringtoBoolean);
// when there is "" as input then it will be false in case of boolean conversion;
// *****Operations*****
let value=3;
let negativeValue=-value;
console.log(negativeValue); // -3
console.log(2**3);//2pwr3;
let str1="100";
let str2="200";
let str3=str1+str2; // Concatenation;
console.log(str3); // "100200"


// --------
console.log("1"+ 2 + 3);
// "123" because the first operation is string concatenation;
console.log(1 + 2 + "3");
// "33" because the first two operations are numeric addition;
console.log(+true); // 1
// console.log(true+); // 0error



