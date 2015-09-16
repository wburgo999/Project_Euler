### PROBLEM 6: Sum Square Difference

> The sum of the squares of the first ten natural numbers is,
> 
> 12 + 22 + ... + 102 = 385
> The square of the sum of the first ten natural numbers is,
> 
> (1 + 2 + ... + 10)2 = 552 = 3025
> Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
> 
> Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

The brute force solution is pretty straightforward:

```javascript
add the numbers 1 to 100
square the total
subtract the square of each number from 1 to 100
```

In code:
```javascript
function sumSquareDifference() {
  var total = 0;
  for (var i = 1; i <= 100; i++) {
    total += i;
  };
  total = total * total;
  for (var i = 1; i <= 100; i++) {
    total -= i * i;
  }
  return total;
}
```
Our solution is, `sumSquareDifference()`:

> 25164150 

Let's see if we can reach a more elegant solution.

I'm going to divide the algorithm into two separate functions and see if we can derive pure mathematical solutions for these helper functions.

```javascript
function sumSquareDifference(n) {
  return squareOfSums(n) - sumOfSquares(n);
}
```

Let's start with `squareOfSums`. We know that the sum of the natural numbers from `1..n` is `n(n+1)/2`.

```javascript
function squareOfSums(n) {
  var sums = (n * (n + 1)) / 2;
  return sums * sums;
}
```

Similarly, for `sumOfSquares`, we know the sum of squares from `1..n` is 

`(n * (n + 1) * (2n + 1)) / 6`.

```javascript
function sumOfSquares(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}
```

Again, our solution is `sumSquareDifference(100)`;

> 25164150 
