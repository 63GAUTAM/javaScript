console.log("Gautam");

let Gautamsurolia = document.getElementsByClassName("box")
console.log(Gautamsurolia)

Gautamsurolia[2].style.backgroundColor = "black"

document.getElementById("blackbox").style.backgroundColor = "black "

// document.querySelector(".box").style.backgroundColor = "green"
// console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green"
})
