import { countries } from "./countries.js";

if ( !process.argv[2] ) {
    console.log('Digite uma letra')
}
else {
    const result = countries.filter(data => data.name.toLowerCase()[0].includes(process.argv[2].toLowerCase()));

    console.log(result)
}