let name = "john doe";
console.log(`hello ${1}`);
console.log(`hello ${"name"}`);
console.log(`hello ${name}`);

//Arithmetic opeartors
let x = 2;
let y = 5;

console.log('x + y = ', x + y);  
console.log('x - y = ', x - y);  
console.log('x * y = ', x * y);  
console.log('x / y = ', x / y);  
console.log('x % y = ', x % y);   
console.log('++x = ', ++x); 
console.log('x++ = ', x++); 
console.log('x = ', x);    
console.log('--x = ', --x); 
console.log('x-- = ', x--); 
console.log('x = ', x);     
console.log('x ** y =', x ** y);

// Prefix and Postfix 
let n1 = 1;
let n2 = x++;
let n3 = ++x;
console.log('Postfix');
console.log(n2);
console.log('Prefix');
console.log(n3);


// if else statements
let official_name = prompt("What is the official name of javascript",'');
if(official_name ==  'ECMAScript'){
    console.log('You are right');
}else{
    console.log("You don't know ECMAScript");
}

let number = prompt('Enter a number', '');
if(number > 0){
    console.log(1);
}else if(number < 0){
    console.log(-1);
}else if(number == 0){
    console.log(0);
}


// Use of ternary operators
let result ;
result = (5 < 4) ? 'Below' : 'Over';
console.log(result);

let login = 'Employee';
let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No Login' : '';
console.log(message);

// Labels for break/continue
output : for(let i=0;i<3;i++){
    for(let j=0; j<3 ; j++){
        let input = prompt(`Value at coordinates ${i}${j} ?`, '');
        if(!input) break output;
    }
}
console.log('Done');

// Do While Loop
let num;
do {
  num = prompt("Enter a number greater than 100?", 0);
  console.log(num);
} while (num <= 100 && num);

// For loop 
let a = 0;
for(;a < 3; a++){
    console.log(a);
}

let limit = 10;
prime : for(let i = 2; i < limit; i++){
    for(let j = 2; j < i; j++){
        if(i % j == 0) continue prime;
    }
    console.log('Prime Number: ' + i);
}

// Switch statement
let test_num = +prompt('a?', '');

switch (test_num) {
  case 0:
    console.log(0);
    break;

  case 1:
    console.log(1);
    break;

  case 2:
  case 3:
    console.log('2,3');
    break;
}