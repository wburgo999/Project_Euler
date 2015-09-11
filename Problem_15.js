/* same as 20 choose 10 because you can only go down or right, so you 'choose' 10 right (down) steps and the rest must be down (right);
 *  nCk = n!/k! * (n - k)!
 */


function numPaths(k) {
  var n = 2 * k;
  return fact(n) / (fact(k) * fact(n - k));
}


var fact = (function() {
  var cache = {};
  return function subroutine(n) {
    if (n === 1) return 1;
    cache[n] =  cache[n] || n * subroutine(n - 1);
    return cache[n];
  }

})();

/* here's a recursive solution without math */

function numPaths2(n, stepsRightRemaining, stepsDownRemaining) {
  if (stepsRightRemaining === undefined) stepsRightRemaining = n;
  if (stepsDownRemaining === undefined) stepsDownRemaining = n;
  if (stepsRightRemaining === 0 || stepsDownRemaining === 0) return 1;
  else return numPaths2(n, stepsRightRemaining - 1, stepsDownRemaining) + numPaths2(n, stepsRightRemaining, stepsDownRemaining - 1) 
}

