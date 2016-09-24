const NodeRSA = require('node-rsa');
const fs = require('fs');

var encFile = process.argv[2];
var privateKey = process.argv[3];

fs.readFile(privateKey, (err, privateKeyData) => {
  fs.readFile(encFile, (err, encFileData) => {
    var key = new NodeRSA(privateKeyData.toString());
    console.log(key.decrypt(encFileData.toString()).toString());
  });
});
