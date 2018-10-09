var fs = require('fs');

var abiParser = require('../index.js');
var content = fs.readFileSync('./abiDefine', 'utf-8');
var testParser = new abiParser();
var abi = testParser.parse(content);

console.log(JSON.stringify(abi));