const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];
console.log("-------------------");
console.log(schools.join(", "));
const wSchools = schools.filter((school) => school[0] === "W");
console.log(wSchools); // ["Washington & Liberty", "Wakefield"]
console.log("-------------------");
const highSchools = schools.map((school) => `${school} High School`);
console.log(highSchools.join("\n"));
const highSchoolsAsObjects = schools.map((school) => ({ name: school }));
console.log(highSchoolsAsObjects);
