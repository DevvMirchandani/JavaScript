/*
        Array     ---------->
        String    ---------->  Object  ----------> null
        Function  ---------->
*/


// let myName = "Devkishan       "

// console.log(myName.trim().length)
// console.log(myName.truelength())


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()     // as this method is created for array prototype it will not work for object, note: method cerated for oject will work for every object


// Inheritance using prototype

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax

let anotherUsername = "ChaiAurCode       "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);  
}

anotherUsername.truelength()
"Devkishan".truelength()
"IceTea".truelength()


