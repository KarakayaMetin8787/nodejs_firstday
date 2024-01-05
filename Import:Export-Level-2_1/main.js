import { data } from "./data.js";
import { filteredDataBig, filteredDataSmall } from "./functions.js";

let populationBig = filteredDataBig(data);
let populationSmall = filteredDataSmall(data);

console.log(populationBig);
console.log(populationSmall);