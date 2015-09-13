/*
 * n → n/2 (n is even)
 * n → 3n + 1 (n is odd)
 */

var collatzSequenceLength = (function() {
  var cache = {"1": 1};

  return function sub(n) {
    if (cache[n] !== undefined) return cache[n];
    if (n % 2 === 0) {
      cache[n] = 1 + sub(n / 2);
    } else {
      cache[n] = 1 + sub(3 * n + 1);
    }
    return cache[n];
  }

})();

var max = 0, num = 0;
for (var i = 1; i < 1000000; i++) {
  if (collatzSequenceLength(i) > max) {
    num = i;
    max = collatzSequenceLength(i);
  }
}
console.log(max, num);


