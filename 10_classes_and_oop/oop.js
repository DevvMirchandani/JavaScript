const user = {
    username: "Dev",
    loginCount: 7,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

// Constructor --> new keyword is used , if not used - the new use of functiton will overwrite the old one 

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function(){
        console.log(`Welcome: ${this.username}`)
    }
}

const userOne = new User("Dev", 7, true)
const userTwo = new User("Ronaldo", 7, false)  
console.log(userOne.constructor)
// console.log(userOne)
// console.log(userTwo)

// when new keyword is written , 
// 1. the new object is created
// 2. consructor function is called because of new keyword, and wrap all the arguments in that and return it 
// 3. arguments are injected in this keyword 
// 4. returns all the value in function