// Dates

let myDate = new Date()
console.log(myDate.toString()) // Mon Jan 12 2026 12:50:49 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()) // Mon Jan 12 2026
console.log(myDate.toLocaleDateString()) // 1/12/2026
console.log(myDate.toISOString()) // 2026-01-12T12:50:49.964Z
console.log(myDate.toJSON()) // 2026-01-12T12:50:49.964Z


console.log(typeof myDate) // object

let myCreatedDate = new Date(2026, 0 , 22)
console.log(myCreatedDate.toDateString())
let myNewCreatedDate = new Date("01-12-2026")
console.log(myCreatedDate.toLocaleDateString())


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay()) 

// '${newDate.getDay()}and the time is ' 

newDate.toLocaleDateString('default',{
    weekday: "long"
})