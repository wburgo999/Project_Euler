### PROBLEM 4: Largest Palindrome Product

> A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
> 
> Find the largest palindrome made from the product of two 3-digit numbers.

In Pseudocode:

```
Generate all products of 2 three digit numbers
sort these products
loop from largest to smallest product
  if product is a palindrome
    return product
```

In code:

```javascript
function largestPalindromeProduct() {
  var products = genProducts()
    products = products.sort(function(a,b) {return b-a});
  for (var i = 0; i < products.length; i++) {
    if (isPalindrome(products[i])) return products[i];
  }
}
```


To generate the products array, loop through all 3 digit numbers and push the product to the products array.

```javascript
function genProducts(num) {
	var products = [];
	for(var i = 100; i < num; i++) {
		for(var j = 100; j <= i; j++) { //j starts at i to avoid double counting products
			products.push(i*j);
		}
	}
	return products;
}
```

Now let's write out `isPalindrome` function. We check whether the reverse of the number is equal to itself.

```javascript
function isPalindrome(num) {
  return String(num).split('').reverse().join('') === String(num);
}
```

Our solution is, `largestPalindromeProduct`:

> 906609 


This solution is far from ideal though. We don't want to have to generate the entire products array. We want to check the largest possible product first and then generate smaller ones as needed. I'll cover a better solution in the next post


