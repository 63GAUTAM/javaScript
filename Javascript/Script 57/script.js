console.log("Hello Gautam surolia");

// let a = 1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);

a = 1;
for (let i = 0; i < 10; i++) {
    console.log(a+i);    
}

let obj = {
    name: "Gautam surolia",
    role: "Programmer",
    company: "Koni"
}

for (const key in obj) {
     {
        const element = obj[key];
        console.log(key, element);
        
    }
}

// for (const c of "Gautam") {
//     console.log(c);
// }

// let i= 1;

// while(i<10){
//     console.log(i);
//     i++;
// }


let i= 1;

do {
    console.log(i);
} while (i<10);
