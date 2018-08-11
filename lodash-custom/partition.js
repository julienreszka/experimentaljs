var _ = require('lodash')

var test = _.partition([1, 2, 3, 4], n => n % 2);
// it will create two arays out of the input array
// one with values that meet n % 2 
// one that doesn't meet n % 2
console.log(test)
// it should log
// [ [ 1, 3 ], [ 2, 4 ] ]

var test2 = _.partition([1, 2, 3, 4], n => n <= 1);
// it will create two arays out of the input array
// one with values that meet n <= 1 
// one that doesn't meet n <= 
console.log(test2)
// it should log
// [ [ 1 ], [ 2, 3, 4 ] ]

var test3 = _.partition([1, 2, 3, 4], n => n == 7);
// it will create two arays out of the input array
// one with values that meet n == 7 
// one that doesn't meet n == 7
console.log(test3)
// it should log
// [ [], [ 1, 2, 3, 4 ] ]