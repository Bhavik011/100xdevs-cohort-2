function Counter(){
  setInterval(function(){
    let date = new Date();
    console.log(date.getSeconds());
  },1000);
  }
  
  Counter();