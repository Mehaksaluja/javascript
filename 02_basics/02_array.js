// const marvel_heroes = ["thor","ironman","spiderman"];
// const dc_heroes = ["shaktiman" , "hanumanji" , "batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

// const allNewHeroes = [...marvel_heroes,...dc_heroes];
// console.log(allNewHeroes);

const another_array = [ 1 , 2 , 3 , [ 4 , 5 , 6 ] ,7 , [8 , 9]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("mehak"));
console.log(Array.from("mehak"));
console.log(Array.from({name: "mehak"})); //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

