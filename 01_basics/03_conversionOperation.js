let score = "33abc" 

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber)

/*
"33" => 33
"33abc" => NaN
true => 1 , false => 0
*/

let isLoggedin = 1
let booleanIsLoggedin = Boolean(isLoggedin)
// console.log(booleanIsLoggedin);

/*
1 => true ; 0 => false
"" => false
"dev" => true 
*/
 
let someNumber = 33
let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);


// **************************** Operations ***************************************

let value = 3
let negValue = -value 

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "dev"
let str2 = " kishan"
let str3 = str1+str2

// console.log(str3);

// console.log("1" + 2) // 12
// console.log(1 + "2") // 12
// console.log("1" + 2 + 2) // 122
// console.log(1 + 2 + "2") // 32


// console.log((3 + 4) * 5 % 3)


// console.log(+true) // 1
// // console.log(true+) // error
// console.log(+"") // 0

let num1, num2, num3

num1 = num2 = num3 = 2+2

let game = 100 
game++
console.log(game)
++game
console.log(game);
