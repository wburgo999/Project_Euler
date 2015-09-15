/* make big integer class */

var BigInteger = function(num) {
  this.digits = String(num).split('').map(function(e) { return parseInt(e) });
}

BigInteger.prototype.multiply = function(c) {
  for (var i = 0; i < this.digits.length; i++) {
    var temp = c * this.digits[i];
    this.digits[i] = temp % 10;
    var remainder = Math.floor(temp / 10);
    if (i === 0) var first = remainder;
    else this.digits[i-1] += remainder; 
  }
  if (first) this.digits.unshift(first);
}

BigInteger.prototype.add = function(num) {


module.exports = BigInteger;
