const fs = require('fs')
const googleIt = require('google-it')
const options = {

}

googleIt({options, 'query': 'Cat videos'}).then(results => {
  console.log(results);
  fs.writeFile("results.json", JSON.stringify(results), 'utf8');
}).catch(e => {
  console.log(e)
})