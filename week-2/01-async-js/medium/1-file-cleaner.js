const fs = require('fs');

let p = new Promise(function(resolve){
  fs.readFile('medium/demo.txt','utf-8',function(err,data){
    let cleanData = data.replace(/\s+/g,' ').trim();
    resolve(cleanData);
  })
})

p.then(function(data){
  fs.writeFile('medium/demo.txt',data,'utf-8',function(err){
    console.log("problem solved. write successful!")
  })
})


