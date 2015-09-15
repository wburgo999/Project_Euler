//Problem 2

function sumEvenFibonacciToN(num) {
	var result = 0;
  var current = previous = 1;
	while(current < num) {
		temp = current + previous;
    previous = current;
    current = temp;
		if (current % 2 == 0)
			result += current;
	}
	return result;
}

