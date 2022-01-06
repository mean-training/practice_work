let x = '123';
console.log(typeof x);
console.log(x.toString());
console.log(typeof x);

let y = 0.001658853;
console.log(y.toExponential(2));
console.log(y.toExponential(4));
console.log(y.toExponential());

console.log('To Fixed' + ' ' + y.toFixed(2));
console.log('To Fixed' + ' ' + y.toFixed(4));
console.log('To Fixed' + ' ' + y.toFixed(6));


console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"));
console.log(Number(new Date("2017-09-30")));

console.log('Parse Int ' + parseInt("-10"));
console.log('Parse Int ' + parseInt("-10.33"));
console.log('Parse Int ' + parseInt("10"));
console.log('Parse Int ' + parseInt("10.33"));
console.log('Parse Int ' + parseInt("10 20 30"));
console.log('Parse Int ' + parseInt("10 years"));
console.log('Parse Int ' + parseInt("years 10"));


console.log('Parse Float ' + parseFloat("10"));
console.log('Parse Float ' + parseFloat("10.33"));
console.log('Parse Float ' + parseFloat("10 20 30"));
console.log('Parse Float ' + parseFloat("10 years"));
console.log('Parse Float ' + parseFloat("years 10"));


console.log('To Precision' + ' ' + y.toPrecision(2));
console.log('To Precision' + ' ' + y.toPrecision(4));
console.log('To Precision' + ' ' + y.toPrecision(6));

console.log('Max Largest # ' + Number.MAX_VALUE);
console.log('Lowest Possible  # ' + Number.MIN_VALUE);

console.log(x.MAX_VALUE);

console.log('Positive infinity ' + Number.POSITIVE_INFINITY);
console.log('negative infinity  ' + Number.NEGATIVE_INFINITY);

let infinity = -1 / 0;
console.log(infinity);

console.log(x.constructor);

Number.prototype.myMethod = function(){
    return this.valueOf() / 2;
}

let n = 550000;
console.log('Prototype ' + n.myMethod());
console.log('Local language format ' + n.toLocaleString());