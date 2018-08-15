// main.js

var moment = require('moment')

tests = [
moment(),
moment("1995-12-25"),
moment("2013-W01-1"), 
// https://www.timeanddate.com/calendar/?year=2013&country=5 
// Calendar starts in 2012 with 31 of december
moment("2013-W06-5")
]

var i = 0;
while (i < tests.length) {
  console.log(i);
  console.log(tests[i])
  i++;
}

