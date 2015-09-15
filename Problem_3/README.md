### PROBLEM 3: Largest Prime Factor

> The prime factors of 13195 are 5, 7, 13 and 29.
> 
> What is the largest prime factor of the number 600851475143 ?

Initally, you might think to brute force the solution:

```
for num from 600851475143 to 1
  if num is prime and num is a factor of 600851475142
    return num
```

Unfortunately, `600851475143` is a very large number, and checking whether a number is prime takes, at best, root n checks, so the algorithm would be way too slow.

Instead, we can do:

```
while factor is less than our number
  if factor is a divisor of number
    set number to be number divided by factor
  else
    increment factor
```

In code:

```javascript
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
```

Our solution is, `largestPrimeFactor(600851475142)`

> 6857 

  
