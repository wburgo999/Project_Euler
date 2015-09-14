
var hash = { 1: 31, 3: 31, 4: 30,
             5: 31, 6: 30, 7: 31,
             8: 31, 9: 30, 10: 31,
             11: 30, 12: 31 }

function countSundays() {
  var dayOfWeek = 2;
  var result = 0;
  var daysInMonth;
  for (var year = 1901; year <= 2000; year++) {
    for (var month = 1; month <= 12; month++) {
      if (dayOfWeek === 0) result++
      if (month === 2) daysInMonth = getDaysInFebruary(year);
      else daysInMonth = hash[month];
      dayOfWeek = (dayOfWeek + daysInMonth) % 7;
    
    }
  }
  return result;
}

function getDaysInFebruary(year) {
  if (year % 100 === 0) {
    if (year % 400 === 0) return 29;
    return 28;
  } else if (year % 4 === 0) return 29;
  else return 28;
}

console.log(countSundays());
