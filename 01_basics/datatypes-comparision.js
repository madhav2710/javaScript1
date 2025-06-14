// Primitive types
// string ,number, boolean, null, undefined, symbol, bigint
// 
const a = Symbol(10);
const b = Symbol(20);
console.log(a === b); // false, as symbols are unique
// reference types
// object, array, function
const array=["mj","sj","kj"];
let obj={
    name:"mj",
    age:20
}
const myFunction = function() {
    console.log("Hello, World!");
}