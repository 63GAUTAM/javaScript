let arr = [1, 12, 5, 24];

/* This is use to square of any number */

// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   newArr.push(element**2)
// }

/* Aasan Tarika to find the square */

let newArr = arr.map((e, index, array) => {
    return e ** 2
})

console.log(newArr);

const greaterThenSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThenSeven))

let arr2 = [1, 2, 3,4,5]

const red = (a,b)=>
{
    return a*b
}

console.log(arr2.reduce(red))

Array.from("Gautam");