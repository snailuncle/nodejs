//快手小游戏<翻翻乐>
//请求截图
if(!requestScreenCapture()){
  toast("请求截图失败");
  exit();
}

pressTime=1
pressIntervalTime = 10;

//思路
// 一边翻牌子,一遍去仓库对比

// // 创建一个二维数组
// grids=[[]]

// 背景色="541730"
// 待翻牌子颜色="ED5B91"

pukeColor="#915bed"
backgroundColor="#301754"
// // 横4   竖6
// 211,504

// 426,507

// 213,725
//图片宽高
// imgWidthHeight = [76, 50]
columnsNumber=4
rowsNumber=6
imgPath="/sdcard/快手小游戏截图/翻翻乐/";
imgPathWareHouse="/sdcard/快手小游戏截图/翻翻乐/仓库";



files.removeDir(imgPath)
files.ensureDir(imgPath);
files.ensureDir(imgPathWareHouse);
// exit()
// 第一个和最后一个图片坐标
imgFistCenterCoordinate = [208,505];
imgLastCenterCoordinate = [855,1575];

// 图片的左右和上下间隔距离
SpacingLeftAndRight = Math.round((imgLastCenterCoordinate[0] - imgFistCenterCoordinate[0]) / (columnsNumber - 1));
SpacingUpAndDown = Math.round((imgLastCenterCoordinate[1] - imgFistCenterCoordinate[1]) / (rowsNumber - 1));

翻拍之后等待的时间=200
// Warehouse=[]
grids = [];
for (var x=0; x<6; x++) {
  grids.push([]);
  for (var y=0; y<4; y++) {
    let xx=imgFistCenterCoordinate[0]+SpacingLeftAndRight*y
    let yy=imgFistCenterCoordinate[1]+SpacingUpAndDown*x
    grids[x].push( {serialNumberX:x,serialNumberY:y,coordinateX:xx, coordinateY:yy,card:"待翻牌",click:function(){
      press(xx,yy,1)
    },colorCenter:function(){
      let img=captureScreen()
      let color=images.pixel(img, xx, yy)
      return color
    }} );
  }
}



for(let kk=0;kk<3;kk++){



  knownGrids=[]

  //遍历能点击的牌子,数组形式,存储的是牌子的序号
  cardCanTurnResult=cardCanTurn()
  lastClick=null
  for(let i=0;i<cardCanTurnResult.length;i++){
    let x=cardCanTurnResult[i].serialNumberX
    let y=cardCanTurnResult[i].serialNumberY



    // log(cardCanTurnResult[i])

    // log(cardCanTurnResult[i].toString())


    cardCanTurnResult[i].click()
    sleep(翻拍之后等待的时间)
    log("点击了格子,序号= ",x,y)

    img=captureScreen()
    let coordinateX=grids[x][y].coordinateX
    let coordinateY=grids[x][y].coordinateY
    colorAfterClick=images.pixel(img, coordinateX, coordinateY)
    if(colors.isSimilar(colorAfterClick, backgroundColor)){
      log("这个格子变成了背景,序号==================================================================== ",x,y)
      if(lastClick){
        grids[lastClick.serialNumberX][lastClick.serialNumberY].card="disappear"
      }
        grids[x][y].card="disappear"
      // break;
    }else{
      log("这个格子翻转后,没有消失,序号= ",x,y)

      let xy={x:coordinateX,y:coordinateY}
      let imgCenterSmall=captureCenter(img,xy)
      grids[x][y].card=imgCenterSmall


      name=x+"-"+y
      images.save(imgCenterSmall, imgPath+name+".png");





      //[img1,img2,img3]   img1={img:img,x:x,y:y}
      // 不能与仓库中的图片一起消失,再放进仓库
      // ,否则,和仓库中的某个图片一起消失

      isImgCenterInKnownGridsResult=isImgCenterInKnownGrids(imgCenterSmall)
      if(isImgCenterInKnownGridsResult){
      log("在仓库中找到了同样的图片,序号= ",x,y,"仓库中的图片=",isImgCenterInKnownGridsResult)

        for(let j=0;j<2;j++){
          grids[x][y].click()
          sleep(pressIntervalTime)
          isImgCenterInKnownGridsResult.click()
          sleep(pressIntervalTime)
        }
        //每次点击之后都要更新仓库中的图片.

        sleep(翻拍之后等待的时间)
        log("点击的两个格子是\n当前格子=",grids[x][y],"仓库中的参照格子=",isImgCenterInKnownGridsResult)




        // 背景有干扰,不适合单个像素点颜色判断
        // if (colors.isSimilar(grids[x][y].colorCenter(),backgroundColor)  && colors.isSimilar(isImgCenterInKnownGridsResult.colorCenter(),backgroundColor)){
        //   log("两个格子上的图片消失了")
        //   //更新仓库中的格子信息
        //   knownGrids.splice(isImgCenterInKnownGridsResult.index,1);
        // }else{
        //   log('这两个格子应该消失,却没有消失,请检查,脚本停止运行')
        //   exit()
        // }




      }else{
        log("仓库中没有同样的图片,序号= ",x,y)

        knownGrids.push(grids[x][y])
        lastClick=grids[cardCanTurnResult[i]]

        imgCenterSmallWareHouse=grids[x][y].card
        name=x+"-"+y
        images.save(imgCenterSmallWareHouse, imgPathWareHouse+name+".png");

      }





    }
    log("一次点击之后仓库中的内容=")
    logKnownGrids()
  }




}




function logKnownGrids(){
  let s=""
  for(let i=0;i<knownGrids.length;i++){
    s=s+knownGrids[i].serialNumberX+knownGrids[i].serialNumberY+","

  }
  return s
}








function isImgCenterInKnownGrids(imgCenter){
  log("比对开始======================================================")
  log("仓库中图片的数量=",knownGrids.length)
  for (var i=0; i<knownGrids.length; i++) {
    var p = findImage(knownGrids[i].card, imgCenter,{
      threshold: 0.8
    });
    if(p){
      knownGrids[i].index=i
      return knownGrids[i]
    }else{
      log("不一样",knownGrids[i].serialNumberX+"-"+knownGrids[i].serialNumberY)
    }
  }
  log("比对结束======================================================")

  return false
}











function captureCenter(img,xy) {
  // log("xy=",xy)
  let k=50
  var clip = images.clip(img, xy.x-30, xy.y-30, k+k, k+k);
  // let imgName=x.toString()+"-"+y.toString()
  // images.save(clip, imgPath+imgName+".png");
  return clip
}














//遍历能点击的牌子,数组形式,存储的是牌子的序号
function cardCanTurn(){
  let img=captureScreen()
  cardCanTurnList = [];
  for (var x=0; x<6; x++) {
    for (var y=0; y<4; y++) {
      let xx=imgFistCenterCoordinate[0]+SpacingLeftAndRight*y
      let yy=imgFistCenterCoordinate[1]+SpacingUpAndDown*x
      let colorAfterClick=images.pixel(img, xx, yy)
      if(colors.isSimilar(colorAfterClick, backgroundColor)){
      }else{
        cardCanTurnList.push( {serialNumberX:x,serialNumberY:y,coordinateX:xx,coordinateY:yy,toString:function(){ return
          "序号("+x+y+") 坐标("+xx+","+yy+")"
        },click:function(){
          press(xx,yy,1)

        }});
      }
    }
  }
  return cardCanTurnList
}












