### PROBLEM 5: smallest multiple

> 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
> 
> What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

Let's start with a brute force solution:

```javascript
loop, start with num equals 21
  if num is divisible by all numbers 1..20
    return num
  otherwise, increment num
```

In Code:

```javascript
function smallestMultiple() {
  var num = 21;
  while (true) {
    if (numisDivisibleBy1To20(num)) return num;
    num++;
  }
}
```
And now let's write numIsDivisibleBy1To20:

```javascript
function isDivisibleBy1To20() {
  for (var i = 1; i <= 20; i++) {
    if (num % i !== 0) return false;
  }
  return true;
}
```
And our solution is `smallestMultiple()`:

> 232792560 

This isn't a great solution, though. We have to loop over 23 million times to reach our answer, and while this doesn't take long with modern computers with GigaHertz processors, we can imagine that a similar question but applied to the numbers 1 to 100, would take much longer.

Let's try a different algorithm. Note that for any numbers `a` and `b`, the smallest common multiple, `c`, has the property that the prime factorisations of `a` and `b` are both subsets of the prime factorisation of `c`. For example, take `8` and `20`. the prime factorisation of `8` is `2*2*2` and for `20` is `2*2*5`, and the smallest common multiple is `40`, whose prime factorisation is `2*2*2*5`. Notice that this prime factorisation is the smallest set of numbers that contains both the prime factorisation of `8` and the prime factorisation of `20`.

So our new algorithm is:

```javascript
for num from 1 to 20
  get prime factorisation
  combine prime factorization into new prime factorisation for the LCM
return the product of new prime factorization
```

In code:
```javascript
function smallestMultiple(n) {
  var lcmPrimeFactors = {};
  var primeFactors;
  for (var num = 1; num <= n; num++) {
    primeFactors = getPrimeFactors(num);
    combine(lcmPrimeFactors, primeFactors);
  }
  return multiplyFactors(lcmPrimeFactors);
}
```

We've got a few helper functions to write, so let's start with `getPrimeFactors`. 

```javascript
function getPrimeFactors(num) {
  var factors = {};
  var factor = 2;
  while (factor <= num) {
    if (num % factor === 0) {
      if (!factors[factor]) factors[factor] = 1;
      else factors[factor]++;
      num = num / factor;
    }
    else factor++
  }
  return factors;
}
```

Now let's write our `combine` function, which will take an existing prime factorisation and a new prime Factorisation and modify the existing one to ensure it is a superset of the new one.

```javascript
function combine(factors, newFactors) {
  for (var key in newFactors) {
    if (!factors[key] || newFactors[key] > factors[key]) {
      factors[key] = newFactors[key];
    }
  }
  return factors;
}
```

And finally we can write `multiplyFactors`, which takes a factorisation and multiplies the factors together to return the original number.

```javascript
function multiplyFactors(factors) {
  var num = 1;
  for (var key in factors) {
    num *= Math.pow(key, factors[key]);
  }
  return num;
}
```

Using this algorithm, we get `smallestMultiple(20)`:

> 232792560 

It also works for all numbers from 1 to 100, `smallestMultiple(100)`

> about `6.972037522971249e+40`
    
    
    







