import { 
    names, 
    numbers, 
    remove, 
    doubles 
} from "./data.js";

import { 
    erstesElement, 
    nichtLetztes, 
    nurLetztes, 
    nichtErstes, 
    removeItem, 
    removeDoubles,
    sumArray,
    zahlZewischen,
    firstUppercase,
    allUppercase,
    checkChar
} from "./functions.js"

let gibErstesElementZuruck = erstesElement(names);
let gibAllesAusserLetztes = nichtLetztes(names);
let gibNurLetztesElement  = nurLetztes(names);
let gibAllesAusserErstes = nichtErstes(names);
let entferneRemove = removeItem(remove, "remove");
let entferneDoppelte = removeDoubles(doubles);
let summeArray = sumArray(numbers);
let rechneRange = zahlZewischen(12, 8);
let ersterBuchstabeGross = firstUppercase("metin");
let alleBuchstabenGross = allUppercase("metin");
let checkEnde = checkChar("metin", "x");

console.log(gibErstesElementZuruck);
console.log(gibAllesAusserLetztes);
console.log(gibNurLetztesElement);
console.log(gibAllesAusserErstes);
console.log(entferneRemove);
console.log(entferneDoppelte);
console.log(summeArray);
console.log(rechneRange);
console.log(ersterBuchstabeGross);
console.log(alleBuchstabenGross);
console.log(checkEnde);