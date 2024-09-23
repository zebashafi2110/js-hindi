const score = 400
// console.log(score);

const balance = new Number  (100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++____MATHS___+++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //convert to negtiv value to positive
// console.log(Math.round(4.6));//find out round figer value
// console.log(Math.ceil(4.2));//find highest value
// console.log(Math.floor(4.9));//find lowest value
// console.log(Math.min(3,4,5,6));
// console.log(Math.max(3,4,6,7));

console.log(Math.random()); //its give value always 0 to 1
console.log((Math.random()*10) + 1); // here we are shifting from 10
console.log(Math.floor(Math.random()*10) + 1); // but some time floor give less num thats why we set the value range +1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max -min +1)) + min); 
// some cases we define min and max value thats why we used max-min+1 to avoid 0 case and find a rang  so i decided to min value so i added +min value
