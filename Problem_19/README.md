PROBLEM 19: Counting Sunday

> You are given the following information, but you may prefer to do some research for yourself.
> 
> * 1 Jan 1900 was a Monday.
> * Thirty days has September,
> April, June and November.
> All the rest have thirty-one,
> Saving February alone,
> Which has twenty-eight, rain or shine.
> And on leap years, twenty-nine.
> * A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
> 
> How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

In Pseudocode
```
Loop through every year from 1901 to 2000
   Loop through every month
     If the first of that month is a Sunday, add 1 to our result
```

But how do we know whether the first of the month is a Sunday? Well, we keep track of the `dayOfWeek` for the 1st of each month, 
then for each month, reassign `dayOfWeek`: 

`dayOfWeek = (dayOfWeek + daysInMonth) % 7`


Now that we understand the algorithm, let's code it. First, create a hash of each month and how many days it has (except February, which has to be done separately).

```javascript
var hash = { 1: 31, 3: 31, 4: 30,
             5: 31, 6: 30, 7: 31,
             8: 31, 9: 30, 10: 31,
             11: 30, 12: 31 }
```

 
From Google, we know that Jan 1, 1901 was a Tuesday (I'm not sure why they told us the day of week for Jan 1, 1900 instead).
For `dayOfWeek`, define 0 to be Sunday, 1 to be Monday, and so on.
The tricky part is how many days are in February, so I factored that out into a separate function.

```javascript
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
```
Now let's write `getDaysInFebruary`

```javascript
function getDaysInFebruary(year) {
  if (year % 100 === 0) {
    if (year % 400 === 0) return 29;
    return 28;
  } else if (year % 4 === 0) return 29;
  else return 28;
}
```

Our solution is:

> 171 

