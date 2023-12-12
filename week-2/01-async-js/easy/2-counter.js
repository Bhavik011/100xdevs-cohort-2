
function callback(){
let p = new Promise(function(resolve){
  setTimeout(function(){
    let date = new Date();
    resolve(date.getSeconds());
  },1000)
})
return p;
}

async function hello(){
  while(true){
  console.log(await callback());
  }
}
 
hello();

