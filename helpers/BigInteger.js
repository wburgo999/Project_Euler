/* make big integer class */

var BigInteger = function(num) {
  this.num = String(num).split('').map(function(e) { return parseInt(e) });
}

BigInteger.prototype.multiply = function(c) {
  for (var i = 0; i < this.num.length; i++) {
    var temp = c * this.num[i];
    this.num[i] = temp % 10;
    var remainder = Math.floor(temp / 10);
    if (i === 0) var first = remainder;
    else this.num[i-1] += remainder; 
  }
  if (first) this.num.unshift(first);
}

module.exports = BigInteger;
