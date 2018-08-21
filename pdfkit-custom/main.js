// main.js

var fs = require('fs')
var PDFDocument = require('pdfkit')

var doc = new PDFDocument

doc
.text('My name is...', 100, 100)
.addPage()
.fontSize(50)
.text('Bond', 100, 100)
.text('James Bond', 100, 200)
.end()

doc.pipe(fs.createWriteStream('output.pdf'))