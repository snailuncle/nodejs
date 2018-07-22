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
t=66
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
    press(xy.x,xy.y,1)
    sleep(t)
  }
}
