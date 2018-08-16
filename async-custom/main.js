// main.js
// example taken from https://javascriptplayground.com/think-async/

var async = require('async');

var square = function (num, doneCallback) {
  // Call back with no error and the result of num * num
  return doneCallback(null, num * num)
};

// Square each number in the array [1, 2, 3, 4]https://javascriptplayground.com/think-async/
async.map([1, 2, 3, 4], square, function (err, results) {
  // Square has been called on each of the numbers
  // so we're now done!
  // var err = true;
  if (err) {
    console.error(err)
    console.error('lol u f*cked up u dumb m*********r')
  }
  else {
    console.log("Finished!")
    console.log(results)
  }
});