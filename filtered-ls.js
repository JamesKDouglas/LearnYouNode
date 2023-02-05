
// https://joecreager.com/learnyounode-lesson-5-filtered-ls/
var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function(file) {
      if (path.extname(file) === ext) {
          console.log(file)
      }
  })
})

// const fs = require('fs');

// let path = process.argv[2];
// let ext = process.argv[3];

// fs.readdir(path, callback);

// function callback (err, list){
//     if (err){
//         console.log(err);
//         return;
//     }
//     for (let i=0;i<list.length;i++){
//         if (list[i].split(".")[1] === ext){
//             console.log(list[i]);
//         }
//     }
//     return;
// }