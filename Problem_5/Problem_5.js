
function smallestMultiple_1() {
  var num = 21;
  while (true) {
    if (isDivisibleBy1To20(num)) return num;
    num++;
  }
}

function isDivisibleBy1To20(num) {
  for (var i = 1; i <= 20; i++) {
    if (num % i !== 0) return false;
  }
  return true;
}

function smallestMultiple_2(n) {
  var lcmPrimeFactors = {};
  var primeFactors;
  for (var num = 1; num <= n; num++) {
    primeFactors = getPrimeFactors(num);
    combine(lcmPrimeFactors, primeFactors);
  }
  return multiplyFactors(lcmPrimeFactors);
}
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
function combine(factors, newFactors) {
  for (var key in newFactors) {
    if (!factors[key] || newFactors[key] > factors[key]) {
      factors[key] = newFactors[key];
    }
  }
  return factors;
}
function multiplyFactors(factors) {
  var num = 1;
  for (var key in factors) {
    num *= Math.pow(key, factors[key]);
  }
  return num;
}



