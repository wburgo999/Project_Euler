/*
The sum of the squares of the first ten natural numbers is,
12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025

Hence the difference between the sum of the squares of the first 
ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one
hundred natural numbers and the square of the sum.
*/

//using the formulas
function problem6(num) {
	return Math.pow(num * (num + 1)/2,2) - (num * (num + 1) * (2 * num + 1)/6);
}

var result = problem6(100);
console.log(result);