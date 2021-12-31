var log = function (message) {
  console.log(message);
};

log("Hello! I am the 'log' function!");
log("-------------------------------");

const insideFn = (logger) => {
  logger("They can be sent to other functions as arguments");
};
insideFn((message) => console.log(message));
