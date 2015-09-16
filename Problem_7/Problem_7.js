function get10001Prime() {
  var num = 2, counter = 0;
  while (counter !== 10001) {
    if (isPrime(num)) counter++;
    num++
  }
  return num - 1
}

function isPrime(num) {
  var root = Math.sqrt(num);
  for (var i = 2; i <= root; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function nthPrime(n) {
  var limit = 2 * (n * Math.log(n));
  var primes = primeSeive(limit);
  return primes[n - 1]; // -1 for 0 indexing
}

function primeSeive(limit) {
  var primes = [];
  var root = Math.sqrt(limit);
  for (var i = 0; i <= limit; i++) {
    primes[i] = true;
  }
  primes[0] = primes[1] = false // 1 and 0 are not prime

  for (var i = 2; i <= root; i++) {
    for (var j = i * i; j <= limit; j+= i) {
      primes[j] = false;
    }
  }

  return primes.map(function(e, i) { 
    if (e) return i;
    return false;
  }).filter(function(e) {
    return Boolean(e);
  });
}

