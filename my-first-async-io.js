
var fs = require('fs')  
var path = process.argv[2]  
  
fs.readFile(path, callback);

function callback (err, contents) {  
    console.log(contents.toString().split('\n').length - 1 )  
}