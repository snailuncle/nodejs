threads.start(function(){
  //在新线程执行的代码

      log("子线程");
  
});
while(true){
  log("脚本主线程");
}
