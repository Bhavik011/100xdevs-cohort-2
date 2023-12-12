

setInterval(function(){
  let date = new Date();
  let suffix = date.getHours()>=12?"PM":"AM"
  let hours = date.getHours()%12;
  console.log(`${hours}:${date.getMinutes()}:${date.getSeconds()} ${suffix}`);
},1000)