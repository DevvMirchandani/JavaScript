const name = " dev"
const repocount = 0

console.log(repocount + name + " !")

console.log(`hello my name is ${name} and my repo count is ${repocount} !`)

const gameName = new String("DevMirchandani")

console.log(gameName[0])  // D
console.log(gameName.__proto__)  // {}

console.log(gameName.length) // 14
console.log(gameName.toUpperCase()) // DEVMIRCHANDANI
console.log(gameName.toLowerCase()) // devmirchandani
console.log(gameName.charAt(2)) // v
console.log(gameName.indexOf("v")) // 2


const newString = gameName.substring(0,2) // cannot use negative index , if used it will ignore it
console.log(newString) // De  , does not include the char at index 2

const anotherString = gameName.slice(-14, 2) // negative index starts from end of string
console.log(anotherString) // De  , does not include the char at index 2

const newStringOne =  "    DevMirchandani    "
console.log(newStringOne)
console.log(newStringOne.trim()) // removes spaces from start and end

const url = "https://dev.com/dev%20mirchandani"
console.log(url.replace("%20","-")) // https://dev.com/dev-mirchandani

console.log(url.includes("dev"))  // true
console.log(url.includes("Dev"))  // false , case sensitive 

const game = " playstation-4-5 "
console.log(game.split("-")) // [ ' playstation', '4', '5 ' ]





