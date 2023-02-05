const fs = require('fs');

let path = process.argv[2];

let buff = fs.readFileSync(path);

print(buff);

function print(buff){
    console.log(buff.toString().split("\n").length-1);
}