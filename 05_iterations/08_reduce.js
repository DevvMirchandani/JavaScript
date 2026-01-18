const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc , currval) {
//     console.log(`acc: is ${acc} and currval is ${currval}`)
//     return acc + currval
// },0 )                           // this 0 is for accumulator , whichever value will be placed here that will be the initial value of acc.


// const myTotal = myNums.reduce( (acc, currval) => acc + currval ,0)

// console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const cartTotal = shoppingCart.reduce( (acc, item) => acc + item.price ,0 );
console.log(cartTotal)
