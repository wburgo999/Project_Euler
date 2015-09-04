function p12() {
  var num = 1,
      tNum = 0;

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
  //don't double count if it is a perfect square
  if (root * root === n) count++;
  return count;
}

console.log(p12());
