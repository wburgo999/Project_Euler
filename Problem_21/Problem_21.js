
function amicableNumbers(n) {
  var total = 0;
  for (var num = 1; num < n; num++) {
    var sum = sumOfDivisors(num);
    if (sumOfDivisors(sum) === num && sum !== num) total += num;
  }
  return total;
}


function sumOfDivisors(n) {
  var divisors = getDivisors(n);
  return divisors.reduce(function(a, b) { return a + b });
}

var getDivisors = (function() {
  var cache = {};
  return function(n) {
    var divisors = [1];
    var root = Math.sqrt(n);
    for (var i = 2; i <= root; i++) {
      if (n % i === 0) {
        divisors.push(i);
        if (i != root) divisors.push(n / i);
      }
    }
    cache[n] = divisors;
    return cache[n];
  }
})();

console.log(amicableNumbers(10000));

