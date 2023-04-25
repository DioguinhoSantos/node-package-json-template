import { countries } from "./countries.js";

const name = process.argv[2];
const code = process.argv[3];

if (!name || !code) {
    console.log("Please provide a name and a code");
}
else {
    countries.push({name , code});
}

console.log(countries[countries.length - 1])