// Function Declaration
function printPrimeNumber(){
    let number = 10;
    nextPrime: for(let i = 2; i < number; i++){
        if(!isPrime(i)) continue nextPrime;
        console.log(`Prime Number: ${i}`);
    }
}

function isPrime(number){
    let response;
    for(let j = 2; j < number; j++){
        response = (number % j == 0) ? false : true;
        return response;
    }
}
printPrimeNumber();

function min(a,b){
    number = (a < b) ? a : b;
    return number;
}
console.log(min(-1,2));
console.log(min(2,0));

// Function Expression
let greeting = function(){
    console.log('function expression');
}
greeting();

let fun = greeting;
fun();

// Callback Function (callback is a function pass as an argument to another function)

function askSomething(query, positive, negative){
    let something = confirm(query);
    (something) ? positive() :  negative();
}

function positiveCase(){
    console.log('Posituve case');
}

function negativeCase(){
    console.log('Negative Case');
}

askSomething('Do you find something intresting', positiveCase, negativeCase);

// Arrow Functions
let sum = (a,b) =>  a + b;
console.log(sum(10,20));

let double = n => n * 2;
console.log(double(5));

let greet = () => console.log('Welcome');
greet();

function askSomething(query,positive,negative){
    let something = confirm(query);
    (something) ? positive() : negative();
}
askSomething('Do you find something intresting',
() => console.log('Positive one'),
() => console.log('Negative one')
)
