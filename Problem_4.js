/* Problem 4
A palindromic number reads the same both ways. The largest palindrome made from the 
product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

function genProducts(num) {
	var products = [];
	for(var i = 100; i < num; i++) {
		for(var j = 100; j <= i; j++) {
			products.push(i*j);
		}
	}
	return products;
}

function checkPalindrome(str) {
	str = '' + str;
	return (str == str.split('').reverse().join(''));
}

var products = genProducts(1000).sort(function(a,b) {return b-a});
function checkLargest(arr) {
	for(var i = 0; i < arr.length; i++) {
		if (checkPalindrome(arr[i]))
			return arr[i];

	}
}

var result = checkLargest(products);

console.log(result);