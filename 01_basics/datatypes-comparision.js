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
// ******;

// Stack memory and Heap memory
// Stack memory is used for primitive types 
// and function calls
// Heap memory is used for reference types 
// like objects, arrays, and functions

let user1="m@empl.com";
let user2= user1;
user2="jp@exmpl.com";
console.log(user1); //
console.log(user2); //
// here as user1 is a primitive type,
// it is stored in stack memory and user2 is a copy of user1
// so changing user2 does not affect user1

let user3={
    name:"mj",
    email:"m@jmpl.com"
};
let user4=user3;
user4.email="js@gml.com";
console.log(user3.email); //// here user3 is a reference type,
// so user4 is a reference to user3
// changing user4 affects user3