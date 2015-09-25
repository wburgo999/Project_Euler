var time = require("../helpers/TimeComplexity.js")
//Approach 1 - brute force
function multiplesOf3And5(n) {
  var sum = 0;
  for (var i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }
  return sum;
}

//Approach 2 - using the the formula for arithmetic series
function arithSeries(start, end, diff) {
	return ((start + end)/2) * ((end - start)/diff + 1);
}
function multiplesOf3And5_2(n) {
  return arithSeries(3,Math.floor((n - 1) / 3) * 3,3) + arithSeries(5,Math.floor((n - 1) / 5) * 5,5) - arithSeries(15,Math.floor((n - 1) / 15) * 15,15);
}


function getTime(fn, parameters) {
  var times = {"labels": format(parameters), data: []};
  var start, end;
  parameters.forEach(function(parameter) {
    start = new Date().getTime();
    fn(parameter);
    end = new Date().getTime();
    times.data.push(end - start);
  });
  return times;

  function format(parameters) {
    return parameters.map(function(parameter) {
      return parameter.toExponential();
    });
  }
}
//var data = time(multiplesOf3And5, [10000000,100000000,1000000000,1000000000,1000000000]);
var data2 = time(multiplesOf3And5_2, [10000000,100000000,1000000000,1000000000,1000000000]);
console.log(data2);


