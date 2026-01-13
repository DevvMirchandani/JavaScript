// {} these when used in if else,function or loops are called scopes
// inside {} is called block scope , outside {} is called global scope 
// if values decalared in {} scopes should not be carry forward outside the block scope  

// var can be accessed outside of the scope , where as let and const don't
// var c = 300

let a = 300
if(true){
    let a = 10
    const b = 20 
    console.log("INNER: ", a)
}

// console.log(a)
// console.log(b)
// console.log(c)

// global scope in browser inspect and in nodejs on editor is different.

function one() {
    const username = "Dev"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)    // it will give an error because child function can access parents function arguements but parent function can't

    two()

} 
one()


if (true) {
    const username = "Dev"

    if (true) {
        const website = " youtube"
        console.log(username + website)
    }

    // console.log(website)   // error
}
// console.log(username)    // error


// ++++++++++++++++++++++++++++++ insteresting ++++++++++++++++++++++++++++++++
// accessing func values in two ways 


console.log(addOne(5))         // accessing value before intializing , it will work in this way
function addOne(num){          
    return num + 1
}


console.log(addTwo(6))         // by this way which is storing a function into variable , we cannot access it before intializing 
const addTwo = function(num){   
    return num + 2
}
