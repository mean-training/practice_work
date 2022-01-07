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


let styles = ["Jazz","Blues"];
styles  .push("Rock-n-Roll");
styles[Math.floor(styles.length - 1) / 2] = "Classics";
styles.shift();
styles.push("Rap","Raggie");
console.log(styles);

function sumInput(){
    let input = [];
    let sum   = 0;
    while(true){
        let value = prompt('Enter a number : ', 0);
        if(value === '' || value === 'undefined' || !isFinite(value)) break;
        input.push(+value);
    }
    console.log(input);
    for(let x of input){
        sum += x;
    }
    console.log(sum);
}
sumInput();

function getMaxSubSum(array){
    let total_sum = 0;
    let partial_sum = 0;

    for(let num of array){
        partial_sum += num;
        total_sum = Math.max(total_sum,partial_sum);
        if(partial_sum < 0) partial_sum = 0;
    }
    return total_sum;
}
console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));

function filterRangeInPlace(arr,a,b){
    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        if(num < a || num > b){
            arr.splice(i,1);
            i--;
        }
    }
    console.log(arr);
}
filterRangeInPlace([1,2,18,5,12],10,20);

function copySorted(arr){
    return arr.slice().sort();
}

let lang   = ["Javascript","HTML","CSS"];
let sorted = copySorted(lang);

console.log(lang);
console.log(sorted);

