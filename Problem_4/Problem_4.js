/* Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the 
product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

function largestPalindromeProduct() {
  var products = genProducts()
    products = products.sort(function(a,b) {return b-a});
  for (var i = 0; i < products.length; i++) {
    if (isPalindrome(products[i])) return products[i];
  }
}
function genProducts() {
	var products = [];
	for(var i = 100; i < 1000; i++) {
		for(var j = 100; j <= i; j++) { //j starts at i to avoid double counting products
			products.push(i*j);
		}
	}
	return products;
}
function isPalindrome(num) {
  return String(num).split('').reverse().join('') === String(num);
}

console.log(largestPalindromeProduct());
