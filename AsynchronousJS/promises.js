import fetch from "node-fetch";

fetch("https://api.randomuser.me/?nat=US&results=1")
  .then((res) => res.json())
  .then((json) => json.results)
  .then((results) => console.log(results))
  .catch(console.error);
