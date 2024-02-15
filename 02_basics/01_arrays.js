//array

const myArray = [0 , 1, 2 ,3 , 4];
const myHeroes = ["shaktiman" , "captain america"];

//arrays methods

// myArray.push(3);//add 3 at last 
// console.log(myArray);
// // myArray.pop(); remove the last element of array

// myArray.unshift(9);//add the 9 at starting
// myArray.shift();//remove first element of array

// console.log(myArray);

// console.log(myArray.includes(9));//check if array includes 9 or not
// console.log(myArray.indexOf(4));

// const newArray = myArray.join();
// console.log(typeof newArray);

// console.log(myArray);


//slice , splice

console.log("A " , myArray);

const myn1 = myArray.slice(1,3);

console.log(myn1);
console.log("B ",myArray);

const myn2 = myArray.splice(1,3);
console.log("C" , myArray);
console.log(myn2);

