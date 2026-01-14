const user = {
    username: "Devkishan",
    price: 999, 

    welcomeMessage: function(){
        console.log(`${this.username} , welcomme to our website.`)    // this keyword refers to current values ( for the value which can be changed )
        console.log(this)
    }
}


user.welcomeMessage()
user.username = "Ronaldo"
user.welcomeMessage()

console.log(this)


// function chai(){
//     let username = "Dev"
//     console.log(this.username)                           // 'this' function works properly in objects but not in functions                     
// }
// chai()
 
                                                        
// const chai = function() {
//     let username = "Dev"
//     console.log(this.username)
// }
// chai()

// arrow function

const chai = () => {
    let username = "Dev"
    console.log(this.username)
}
// chai() 

const addTwo = (num1 , num2) => {
    return num1 + num2                         
} 

/* NOTE : When written in {} (Eplicit return) , return keyword is must , but when code is of only one line ,
  we can write the code without {} and the code will work without return keyword (Implicit return) */

// const addTwo = (num1 , num2) => num1 + num2
// const addTwo = (num1 , num2) => (num1 + num2) 

// const addTwo = (num1 , num2) => ({username: "Dev"})     // to use object in implicit return we have to wrap the objects in ()


console.log(addTwo(3,4))