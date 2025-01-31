'use strict';

/**
 * Function that finds a combination of operations (path) performed on number 1 from the allowed operations (multiply by 3 or increase by 5).
 * @param {number} number - The number we are trying to find a path to.
 * @returns {string|null} Path to reach the given number, or null in case of an error or if the number is unreachable.
 */
function getPathToNumber(number) {
    if (!Number.isInteger(number) || number < 1 || !Number.isFinite(number)) {
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

// Test cases
console.log('=============================================');
console.log('Test cases:');
console.log('getNumber(9) :>> ', getPathToNumber(9));
console.log('getNumber(13) :>> ', getPathToNumber(13));
console.log('getNumber(26) :>> ', getPathToNumber(26));
console.log('getNumber(27) :>> ', getPathToNumber(27));

// Unreachable cases
console.log('=============================================');
console.log('Unreachable cases:');
console.log('getNumber(2) :>> ', getPathToNumber(2));
console.log('getNumber(4) :>> ', getPathToNumber(4));
console.log('getNumber(5) :>> ', getPathToNumber(5));
console.log('getNumber(10) :>> ', getPathToNumber(2));

// Faulty cases
console.log('=============================================');
console.log('Faulty cases:');
console.log('getNumber(NaN) :>> ', getPathToNumber(NaN));
console.log('getNumber(null) :>> ', getPathToNumber(null));
console.log('getNumber(0) :>> ', getPathToNumber(0));
console.log('getNumber(-25) :>> ', getPathToNumber(-25));
console.log('getNumber(Infinity) :>> ', getPathToNumber(Infinity));
