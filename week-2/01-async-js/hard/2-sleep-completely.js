/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  function stuck(){
    return new Promise(function(resolve){
      setTimeout(function(){
        resolve();
      },milliseconds)
    })
  }
  let p = new Promise(function(resolve){
    async function a(){
      resolve(await stuck());
    }
    a();
  })
  return p;
}

sleep(2000).then(function(){
})

module.exports = sleep;
