# mongodb-custom

## Download MongodDB community server

https://www.mongodb.com/download-center#community

Add `C:\Program Files\MongoDB\Server\4.0\bin` to PATH 
https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/


```
$ npm init
$ npm install mongodb --save

```
## Create folder `C:\data\db` (on Windows 10)

## Start a MongoDB Server
```
$ mongod --dbpath=/data
```

## open a second powershell so the server stays up in the first powershell and test the following 3 little apps

```
$ node connect.js
Connected successfully to server

$ node insert-3-docs.js
Connected successfully to server
Inserted 3 documents into the collection

$ node find-all.js
Connected successfully to server
Found the following records
[ { _id: 5b82fb68436f890444f832e7, a: 1 },
  { _id: 5b82fb68436f890444f832e8, a: 2 },
  { _id: 5b82fb68436f890444f832e9, a: 3 } ]
```

