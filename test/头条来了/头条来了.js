//头条来了

//第一步打开app
packageName = toutiao.yiimuu.appone

appOpen(packageName)

errorTime=0


// 文章特征=text = 评论		07/13 00:06

switch (page)
{
case "首页":
    gamePlay(gameName)
    break;
case "视频":
    gameOpen(gameName)
    break;
case "福利":
    gameResult()
    break;
case "我的":
    chatInterface()
    break;
default:
    if(currentPackage()==packageName){
        sleep(1000);
        errorTime=errorTime+1
        if(errorTime>10){
            appOpen(packageName)
            errorTime=1
        }
        break;
    }else{

        log("当前包名不是头条来了\n当前包名是","="+currentPackage()+"=","包名长度=",currentPackage().length)
        sleep(2000)
        appOpen(packageName)
    }
}







function appOpen(packageName){

  if(currentPackage()==packageName){

  }else{
      toast("启动app头条来了")
      sleep(2000)
      launch(packageName);
      sleep(1000);
  }
  for (let i = 0; i < 15; i++) {

      if(whichPage()=="首页" || whichPage()=="视频" || whichPage()=="福利" || whichPage()=="我的"){
          return true;
      }else{
          sleep(1000);
      }
  }


  log("头条来了启动异常")
  alert()
  return false;
}


function alert(){
  device.vibrate(2000);
  sleep(1000);
  device.vibrate(2000);
  exit();
}





function whichPage(){


  //刷新 视频 福利 我的  (都在底部)--> 首页
  //首页 刷新 福利 我的  (都在底部)--> 视频
  //首页 视频 福利 我的  (都在底部)--> 我的
  // 底部区间  bounds = (0,1768,1080,1920)

  //分享红包 收徒 恭喜发财，大吉大利！ (都在中间)--> 福利

  let w1=null,w2=null,w3=null,w4=null;

  w1 = text("刷新").boundsContains(0,1768,1080,1920).findOnce();
  w2 = text("视频").boundsContains(0,1768,1080,1920).findOnce();
  w3 = text("福利").boundsContains(0,1768,1080,1920).findOnce();
  w4 = text("我的").boundsContains(0,1768,1080,1920).findOnce();
  // w3 = id("msg_container").findOnce();
  if(w1 != null && w2!=null && w3!=null && w4!=null){
      return "首页"
  }

  w2 = text("首页").boundsContains(0,1768,1080,1920).findOnce();
  w1 = text("刷新").boundsContains(0,1768,1080,1920).findOnce();
  w3 = text("福利").boundsContains(0,1768,1080,1920).findOnce();
  w4 = text("我的").boundsContains(0,1768,1080,1920).findOnce();
  // w3 = id("msg_container").findOnce();
  if(w1 != null && w2!=null && w3!=null && w4!=null){
      return "视频"
  }

  w1 = text("首页").boundsContains(0,1768,1080,1920).findOnce();
  w2 = text("视频").boundsContains(0,1768,1080,1920).findOnce();
  w3 = text("福利").boundsContains(0,1768,1080,1920).findOnce();
  w4 = text("我的").boundsContains(0,1768,1080,1920).findOnce();
  // w3 = id("msg_container").findOnce();
  if(w1 != null && w2!=null && w3!=null && w4!=null){
      return "我的"
  }


  // 123,555,1047,1798
  w1 = text("分享红包").boundsContains(123,555,1047,1798).findOnce();
  w2 = text("收徒").boundsContains(123,555,1047,1798).findOnce();
  w3 = text("恭喜发财，大吉大利！").boundsContains(123,555,1047,1798).findOnce();
  w4 = text("偷红包").boundsContains(123,555,1047,1798).findOnce();
  // w3 = id("msg_container").findOnce();
  if(w1 != null && w2!=null && w3!=null && w4!=null){
      return "福利"
  }


  return "脚本不认识这个界面";

}



function 上滑() {
  var x1=700,y1=1600,x2=1000,y2=630,duration=1000;
  swipe(x1, y1, x2, y2, duration)
  sleep(1000)
}

function 下滑() {
  //快速下滑
  var x1=700,y1=800,x2=500,y2=1630,duration=300;
  swipe(x1, y1, x2, y2, duration)
  sleep(1000)
}
