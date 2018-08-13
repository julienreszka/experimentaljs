// streaming.js

var request = require('request')
var fs = require('fs')

request('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')
  .pipe(fs.createWriteStream('Google-logo.png'))