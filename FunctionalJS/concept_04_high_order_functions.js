var log = function (message) {
  console.log(message);
};

log("Hello! I am the 'log' function!");
log("-------------------------------");

const insideFn = (logger) => {
  logger("They can be sent to other functions as arguments");
};
insideFn((message) => console.log(message));
log("-------------------------------");
const invokeIf = (condition, fnTrue, fnFalse) =>
  condition ? fnTrue() : fnFalse();
const showWelcome = () => console.log("Welcome!!!");
const showUnauthorized = () => console.log("Unauthorized!!!");
invokeIf(true, showWelcome, showUnauthorized); // "Welcome!!!"
invokeIf(false, showWelcome, showUnauthorized); // "Unauthorized!!!"
