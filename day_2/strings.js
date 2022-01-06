let char = 'Hello World';
console.log(char.charAt(1));
console.log(char.charAt(char.length -1));

console.log(char.charCodeAt(1));
console.log(char.charCodeAt(char.length -1));

let text1 = 'hello';
let text2 = 'world';
let text3 = 'have a nice day';

console.log(text1.concat(' ' + text2 + ' ' + text3));

console.log(text3.endsWith('day'));
console.log(text3.endsWith('day', 2));

let text = String.fromCharCode(72, 69, 76, 76, 79);
console.log(text);

console.log(text3.includes('nice'));
console.log(text3.includes('nice',7));

console.log(text3.indexOf('d'));
console.log(text3.indexOf('z'));
console.log(text3.indexOf('nice'));

let text4 = "Hello planet earth, you are a great planet.";
console.log(text4.lastIndexOf('planet'));

console.log(text4.length);

let string1 = 'ab';
let string2 = 'cd';
console.log(string1.localeCompare(string2));

let string3 = 'A';
let string4 = 'a';
console.log(string3.localeCompare(string4));

let string5 = "The rain in SPAIN stays mainly in the plain";
console.log(string5.match("ain"));
console.log(string5.match(/ain/g));
console.log(string5.match(/ain/));
console.log(string5.match(/ain/gi));


function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.eyeColor = eyecolor;
    return this;
}
  
Person.prototype.nationality = "English";
let person1 = new Person('John','Doe',18,'grey');

console.log(person1);

console.log(char.repeat(2));
console.log(char.repeat(4));

let string6 = "Visit Microsoft";
let result  = string6.replace('Microsoft','W3 Schools');
console.log(result);

let string7 =  "Mr Blue has a blue house and a blue car";
let final   = string7.replace(/blue/g,"red");
console.log(final);

console.log(string7.search('blue'));
console.log(string7.search(/blue/g));

console.log(string7.slice(0,24));
console.log(string7.slice(24));
console.log(string7.slice(-1));

console.log(string7.split(" "));
console.log(string7.split());
console.log(string7.split('',3));

console.log(string7.startsWith('Hello'));
console.log(string7.substr('3',15));
console.log(string7.substring('3',15));

