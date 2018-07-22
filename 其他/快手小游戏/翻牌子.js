//快手小游戏<翻翻乐>
//请求截图
if(!requestScreenCapture()){
  toast("请求截图失败");
  exit();
}

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
files.removeDir(imgPath)
files.ensureDir(imgPath);
// exit()
// 第一个和最后一个图片坐标
imgFistCenterCoordinate = [208,505];
imgLastCenterCoordinate = [855,1575];

// 图片的左右和上下间隔距离
SpacingLeftAndRight = Math.round((imgLastCenterCoordinate[0] - imgFistCenterCoordinate[0]) / (columnsNumber - 1));
SpacingUpAndDown = Math.round((imgLastCenterCoordinate[1] - imgFistCenterCoordinate[1]) / (rowsNumber - 1));

img=captureScreen()

// Warehouse=[]
grids = [];
for (var x=0; x<6; x++) {
  grids.push([]);
  for (var y=0; y<4; y++) {
    let xx=imgFistCenterCoordinate[0]+SpacingLeftAndRight*y
    let yy=imgFistCenterCoordinate[1]+SpacingUpAndDown*x
    // log("\nx=",x,"\n y=",y)
    // log("\nxx=",xx,"\n yy=",yy)
    grids[x].push( {x:xx, y:yy,col:pukeColor,card:"unknown"} );
    let xy={x:xx,y:yy}
    // captureCenter(img,xy,x,y)

  }
}


while(1){

  // log(grids)
  logGrids("一开始")

  for (var x=0; x<6; x++) {
    grids.push([]);
    for (var y=0; y<4; y++) {
      let xx=imgFistCenterCoordinate[0]+SpacingLeftAndRight*y
      let yy=imgFistCenterCoordinate[1]+SpacingUpAndDown*x
      let color1
      color1=images.pixel(img, xx, yy)
      if(colors.isSimilar(color1, backgroundColor)){

      }else{
        if(colors.isSimilar(color1, pukeColor)){
          press(xx,yy,1)
          sleep(1000)
          logGrids("每次的例行点击")

          img=captureScreen()
          let xy={x:xx,y:yy}
          let imgCenter=captureCenter(img,xy,x,y)
          let imgCenterFindInGridsResult=imgCenterFindInGrids(imgCenter,x,y)
          if(imgCenterFindInGridsResult){
            log(x,y,"和仓库中的图片一样=",imgCenterFindInGridsResult[1],imgCenterFindInGridsResult[2])
            //点击仓库中的另一个
            let xxx=imgCenterFindInGridsResult[0].x
            let yyy=imgCenterFindInGridsResult[0].y
            // exit()
            // log("xxx=",xxx,"yyy=",yyy)
            press(xxx,yyy,1)
            sleep(1000)
            press(xx,yy,1)
            sleep(1000)
            logGrids("双击之后")

//将消掉的图片card设为unknown
            grids[x][y].card='pass'
            grids[imgCenterFindInGridsResult[1]][imgCenterFindInGridsResult[2]].card='pass'




          }else{
            // 更新仓库图片
            grids[x][y].card=imgCenter
            captureCenter(img,xy,x,y)

          }

        }
      }
    }
  }
}







function imgCenterFindInGrids(imgCenter,xx,yy){
  for (var x=0; x<6; x++) {
    for (var y=0; y<4; y++) {
      let card=grids[x][y].card
      if(card=='unknown' || card=='pass' || (x==xx && y==yy)){

      }else{
        var p = findImage(card, imgCenter,{
          threshold: 0.7
      });
        if(p){

          return [grids[x][y],x,y]
        }
      }

    }
    return false
  }

}





function captureCenter(img,xy,x,y) {
  // log("xy=",xy)
  let k=30
  var clip = images.clip(img, xy.x-30, xy.y-30, k+k, k+k);
  let imgName=x.toString()+"-"+y.toString()
  images.save(clip, imgPath+imgName+".png");
  return clip
}




function logGrids(when){
  // grids
  log(when)
  let s=""
  for (var x=0; x<6; x++) {
    for (var y=0; y<4; y++) {

      if(grids[x][y].card=='unknown' || grids[x][y].card=='pass'){
        s=s+grids[x][y].card+","
      }else{
        s=s+"img"+","

      }



    }
    s=s+"\n"
  }
  log("\n",s)
}
