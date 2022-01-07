const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const children = arr1.concat(arr2,arr3);
console.log(children);
console.log(children.constructor);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log(fruits);
console.log(fruits.entries());

const ages = [32, 33, 16, 40];
ages.every(checkAge);

function checkAge(age){
    console.log(age > 18);
    return age > 18;
}

const fruits_1 = ["Banana", "Orange", "Apple", "Mango"];
fruits_1.fill("Kiwi");
console.log(fruits_1);
fruits_1.fill('kiwi',2,4);
console.log(fruits_1);

const ages_1 = [32, 33, 16, 40];
const res    = ages_1.filter(checkAge);
function checkAge(age){
    return age >= 18;
} 
console.log(res);

const find = ages_1.find(findAge);
console.log(find);
function findAge(age){
    return age == 18;
}

const findIndex = ages_1.findIndex(findAge);
console.log('Find Index');
console.log(findIndex);

fruits.forEach(iterateArray);
function iterateArray(item, index){
    console.log(index + ' : '  + item);
}

let text = 'ABCDEF';
let my_array = Array.from(text);
console.log(my_array);

console.log("Includes function  ");
console.log(fruits_1.includes("Kiwi"));

console.log(fruits);
console.log("Index Of : " + fruits.indexOf('Mango'));
console.log("Index Of : " + fruits.indexOf('Mango',2));

let string = "Test text";
console.log('Is Array : ' + Array.isArray(fruits));
console.log('Is Array : ' + Array.isArray(string));

console.log("Join: " + fruits.join());

const myArr = ["Banana", "Orange", "Apple", "Mango"];
let keys = Object.keys(myArr);
let text1 = "";
for(let x in keys){
    text1 += x + " ";
}
console.log(text1);