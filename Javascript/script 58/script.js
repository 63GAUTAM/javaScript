
function good(name) {
    console.log(" " + name + " is not a good guy !");
    console.log(" " + name + " is  a good guy !");
    console.log(" " + name + " is not a responsiable !");

}

good("Gautam");

good("Gautam surolia")


function sum(a, b, c = 10) {
    // console.log(a+b);
    console.log(a, b, c)
    return a + b + c
}

result = sum(10, 2)
result2 = sum(15, 5)
result3 = sum(1, 5)

console.log("The sum of these numbers is: ", result)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)


const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(56)
func1(34)
func1(25)