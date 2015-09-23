
function sumSquareDifference_2() {
  var total = 0;
  for (var i = 1; i <= 100; i++) {
    total += i;
  };
  total = total * total;
  for (var i = 1; i <= 100; i++) {
    total -= i * i;
  }
  return total;
}
function sumSquareDifference_2(n) {
  return squareOfSums(n) - sumOfSquares(n);
}
function squareOfSums(n) {
  var sums = (n * (n + 1)) / 2;
  return sums * sums;
}
function sumOfSquares(n) {
  return (n * (n + 1) * (2 * n + 1)) / 6;
}


console.log(sumSquareDifference_2(100));  

console.log(sumSquareDifference_2(1000000000));  
console.log(sumSquareDifference_2(1000000000000));  
console.log(sumSquareDifference_2(1000000000000000));  

