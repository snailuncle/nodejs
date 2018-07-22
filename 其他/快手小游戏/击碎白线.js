
auto();
//思路:
//找飞机,
//比飞机高的有没有红色
//有红色就不动
//没有红色就动
if(!requestScreenCapture()){
    log("请求截图失败");
    exit();
}
imgPath="/sdcard/快手小游戏截图/";
files.ensureDir(imgPath);
kk=10
while(1){
  img = captureScreen();
  aircraftXY=aircraftFind(img)
  if(aircraftXY){
    //比飞机高的地方有没有红色
    //有红色就不动
    //没有红色就动
    //长度125
    log("找到飞机了")
    // let xy1={x:531,y:1041}
    // let xy2={x:548,y:1426}
    let xy1={x:531,y:aircraftXY.y-125}
    let xy2={x:548,y:aircraftXY.y}
    if(hasRed(img,xy1,xy2)){
      log("有危险的颜色,等待危险过去")
    }else{
      log("安全,开始行动")

      for(let i=0;i<kk;i++){
        press(540,1527,1)
      }
    }
  }else{
    log("没找到飞机了")
    let xy1={x:531,y:1041}
    let xy2={x:548,y:1426}
    if(hasRed(img,xy1,xy2)){
      log("有危险的颜色,等待危险过去")
    }else{
      log("安全,开始行动")

      for(let i=0;i<kk;i++){
        press(540,1527,1)
      }
    }
  }
}
// 000000
// F22223
function hasRed(img,xy1,xy2){
  // 531,1041
  // 548,1426
  // region: [531,1041, 17, 385],
  let x1=xy1.x
  let y1=xy1.y
  let w=17
  let h=100
  var pointBlack = findColor(img, "#000000", {
    region: [x1,y1, w, h],
    threshold: 4
  });
  if(pointBlack){
    log("找到啦:" + "是黑色");
    return true
  }
  var pointRed = findColor(img, "#F22223", {
    region: [x1,y1, w, h],
    threshold: 4
  });
  if(pointRed){
    log("找到啦:" + "是红色");
    return true
  }
  return false
}
function aircraftFind(img) {
  // region: [28,1152,988,1811],
  var rocket = images.read(imgPath+"飞机.png");
  //截图并找图
  var pLeft = findImage(img, rocket, {
      region: [122,1197,83,564],
      threshold: 0.8
  });
  if (pLeft) {
    return pLeft
  }

  //截图并找图
  // 863, 1331,  952, 1881,
  var pRight = findImage(img, rocket, {
      region: [863, 1331,89,550],
      threshold: 0.8
  });
  if (pRight) {
    return pRight
  }

  return false

}
