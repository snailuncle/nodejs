var _press_ = press;
press = function(x,y,t){
  // log("x=",x,"y=",y,"t=",t)
  x=x+Math.floor(Math.random()*10+1);
  y=y+Math.floor(Math.random()*10+1);
  t=t+Math.floor(Math.random()*10+1);

  sleep(Math.floor(Math.random()*50+1))
  _press_(x,y,t);
}



press = function(x,y,t){
  var ra = new RootAutomator();
  ra.press(x,y,t);
  ra.exit();
}



