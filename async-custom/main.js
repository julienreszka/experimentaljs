// main.js

var async = require('async');

var square = function (num, doneCallback) {
  setTimeout(function () {
    console.log('Squaring', num);
    // A random amount of time has passed.
    // Callback with no error and the result of num * num
    return doneCallback(null, num * num);
  }, 4000 * Math.random());
}

// Square each number in the array [1, 2, 3, 4]
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
})