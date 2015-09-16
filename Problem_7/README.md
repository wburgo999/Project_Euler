### PROBLEM 7: 10001st prime

> By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
> 
> What is the 10 001st prime number?

Let's start with the brute force solution:

```javascript
start with num equals 2 and counter equals 0
while counter does not equal 10001
  if num is prime
    increment counter
  increment num
return num - 1 // to offset final increment in while loop
```

In code:

```javascript
function get10001Prime() {
  var num = 2, counter = 0;
  while (counter !== 10001) {
    if (isPrime(num)) counter++;
    num++
  }
  return num - 1
}
```

For our `isPrime` function, we loop from 1 to the square root of num and see if num is divisible by any of these numbers

```javascript
function isPrime(num) {
  var root = Math.sqrt(num);
  for (var i = 2; i <= root; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
```
And our solution is, `10001Prime()`

> 104743

There is a better solution, however. Initially, I thought to implement a prime seive, but a seive generates primes up to a certain number, whereas in this problem we want to generate n primes. We could simply pick a very large number for our prime seive to generate to, but let's use a more elegant solution. We can use the Prime Number Theorem:

> The number of primes not exceeding x is asymptotic to `x / log(x)`

Meaning, that if we want n primes, this is approximately

`nth_prime = n * log(n)`

Since this is only asymptotic, let's simply double the number to ensure we generate enough primes.

```javascript
function nthPrime(n) {
  var limit = 2 * (n * Math.log(n));
  var primes = primeSeive(limit);
  return primes[n - 1]; // -1 for 0 indexing
}
```

Now we can write our Prime Seieve:

```javascript
function primeSeive(limit) {
  var primes = [];
  var root = Math.sqrt(limit);
  for (var i = 0; i <= limit; i++) {
    primes[i] = true;
  }
  primes[0] = primes[1] = false // 1 and 0 are not prime

  for (var i = 2; i <= root; i++) {
    for (var j = i * i; j <= limit; j+= i) {
      primes[j] = false;
    }
  }

  return primes.map(function(e, i) { 
    if (e) return i;
    return false;
  }).filter(function(e) {
    return Boolean(e);
  });
}
```

our solution is, `nthPrime(10001)`

> 104743


