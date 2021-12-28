// 1. use spread operator to combine two arrays or two objects
console.log("----------------------------");
let peaks = ["Tallac", "Ralston", "Rose"];
let canyons = ["Ward", "Blackwood"];
let tahoe = [...peaks, ...canyons];
console.log(tahoe.join(", ")); // Tallac, Ralston, Rose, Ward, Blackwood
console.log("----------------------------");
const morning = {
  breakfast: "oatmeal",
  brunch: "peanut butter and jelly",
};
const lunch = {
    elevenses: "Bread Pudding with Cinnamon",
    luncheon: "Beer and onion soup"
};
const dinner = "mac and cheese";
const meals = { ...morning, ...lunch, dinner };
console.log(meals);
console.log("----------------------------");

// 2. use spread operator to create a working copy of an array
// let peaks = ["Tallac", "Ralston", "Rose"];
let [last] = peaks.reverse();
console.log(last); // Rose
console.log(peaks.join(", ")); // Rose, Ralston, Tallac
console.log("----------------------------");

// 3. use spread operator to destructure a bigger array into variables + small array
const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
const [first, ...others] = lakes;
console.log(others.join(", ")); // Marlette, Fallen Leaf, Cascade
console.log("----------------------------");

// 5. use spread operator to pass an array of unkown size as argument to a function
function directions(...args) {
  let [start, ...remaining] = args;
  let [finish, ...stops] = remaining.reverse();
  console.log(`drive through ${args.length} towns`);
  console.log(`start in ${start}`);
  console.log(`the destination is ${finish}`);
  console.log(`stopping ${stops.length} times in between`);
}
directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");
console.log("----------------------------");
