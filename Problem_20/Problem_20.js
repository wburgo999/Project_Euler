function factorialDigitSum(n) {
  var num = new BigInteger(n);
  for (var i = num - 1; i >= 1; i--) {
    num = num.multiply(i);
  }
  return num.digits.reduce(function(a, b) {return a + b });
}
  
