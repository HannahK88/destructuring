// Object destructuring

// Objects
const mySuitcase = { clothes: "jeans" };
const { clothes } = mySuitcase;
console.log(clothes);

//Arrays
const lovers = ["Dane", "Hannah"];
const [lover1, lover2] = lovers;
console.log(lover1);
console.log(lover2);

// Renaming
const pets = { cat: "Volte", fish: "Rambo" };
const { cat: sphynxCat } = pets;
const { fish: uglyFish } = pets;
console.log(sphynxCat);
console.log(uglyFish);

// Default values
const stats = { attack: 100 };
const { attack, defense } = stats;
console.log(attack);
console.log(defense);

const babyNames = { girl: "Bonquisha" };
const { girl = "Default name", boy = "Duna bruv" } = babyNames;
console.log(girl);
console.log(boy);

// Nested destructuring
const sister = { firstName: "Megan", age: 31, kidCount: { girl: 2, boy: 1 } };
const {
  kidCount: { girl: girlCount },
} = sister;
console.log(girlCount);

// with function parameters
const cars = { dad: "Porsche", mum: "Skoda", hannah: "VW" };
const logMumCar = (carObject) => {
  const { mum } = carObject;
  console.log(mum);
};
logMumCar(cars);

// Array Destructuring
const people = [
  { nickName: "Daneypoos", address: "BD2 1NX" },
  { nickName: "Hannie", address: "BD2 1NX" },
];
const [daneObj, hannahObj] = people;
console.log(daneObj);

const sweets = [
  "cola bottles",
  "gummy snakes",
  "starburst",
  "skittles",
  "blue and pink bottles",
  "jelly babies",
  "sherbert",
];
const { 1: bestSweets } = sweets;
console.log(bestSweets);
