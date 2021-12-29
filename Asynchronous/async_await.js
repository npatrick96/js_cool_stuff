import fetch from "node-fetch";

const getFakePerson = async () => {
  try {
    let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
    let { results } = await res.json();
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};
getFakePerson();
