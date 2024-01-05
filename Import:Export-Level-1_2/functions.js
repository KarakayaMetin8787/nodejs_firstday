export function erstesElement (array) {
    return array.slice(0, 1)
};

export function nichtLetztes (array) {
    return array.slice(0, ((array.length) -1))
};

export function nurLetztes (array) {
    return array.slice(-1)
};

export function nichtErstes (array) {
    return array.slice(1, (array.length))
};

export function removeItem (array, target) {
    return array.filter(look => look !== target)
};

export function removeDoubles (array) {
    let newArray = [...new Set(array)];
    return newArray;
};

export function sumArray (array) {
    return array.reduce((sum, currentNumber) => sum + currentNumber, 0);
};

export function zahlZewischen (num1, num2) {
    if (num1 > num2) {
        return Math.random() * (num1 - num2) + num2;
    } else {
        return Math.random() * (num2 - num1) + num1;
    }
};

export function firstUppercase (string) {
    let makeBig = string.charAt(0).toUpperCase();
    let seperateRest = string.slice(1, (string.length));
    return (makeBig + seperateRest);
};

export function allUppercase (string) {
    let makeBig = string.toUpperCase();
    return makeBig;
};

export function checkChar (string1, string2) {
    let sliceOfString1 = string1.slice(-1)
    if ( sliceOfString1 == string2 ) {
        return true
    } else {
        return false
    }
}