"use strict";

const calc = new Calculator();

console.log('5 + 3 = ', calc.add(5, 3)); // 8

console.log('10 - 4 = ', calc.subtract(10, 4)); // 6

console.log('3 * 6 = ', calc.multiply(3, 6)); // 18

console.log('8 / 2 = ', calc.divide(8, 2)); // 4

console.log(calc.divide(8, 0)); // Error
