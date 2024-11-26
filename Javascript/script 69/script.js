let a = 8;

function factorial(number){
    let array = Array.from(Array(number+1).keys())
    let c = array.slice(1,).reduce((a, b)=> {
    return  a*b 
})
   return c
}


function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    
    }
    return fac
}
console.log(factorial(a));
console.log(facFor(a));