/*Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
*/

//had to use guess and check to get enough primes - should build a function genNPRimes
function genPrimesUptoN(num) {
	var primes = [false,false];
	for(var i = 2; i < num; i++) {
		primes[i] = true;
	}
	var realPrimes = [];
	for(var i = 2; i < primes.length; i++) {
		if (primes[i]) {
			realPrimes.push(i);
			for(var j = i + 1; j < primes.length; j++) {
				if (j % i == 0)
					primes[j] = false;
			}

		}

	}
	return realPrimes;
}

var result = genPrimesUptoN(150000)[10000];
