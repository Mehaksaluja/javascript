// singleton 

//object literals 

const mySym = Symbol("key1");
const jsUser = {
  name: "mehak",
  age : 18 ,
  location: "haryana",
  email : "mehaksaluja13@gmail.com",
  [mySym] : "myKey1",
  isLoggedIn : false,
  lastLoginDays : ["Monday" , "Saaturday"],
};
console.log(jsUser);
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mySym]);

jsUser.email = "mehak12@gmail.com";
// Object.freeze(jsUser); //we connot change jsUser after this
jsUser.email = "mehak8@gmail.com";

console.log(jsUser.email);

jsUser.greeting = function(){
  console.log("hello js user");
}

console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
  console.log(`hello js user , ${this.name}`);
}

console.log(jsUser.greetingTwo());

