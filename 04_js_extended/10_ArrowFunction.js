function normalFunction(){
    console.log("Normal Function");
}

let arrowFunction = () => {
     console.log("Arrow Function");
}

let shorterArrowFunction = () => console.log("Shorter Arrow Function");
normalFunction();
arrowFunction();
shorterArrowFunction();


function add(a, b){
    return a + b;
}
let addArrow = (a, b) => a + b;

console.log(add(-1, 7), addArrow(5, 2));

function isPositive(number){
    return number >= 0;
}
let isPositiveArrow = number => number >= 0;
console.log(isPositive(5), isPositiveArrow(-5));

function randomNumber(){
    return Math.random();
}
let randomArrowNumber = () => Math.random();
console.log(randomNumber());
/*
document.getElementById("btn").addEventListener("click", function () {
    console.log("Button Clicked");
});
document.getElementById("btn").addEventListener("click", () => console.log("Button Clicked"));  
*/
class Person {
    constructor(name){
        this.name = name;
    }
    printNameArrow(){
         
        setTimeout(() => {
            console.log("Arrow: " + this.name);
        }, 10);
    }
    printNameFunction(){
        setTimeout(function(){
            console.log("Function: " + this.name);
        }, 10);
    }
}
let person = new Person("Alice");
person.printNameFunction();
person.printNameArrow();