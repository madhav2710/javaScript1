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