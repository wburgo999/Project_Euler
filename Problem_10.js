//use prime sieve
function sumPrimesToN( n ) {
  var primes = [];
  for ( var i = 0; i < n; i++ ) {
    primes[i] = true;
  }
  primes[0] = primes[1] = false;
  for ( var i = 2; i < n; i++ ) {
    for ( var j = i * i; j < n; j += i) {
      primes[j] = false;
    }
  }
  var sum = 0;
  primes.forEach( function( e, i ) {
    if ( e ) sum += i;
  } );
  return sum;
}

console.log( sumPrimesToN( 2000000 ) )

