### PROBLEM 1: FizzBuzz, basically

> If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
> Find the sum of all the multiples of 3 or 5 below 1000.

Naive solution: just loop through from 1 to 1000, and add each multiple of 3 or 5 to a running total. An easy way to check if a number, n, is a multiple of m,
is whether n % m is 0;

```javascript
function sumMultiplesOf3And5() {
  var sum = 0;
  for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
}
```

Math Solution:
<p align="center">
  <img src="http://www.sciweavers.org/tex2img.php?eq=%20%5Csum_%7Bi%3D1%7D%5E%7B333%7D%20%7B3i%7D%20%2B%20%20%5Csum_%7Bi%3D1%7D%5E%7B199%7D%20%7B5i%7D%20-%20%20%5Csum_%7Bi%3D1%7D%5E%7B66%7D%20%7B15i%7D&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0" alt="Sublime's custom image"/>
</p>
If we take the equation for an arithmetic series: 
<p align="center">
  <img src="http://www.sciweavers.org/tex2img.php?eq=%20%5Csum_%7Bi%3D1%7D%5E%7Bn%7D%20%7Ba_i%7D%20%3D%5Cfrac%7Bn%20%2A%20%28%7Ba_1%7D%20%2B%20%7Ba_n%7D%29%7D%7B2%7D&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0" alt="Sublime's custom image"/>
</p>

Then we can reduce the above equation to:

<p align="center">
  <img src="http://www.sciweavers.org/tex2img.php?eq=%5Cfrac%7B333%20%2A%20%28%7B3%7D%20%2B%20%7B999%7D%29%7D%7B2%7D%20%2B%20%5Cfrac%7B199%20%2A%20%28%7B5%7D%20%2B%20%7B995%7D%29%7D%7B2%7D%20%2B%20%5Cfrac%7B66%20%2A%20%28%7B15%7D%20%2B%20%7B990%7D%29%7D%7B2%7D&bc=White&fc=Black&im=jpg&fs=12&ff=arev&edit=0" alt="Sublime's custom image"/>
</p>
Reduce, and our answer is
> 233168


