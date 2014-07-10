/*Problem 9
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

//Euler's formula for generating triplets - a = m^2 - n^2  b = 2mn   c = m^2 + n^2
// so we need something that satisfies a + b + c = 2m^2 + 2mn = 1000
var mAndN = [];
for(var m = 1; m < 25; m++) {
	for(var n = 1; n < 25; n++) {
		if (2*m*m + 2*m*n == 1000)
			mAndN = [m,n];
	}
}

var result = (mAndN[0]*mAndN[0] - mAndN[1]*mAndN[1]) * (2*mAndN[0]*mAndN[1]) * (mAndN[0]*mAndN[0] + mAndN[1]*mAndN[1]);

console.log(result);