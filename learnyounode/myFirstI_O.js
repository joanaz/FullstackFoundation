var fs = require('fs');
buf=fs.readFileSync(process.argv[2]);
var array=buf.toString().split('\n');
var length=array.length;
console.log(length-1);