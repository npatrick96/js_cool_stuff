// 1. use spread operator to combine two arrays
let peaks = ["Tallac", "Ralston", "Rose"]; let canyons = ["Ward", "Blackwood"];
let tahoe = [...peaks, ...canyons];
console.log(tahoe.join(", ")); // Tallac, Ralston, Rose, Ward, Blackwood

// 2. use spread operator to create a working copy of an array
// let peaks = ["Tallac", "Ralston", "Rose"]; 
let [last] = peaks.reverse();
console.log(last); // Rose
console.log(peaks.join(", ")); // Rose, Ralston, Tallac

// 3. use spread operator to destructure a bigger array into variables + small array
const lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"]; 
const [first, ...others] = lakes;
console.log(others.join(", ")); // Marlette, Fallen Leaf, Cascade

