function p12() {
  var num = 1;
  var tNum = 0;
  while (true) {
    tNum += num;
    num++;
    if (countFactors(tNum) > 500 ) break;
  }
  return tNum;
}

function countFactors(n) {
  var count = 0;
  var root = Math.sqrt(n);
  for (var i = 0; i < root; i++) {
    if (n % i === 0) count += 2;
  }
  if (root * root === n) count++;
  return count;
}

console.log(p12());
