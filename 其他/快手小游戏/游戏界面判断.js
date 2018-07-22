auto();

function 是否游戏界面(){


  // function isWidgetSame(widget,[bounds,id,text,className]){
  爸爸=packageName("com.kwai.sogame").className("android.widget.FrameLayout").depth(0).bounds(0,0,1080,1920).findOnce()

  if(爸爸){
    log(爸爸)
    r=爸爸.childCount()
    log("游戏窗口=",r)
  }else{
    log("游戏窗口爸爸不在")
    // return ;
  }


  if(爸爸 && 爸爸.childCount()==1){
    儿子=爸爸.child(0)
    if(儿子.bounds().toString()=="Rect(4, 7 - 1076, 1914)" && 儿子.id()==null && 儿子.text()=="" && 儿子.className()=="android.widget.LinearLayout"){
      log("儿子是亲生的")
      if(儿子.childCount()==1){
        孙子=儿子.child(0)

        if(孙子.bounds().toString()=="Rect(4, 7 - 1076, 1914)" && 孙子.id()=="android:id/content" && 孙子.text()=="" && 孙子.className()=="android.widget.FrameLayout"){
          log("孙子是亲生的")
          if(孙子.childCount()==2){
            孙子的大儿子=孙子.child(0)
            孙子的小儿子=孙子.child(1)
            大儿子身世信息对比结果= isWidgetSame(孙子的大儿子,["Rect(4, 7 - 1076, 1914)",null,"","android.widget.FrameLayout"])
            小儿子身世信息对比结果= isWidgetSame(孙子的小儿子,["Rect(25, 30 - 127, 132)",null,"","android.widget.ImageView"])

            if(大儿子身世信息对比结果 && 小儿子身世信息对比结果){
              log("孙子的两个儿子都是亲生的")


              if(孙子的大儿子.childCount()==1){
                孙子的大儿子的儿子=孙子的大儿子.child(0)
                log("孙子的大儿子的儿子=",孙子的大儿子的儿子)
                大儿子的儿子身世信息对比结果= isWidgetSame(孙子的大儿子的儿子,["Rect(4, 7 - 1076, 1914)",null,"","android.view.View"])
                if(大儿子的儿子身世信息对比结果){
                  log("大儿子的儿子是亲生的")
                  if(孙子的大儿子的儿子.childCount()==0){
                    log("当前是游戏界面")
                    return true
                  }

                }
              }
            }else{
              log("不一定两个儿子都是亲生的")
              log("孙子的大儿子=",孙子的大儿子)
              log("孙子的小儿子=",孙子的小儿子)
            }
          }
        }else{
          log("孙子不是亲生的")
        }
      }
    }else{
      log("儿子不是亲生的")

    }

  }

  return false
}



function outputObj(obj) {
	var description = "";
	for (var i in obj) {
		description += i + " = " + obj[i] + "\n";
	}
	log(description);
}

function isWidgetSame(widget,[bounds,id,text,className]){
  if(widget.bounds().toString()==bounds && widget.id()==id && widget.text()==text && widget.className()==className){
    return true
  }
  return false
}

