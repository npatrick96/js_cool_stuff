let color_lawn = { title: "lawn", color: "#00FF00", rating: 0 };

const rateColor = function (color, rating_value) {
  return Object.assign({}, color, { rating: rating_value, title: "new_title" });
};

console.log(color_lawn);
console.log(rateColor(color_lawn, 5));

const cleanRateColor = (color, rating) => ({ ...color, rating });

console.log(rateColor(color_lawn, 4));
console.log("-------------------------------");

// mutable add element
let list = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];
const addColor = function (title, colors) {
  colors.push({ title: title });
  return colors;
};
console.log(addColor("Glam Green", list).length); // 4
console.log(list.length); // 4
console.log("-------------------------------");

// immutable add element
let list2 = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];
const addColorImmutable = (title, array) => array.concat({ title });
console.log(addColorImmutable("Glam Green", list2).length); // 4
console.log(list2.length); // 3
console.log("-------------------------------");

// immutable add element
let list3 = [{ title: "Rad Red" }, { title: "Lawn" }, { title: "Party Pink" }];
const addColorImmutable2 = (title, list) => [...list, { title }];
console.log(addColorImmutable2("Glam Green", list3).length); // 4
console.log(list3.length); // 3
