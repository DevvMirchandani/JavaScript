const userEmail = []

if (userEmail) {
    console.log("Got user Email.")
} else {
    console.log("Don't have user Email")
}


// falsy values
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy values
// "0" , 'false' , " " , [] , {} , function(){} , 


if (userEmail.length === 0) {
    console.log("Array is empty")      // to check array is empty or not 
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Array is empty")      // to check object is empty or not 
}


// Nullish Coalescing Operator (??): null undefiend 

let val1; 
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 50


console.log(val1)


// Terniary operator 
// condition ? true : false

const iceTeaprice = 100
iceTeaprice <= 80 ? console.log("less than 80") : console.log("more than 80");