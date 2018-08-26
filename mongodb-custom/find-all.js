const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents')
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null)
    console.log("Found the following records")
    console.log(docs)
    callback(docs)
  })
}
 
// Connection URL
const url = 'mongodb://localhost:27017'
 
// Database Name
const dbName = 'myproject'
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err)
  console.log("Connected successfully to server")
 
  const db = client.db(dbName)
 
  findDocuments(db, function() {
    client.close();
  })
})