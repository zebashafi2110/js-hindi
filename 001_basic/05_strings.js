const name = "zeba"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('zeba-shafi-com')

console.log(gameName[0]);
console.log(gameName._proto_);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.toLowerCase());
// console.log(gameName.startsWith());
//console.log(gameName.charAt('3'));
// console.log(gameName.indexOf('e'));

const newString = gameName.substring(0, 3)
console.log(newString);


const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "    zeba  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));

console.log(gameName.split('ze'));
console.log(gameName.bold());
