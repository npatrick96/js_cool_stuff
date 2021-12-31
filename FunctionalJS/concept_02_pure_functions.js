const frederick = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false,
};

const selfEducateMutable = (person) => {
  person.canRead = true;
  person.canWrite = true;
  return person;
};

console.log(selfEducateMutable(frederick));
console.log(frederick);

console.log("-------------------------------");

const frederick1 = {
  name: "Frederick Douglass",
  canRead: false,
  canWrite: false,
};

const selfEducateImmutable = (person) => ({
  ...person,
  canRead: true,
  canWrite: true,
});
console.log(selfEducateImmutable(frederick1));
console.log(frederick1);
