var BigInteger = require("./BigInteger.js");

var a = new BigInteger(2);
for (var i = 2; i <= 1000; i++) {
  a.multiply(2);
}
console.log(a.num.reduce(function(a, b) { return a + b}));
