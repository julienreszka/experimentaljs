var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello LOLILOL')
})
 
const port = 8080

app.listen(port, () => {
  console.log('server on port ' + port)
})

// for some reason port 3000 doesn't work
// and might already be in use ?
