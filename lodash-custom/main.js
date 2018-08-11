var _ = require('lodash')

var test = _.defaults({ 'a': 1 }, { 'a': 3, 'b': 2 });
// it will only keep only one a the first a
console.log(test)
// it should log
// { a: 1, b: 2 }

var test1 = _.defaults({ 'b': 1 }, { 'a': 3, 'b': 2 });
// it will only keep only one b, the first b
console.log(test1)
// it should log
// { b: 1, a: 3 }

var test2 = _.defaults({ 'a': 7, 'b': 1 }, { 'a': 3, 'b': 2 });
// it will only keep only the first a and the first b
console.log(test2)
// it should log
// { a: 7, b: 1 }

