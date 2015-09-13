//Problem_1


//Approach 1 - brute force
var answer1 = 0;
for(i = 0; i < 1000; i++) {
	if(i % 3 == 0) 
		answer1b += i;
	else if (i % 5 == 0) 
		answer1b += i;
}

//Approach 2 - using the the formula for arithmetic series
function arithSeries(start, end, diff) {
	return ((start + end)/2) * ((end - start)/diff + 1);
}
var answer1b = arithSeries(3,999,3) + arithSeries(5,995,5) - arithSeries(15,990,15);


console.log(answer1);
console.log(answer1b);