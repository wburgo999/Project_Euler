//Problem 2

function genFib(num) {
	var fib = [1,1];
	var result = 0;
	while(fib[fib.length - 1] <= num) {
		var temp = fib[fib.length - 1] + fib[fib.length - 2];
		if (temp % 2 == 0)
			result += temp;
		fib.push(temp);

	}
	return result;
}

var result = genFib(4000000);
console.log(result);
