// main.js

const rp = require('request-promise')
const cheerio = require('cheerio')

const options = {
  uri: `https://www.example.com`,
  transform: function (body) {
    return cheerio.load(body);
  }
};

rp(options)
  .then(($) => {
    console.log($('h1').text());
  })
  .catch((err) => {
    console.log(err);
  });
