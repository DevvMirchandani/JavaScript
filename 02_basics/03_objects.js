// singleton 
// Object.create


// object literals 

const mysym = Symbol("Key1") // Declaration of symbol

const JsUser = {
    name: "DevKishan",
    [mysym]: "myKey1",  // adding symbol to objects
    "Full Name": "Dev Kishan Mirchandani",
    age: 21,
    location: "Ajmer",
    email: "Dev.google.com",
    isLoggedIn: false,
    lastLoggedIn: ["monday" , "saturday"]
}

console.log(JsUser.name)
console.log(JsUser["name"])
// console.log(JsUser.Full Name) // not to use dot acces because if key is itself written in string with *spaces*, it wil not get accessed
console.log(JsUser["Full Name"])

console.log(JsUser[mysym])

JsUser.email= "dev123@gmail.com"
// Object.freeze(JsUser) // after this user cannot make changes in an object
JsUser.email= "dev123@yahooo.com"
console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS User..")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`) // Note : there is difference in ' and ` 
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
