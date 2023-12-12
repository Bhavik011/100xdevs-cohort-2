const fs = require('fs');

let readData;
let p = new Promise(function (resolve) {
  fs.readFile('easy/demo.txt', 'utf-8', function (err, data) {
    readData = data;
    resolve(readData);
  })
})
p.then(function (readData) {
  return new Promise(function (resolve) {
    let fileData = readData + '\nHi Dear. Please put my phone to charge. I can\'t do it because i don\'t have hands. \nMOYE MOYE'
    fs.writeFile('easy/demo.txt', fileData, 'utf-8', function (err) {
      resolve('File write successful!!:)')
    });
  })
}).then(function (data) {
  console.log(data);
})
