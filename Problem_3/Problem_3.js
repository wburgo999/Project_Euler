/*Problem 3
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143?
*/

function largestPrimeFactor(num) {
	var factor = 2;
	while(factor < num) {
		if (num % factor == 0)
			num /= factor;
		else
			factor++;
	}
	return num;
}

console.log(largestPrimeFactor(600851475143));