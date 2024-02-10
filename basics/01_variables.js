const accountId = 144913
let accountEmail = "mehaksaluja13@gmail.com";
var accountPassword = "1234";
accountCity = "jaipur";

// accountId = 2   //not allowed
accountEmail = "mehak@gmail.com";
accountCity = "haryana";
console.log(accountId);
accountPassword = "4321";

/* preffered not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity]);