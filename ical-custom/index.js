// https://www.npmjs.com/package/ical
var ical = require('ical')
var _ = require('lodash')

var data = ical.parseFile('leshorairesdusoleil.ics')

groupedData = _.groupBy(data, 'summary')

console.log(groupedData['Lever de soleil'])
