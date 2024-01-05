import {arrayNumbers, arrayCars} from "./data.js";
import {sortItems} from "./functions.js";

let autos = sortItems(arrayCars);
let nummern = sortItems(arrayNumbers);

console.log(autos);
console.log(nummern);