import { countries } from "./countries.js";

// console.log(countries);

const value = process.argv[2];

//process.arg
// [ node, arquivo a ser executado, input]

// if( !value ) {
//     console.log('Por favor, busque também pelo país');
// } else {
//     for ( let i = 0 ; i < countries.length ; i++ ) {
//         if ( countries[i].name.toLowerCase() === value.toLowerCase() ) {
//             console.log(countries[i]);
//     }
// }}

const pais = countries.filter(country => country.name.toLowerCase() === value.toLowerCase());

console.log(pais)