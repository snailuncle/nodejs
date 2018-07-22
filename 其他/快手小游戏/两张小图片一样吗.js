





path1="/sdcard/快手小游戏截图/翻翻乐/1-3.png"
path2="/sdcard/快手小游戏截图/翻翻乐/2-1.png"




card=images.read(path1)

imgCenter=images.read(path2)




var p = findImage(card, imgCenter,{
  threshold: 0.4
});

if(p){
  log("一样")
}else{
  log("不一样")
}
