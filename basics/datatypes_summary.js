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


// ********************************************************

//stack (primitive) , heap(non-proimitive)

let myYoutubename = "radhnagamer";
let anothername = myYoutubename;
anothername ="radhnacoder";
console.log(anothername);

let userone = {
  email : "user@google.com",
  upi : "user@ybl",
}

let userTwo = userone ;

userTwo.email = "mehak@gmail.com"

console.log(userone.email);
console.log(userTwo.email);