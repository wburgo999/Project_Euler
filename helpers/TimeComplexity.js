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

module.exports = getTime;
