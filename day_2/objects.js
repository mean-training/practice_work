let user = {
    name : "John",
    age  : "18"
}
let key = prompt('What you want to know about user?', '');
console.log(user[key]);

var greet = {
    first_name : "John",
    last_name  : "Doe",
    full_name : function(){
        return this.first_name + ' ' + this.last_name; 
    },
    greetings : (message, name) => {
        console.log(message + " " + name);
    }  
}

console.log(greet.full_name());
greet.greetings('Good Morning', greet.full_name());

// Computed Properties
let fruit  = prompt("Enter the fruit","");
let amount = prompt("Enter the amount","");

let bag = {
    [fruit] : amount
};
console.log(bag);
console.log(bag[fruit]);

console.log("name" in  user);
console.log("greetings" in user);

let user_detail = {
    first_name : 'John',
    last_name  : 'Doe',
    age        : 18
}
for(let prop in user_detail){
    console.log(prop);
    console.log(user_detail[prop]);
}

let user = {
    name : 'John',
    surname : 'Smith',
}
user.name = 'Pete';
console.log(user);
delete user.name;
console.log(user);


function isEmpty(obj){
    for(let key in obj){
        return false;
    }
    return true;
}
let schedule = {
    "8:30" : "Get Up"
};
console.log(isEmpty(schedule));

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumSalaries(salaries){
    let sum = 0;
    for(let prop in salaries){
        sum += salaries[prop]
    } 
    return sum;
}
console.log(sumSalaries(salaries));

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNummericOnly(menu);

function multiplyNummericOnly(object){
    let total = '';
    for(let prop in object){
        if(typeof object[prop] == 'number'){
            total = object[prop] * 2;
            console.log(total);
        }
    }
}

// Object references and copying
let employee = {
    name : "John",
    surname : "Doe",
    sizes   : {
        width   : 182,
        height : 50
    }
}
let admin = employee;
admin.name = 'Pete';
console.log(employee);
console.log(admin);

let permission1 = {canView   : true};
let permission2 = {canUpdate : true};

Object.assign(employee,permission1,permission2);
console.log(employee);

let clone = Object.assign({}, employee);
console.log(clone);


// call() and apply()
const person3 = {
    fullName : function(){
        return this.first_name + ' ' + this.last_name;
    }
}

const person4 = {
    first_name : 'John',
    last_name : 'Doe'
}
let m = person3.fullName.call(person4);
console.log(m);

let user = {name : 'user'};
let admin1 = {name : 'admin'};

function sayHello(){
    console.log(this.name);
}

user.greeting = sayHello;
admin1.greeting = sayHello;

user.greeting();
admin1.greeting();


let another_user = {
    f_name : 'ilya',
    sayHi(){
        let arrow = () => console.log(this.f_name);
        arrow();
    }
}
another_user.sayHi();


let ladder = {
    step : 0,
    stepup(){
        this.step++;
        return this;
    },
    stepdown(){
        this.step--;
        return this;
    },
    showstep(){
        console.log(this.step);
        return this;
    }
}
ladder.stepup().stepup().stepdown().showstep();