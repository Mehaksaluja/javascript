const name = "mehak";
const repoCount = 1;

// console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('granny');
// console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "  mehak   ";
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://mewhak.com/mehak@20%saluja";
console.log(url.replace('20%','-'));

console.log(url.includes('sundar'));