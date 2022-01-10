var date = new Date();
console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());


//getter and setters
let user = {
    firstname: 'John',
    lastname: 'doe',
}

const myPromise = new Promise(function(resolve,reject){
    setTimeout(() => resolve("Waiting to execute"));
},5000);

myPromise.then(function(value){
    console.log(value);
});