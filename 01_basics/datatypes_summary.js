// primitive data types

// types - 7 => undefined, null, boolean, number, string, bigint, symbol

const score = 100; // number
const scoreValue = 100.5; // number
const isLoggedIn = false; // boolean
const outsideTemp = null; // null
let userEmail; // undefined


const id = Symbol("123"); // symbol
const anaotherId = Symbol("123"); // symbol
const bigNumber = 3456789012345678901234567890n; // bigint

console.log(id === anaotherId); // false

// reference/non-primitve data types - objects
// Arras, objects, functions

const heros = ["shaktiman", "naagraj", "doga"];


let myObj = {
  name: "dev",
  age: 21,
};


const myFunc = function () {
  console.log("hello world");
}

console.log(typeof bigNumber);

/* 

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

