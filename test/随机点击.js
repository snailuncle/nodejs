// var _toast_ = toast;
// toast = function(message){
//   _toast_(message);
//   sleep(2000);
// }
// for(var i = 0; i < 100; i++){
//   toast(i);
// }




var _press_ = press;
press = function(x,y,t){

  let x=x+Math.floor(Math.random()*10+1);
  let y=y+Math.floor(Math.random()*10+1);
  let t=t+Math.floor(Math.random()*10+1);


  _press_(x,y,t);
}

