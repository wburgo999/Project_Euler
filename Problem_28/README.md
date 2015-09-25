### PROBLEM 28: Number spiral diagonals 

> starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:
>  ```
> 21 22 23 24 25
> 20  7  8  9 10
> 19  6  1  2 11
> 18  5  4  3 12
> 17 16 15 14 13
> ``` 
> 
> It can be verified that the sum of the numbers on the diagonals is 101.
> 
> What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
> 

Naive solution: While I'm sure it's possible to construct the spiral as an array or arrays and then iterate through and only add the corners, that sounds really painful. Instead, let's see if we can come up with a formula for the nth "ring" of a spiral. Define the 0th ring to be the center, `1`, and the 1st ring to be the numbers `2-9`, and so on. We can see that the upper right diagonal is always equal to (2 * n + 1)<sup>2</sup>, where `n` is the ring number. Next, notice that to reach the followinig corner counterclockwise, we substract `2n`. This pattern holds for the other corners as well. Therefor, our formula for summing the 4 corners of the nth row, is:


F(n) = 4*(2n + 1)<sup>2</sup> - (2 + 4 + 6)n

Meaning, our answer should be the sum of all "rows" in  1001-by-1001 spiral. This spiral has 501 "rings", but we are going to count the first "ring", which will always be `1` as a separate case. Then our formula becomes

sumOfDiagonals = 1 + ( sum from 1 to 500 (4*(2n + 1)^2 - (2 + 4 + 6)n) )

Here's the same solution in code but for any size spiral.


```javascript
function numberSpiralDiagonals(n) {
  var numRings = Math.floor(n);
  var total = 1;
  for (var i = 1; i <= numRings; i++) {
    total += 4 * Math.pow(2 * i + 1, 2) - 12 * i;
  }
  return total;
}
```

Our solution is, `numSpiralDiagonals(1001)`,

>

But what's  the time complexity? Well, we are looping about `n/2` times, so the algorithm's running time will be directly proportional to input size, meaning it's linear time, `O(n)`.

Let's verify this is true by seeing how long the algorithm takes to run for various input sizes


Can we do better? In [Problem ???]() we derived the formula for both the sum of squares of the natural numbers from 1 to n by first constructing a table of difference to determine the degree of the polynomial, then using a system of equations to derive the coefficients. Let's do the same thing here.

Table of differences:

Since the third derivative is constant, we know the solution is a polynomial of degree 3, and takes the form 

f(n) = ax<sup>3</sup> + bx<sup>2</sup> + cx + d.

Since f(0) = 1, we know d = 1;

Then, we can use the  `f(1)`, `f(2)`, and `f(3)` to get our three equations:


`
a + b + c + d = 25 
`

`
8a + 4b + 2c + d = 101
`

`
27a + 9b + 3c + d = 261
`

This is a system of equations with 3 equations and 3 unknown variables, so we know it can be solved. I'll spare you the algebra since it is both straightforward and tedious. After solving, we get `a=16/3`, `b=10`, and `c=26/3`. Our final equation is

f(n) = 16/3x<sup>3</sup> + 10x<sup>2</sup> + 26/3<sup>x</sup> + 1

Our final algorithm is:


```javascript
function numberDiagonalSum(n) {
  var rings = Math.floor(n / 2);
  return (16/3)*Math.pow(rings, 3) + 10*Math.pow(rings, 2) + (26/3)*rings + 1;
}
```

The time complexity of this algorithm is constant, `O(1)`. We can apply this algorithm to arbitrarily large numbers and it will still finish in roughly the same amount of time.

Let's verify to make sure this is true;


| Input(n)      | Time (ms)     |
| ------------- | -------------:|
| 1e+5          | 0             |
| 1e+6          | 0             |
| 1e+7          | 0             |
| 1e+8          | 0             |
| 1e+9          | 0             |
| 1e+10         | 0             |
| 1e+11         | 0             |

  Unfortunately, Javascript does not have submillisecond timing (see my [ initial ]({% post_url 2015-06-28-problem-1 %}) post on time complexity for more on how and why I made decisions to analyze time complexity this way), but it's clear the solution is constant time: no matter how large an n we choose, the time to completion is constant.
