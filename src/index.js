'use strict';

/**
 * Function that finds a combination of operations (path) performed on number 1 from the allowed operations (multiply by 3 or increase by 5).
 * @param {number} number - The number we are trying to find a path to.
 * @returns {string|null} Path to reach the given number, or null in case of an error or if the number is unreachable.
 */
function getNumber(number) {
    if (!Number.isInteger(number) || number < 1 || !Number.isFinite(number)) {
        return null;
    }

    if (number === 1) return '1';

    let threePath = null;
    let fivePath = null;

    if (number % 3 === 0) {
        threePath = getNumber(number / 3);
    }
    if (number - 5 > 0) {
        fivePath = getNumber(number - 5);
    }

    if (threePath) return `(${getNumber(number / 3)} * 3)`;
    if (fivePath) return `(${getNumber(number - 5)} + 5)`;

    return null;
}

// Test cases
console.log('=============================================');
console.log('Test cases:');
console.log('getNumber(9) :>> ', getNumber(9));
console.log('getNumber(13) :>> ', getNumber(13));
console.log('getNumber(26) :>> ', getNumber(26));
console.log('getNumber(27) :>> ', getNumber(27));

// Unreachable cases
console.log('=============================================');
console.log('Unreachable cases:');
console.log('getNumber(2) :>> ', getNumber(2));
console.log('getNumber(4) :>> ', getNumber(4));
console.log('getNumber(5) :>> ', getNumber(5));
console.log('getNumber(10) :>> ', getNumber(2));

// Faulty cases
console.log('=============================================');
console.log('Faulty cases:');
console.log('getNumber(NaN) :>> ', getNumber(NaN));
console.log('getNumber(null) :>> ', getNumber(null));
console.log('getNumber(0) :>> ', getNumber(0));
console.log('getNumber(-25) :>> ', getNumber(-25));
console.log('getNumber(Infinity) :>> ', getNumber(Infinity));
