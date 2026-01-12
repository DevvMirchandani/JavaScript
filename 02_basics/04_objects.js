// const tinderUser = new Object () // by declaring it like this(like we declare constructor), it just make it singleton 
const tinderUser = {} // non singleton


tinderUser.id = "123abc"
tinderUser.name = "rocky"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "dev123@gmail.com",
    fullName: {
        UserFullName: {
            FirstName: "Dev",
            MiddleName: "Kishan",
            LastName: "Mirchandani"
        }
    }
}

console.log(regularUser.fullName)
console.log(regularUser.fullName.UserFullName)
console.log(regularUser.fullName.UserFullName.FirstName)


const Obj1 = {1: "a", 2: "b"}
const Obj2 = {3: "a", 4: "b"}

// const Obj3 = {Obj1 , Obj2}
// const Obj3 = Object.assign({} , Obj1, Obj2) // empty bracket is target and obj1 nd obj2 are the sources , all the values will go in empty bracket instead of obj1

const Obj3 = {...Obj1, ...Obj2}
console.log(Obj3)  

const user = [
    {
        id : 1,
        email: "abc@gmail.com"
    },
    {
        id : 2,
        email: "abc@gmail.com"
    },
    {
        id : 3,
        email: "abc@gmail.com"
    },
]

user[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))