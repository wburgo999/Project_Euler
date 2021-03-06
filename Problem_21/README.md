### PROBLEM 21: Amicable Numbers

> Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
> If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
> 
> For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
> 
> Evaluate the sum of all the amicable numbers under 10000.

The algorithm is fairly straightforward.
Note, since a and b must be a pair, meaning they are distinct numbers, we need to make sure not to count the case where the sum of all divisors of n equals n.
```
For each n from 1 to 10000
  get sum of all divisors of n
  if n equals the sum of all divisors of this sum, and sum does not equal n
    add n and sum to our running total
```
Let's rewrite the algorithm in code:
```javascript
function amicableNumbers(n) {
  var total = 0;
  for (var num = 1; num < n; num++) {
    var sum = sumOfDivisors(num);
    if (sumOfDivisors(sum) === num && num !== sum) { 
      total += num;
    }
  }
  return total;
}
```

Now let's write `sumOfDivisors`. We can split it out into two steps: (1) summing the divisors, and (2) generating a list of the divisors

```javascript
function sumOfDivisors(n) {
  var divisors = getDivisors(n);
  return divisors.reduce(function(a, b) { return a + b });
}
```

Let's write `getDivisors`. We loop from 1 to the square root of n and add the divisors, making sure not to double count the square root.
We cache previous results to speed up the algorithm. 

Why do we only loop to the square root instead of all the way to n?

Define `root` to be the square root of n. Note that if `a * b = n`, that either (1) `a = b` (2) `a > root` or (3) `b > root`. If this were not true, then `a * b < n` and they would not be proper divisors. This means that for all proper divisors of n greater than root, there is a matching divisors less than root, so as long as we add both factors whenever we encounter a divisor less than root, we won't miss any divisors. We also need to make sure not to double count the root.

```javascript
var getDivisors = (function() {
  var cache = {};

  return function(n) {
    var divisors = [1];
    var root = Math.sqrt(n);
    for (var i = 2; i <= root; i++) {
      if (n % i === 0) {
        divisors.push(i);
        if (i != root) divisors.push(n / i); //don't double count
      }
    }
    cache[n] = divisors;
    return cache[n];
  }
})();
```

Our solution is `amicableNumbers(10000)`:

> 31626 

