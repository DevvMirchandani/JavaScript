function sayMyName(){

console.log("D")
console.log("e")
console.log("v")

}

sayMyName()

function addtwoNumbers(num1 , num2){
    // let result = num1 + num2
    // return result
    return num1 + num2

}

const result = addtwoNumbers(3,5)
console.log("result is: " ,result)

function loginUsermessage (username = "Dev"){
    if(!username){
        console.log("Please enter username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUsermessage("DevKishan"));
console.log(loginUsermessage("DevKishan")); 


function calculateCartPrice(val1, val2, ...num1) {             // ... is spread and rest operator , usecase define is it rest or spread 
    return num1
}

console.log(calculateCartPrice(200, 400, 800, 1200)) 

const user = {
    username: "Dev",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject(
    {
        username: "sam",
        price: 399
    }
)

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[2]
} 

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100, 200, 300, 400]))
