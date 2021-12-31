let color_lawn = { title: "lawn", color: "#00FF00", rating: 0 };

const rateColor = function (color, rating_value) {
  return Object.assign({}, color, { rating: rating_value, title: "new_title" });
};

console.log(color_lawn);
console.log(rateColor(color_lawn, 5));

const cleanRateColor = (color, rating) => ({ ...color, rating });

console.log(rateColor(color_lawn, 4));
