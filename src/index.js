'use strict';

/**
 * Function that finds a combination of operations (path) performed on number 1 from the allowed operations (multiply by 3 or increase by 5).
 * @param {number} number - The number we are trying to find a path to.
 * @returns {string|null} Path to reach the given number, or null in case of an error or if the number is unreachable.
 */
function getPathToNumber(number) {
    if (!Number.isInteger(number) || number < 1) {
        return null;
    }

    if (number === 1) return '1';

    let threePath = null;
    let fivePath = null;

    if (number % 3 === 0) {
        threePath = getPathToNumber(number / 3);
    }
    if (number - 5 > 0) {
        fivePath = getPathToNumber(number - 5);
    }

    if (threePath) return `(${threePath} * 3)`;
    if (fivePath) return `(${fivePath} + 5)`;

    return null;
}

console.group('======= Test cases =======');
console.log('getPathToNumber(9) :>> ', getPathToNumber(9));
console.log('getPathToNumber(13) :>> ', getPathToNumber(13));
console.log('getPathToNumber(26) :>> ', getPathToNumber(26));
console.log('getPathToNumber(27) :>> ', getPathToNumber(27));
console.groupEnd();

console.group('======= Unreachable cases =======');
console.log('getPathToNumber(2) :>> ', getPathToNumber(2));
console.log('getPathToNumber(4) :>> ', getPathToNumber(4));
console.log('getPathToNumber(5) :>> ', getPathToNumber(5));
console.log('getPathToNumber(10) :>> ', getPathToNumber(10));
console.groupEnd();

console.group('======= Faulty cases =======');
console.log('getPathToNumber(NaN) :>> ', getPathToNumber(NaN));
console.log('getPathToNumber(null) :>> ', getPathToNumber(null));
console.log('getPathToNumber(0) :>> ', getPathToNumber(0));
console.log('getPathToNumber(-25) :>> ', getPathToNumber(-25));
console.log('getPathToNumber(Infinity) :>> ', getPathToNumber(Infinity));
console.groupEnd();
