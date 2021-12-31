const both = (date) => appendAMPM(civilianHours(date));

const abstractClockTime = (date) => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
});

const civilianHours = (clockTime) => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
});

const appendAMPM = (clockTime) => ({
  ...clockTime,
  ampm: clockTime.hours >= 12 ? "PM" : "AM",
});

console.log(abstractClockTime(new Date()));
console.log(both(abstractClockTime(new Date())));

// console.log("---------------------");
// const both2 = Function.prototype.compose(civilianHours, appendAMPM);
// both2(new Date());
