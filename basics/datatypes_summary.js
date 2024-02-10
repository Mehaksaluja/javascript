// #primitive dataypes 

// 7 types : string , number , boolean , null , undefined , symbol , BigInt 

const score = 100 ;
const scorevalue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id === anotherId);

// const bigNumber = 345678920890n;

//Reference (non - primite)

// Arrays , Objects , Functions   

const heroes = ["shaktiman" , "naagraj" , "doga"];
let myObj = {
  name :"mehak",
  age : 22,
}

const myFunction = function(){
  console.log("hello world");
}

console.log(typeof bigInt);
console.log(typeof outsideTemp);