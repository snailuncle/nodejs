auto();



//请求截图
if(!requestScreenCapture()){
  toast("请求截图失败");
  exit();
}

var _press_ = press;
press = function(x,y,t){
  // log("x=",x,"y=",y,"t=",t)
  x=x+Math.floor(Math.random()*10+1);
  y=y+Math.floor(Math.random()*10+1);
  t=t+Math.floor(Math.random()*10+1);

  sleep(Math.floor(Math.random()*50+1))
  _press_(x,y,t);
}


console.show()
clickedIdiom=[]
clickedword=[]

// 词库中没有的成语="如日方升"


// 词库中没有的成语="一言一行"


// 词库中没有的成语="一无所闻"
词库中没有的成语=""

idiomFilePath="/sdcard/成语大全无换行符.txt"
idiomOriginal=files.read(idiomFilePath)
idiomOriginalLength=idiomOriginal.length-2

// removeStr2





for(let i=0;i<15;i++){
  collectWordsResult=collectWords()
  //采集到的随机汉字
  randomChineseCharacter=collectWordsResult[0]
  log("随机汉字=",randomChineseCharacter)
  // for(let k=0;k<clickedIdiom.length;k++){
  //   randomChineseCharacter=removeStr2(randomChineseCharacter,clickedIdiom[k])
  // }
  // for(let k=0;k<clickedword.length;k++){
  //   randomChineseCharacter=removeStr3(randomChineseCharacter,clickedword[k])
  // }
  // log("去掉点击过的成语之后,随机汉字=",randomChineseCharacter)
  //随机汉字和他的坐标
  randomChineseCharacterObjects=collectWordsResult[1]
  let sequenceNumber=1
  for(let i=0;i<randomChineseCharacter.length;i++){
    chineseCharacter=randomChineseCharacter.charAt(randomChineseCharacter.length - sequenceNumber)
    for(let j=0;j<clickedword.length;j++){
      if(chineseCharacter==clickedword[j]){
        sequenceNumber++;

      }
    }


    if(词库中没有的成语.indexOf(chineseCharacter)!=-1){
      sequenceNumber++;

    }





    chineseCharacter=randomChineseCharacter.charAt(randomChineseCharacter.length - sequenceNumber)

  }

  log("匹配的单个汉字是=",chineseCharacter)
  idiomOutPut=outputIdiom(chineseCharacter)


  //输出搜索出来的成语出搜索出来的成语
  log("输出搜索出来的成语=",idiomOutPut)



  if(idiomOutPut && idiomOutPut.length==4){
    let clicked=false
    let sss=""
    for(let i=0;i<clickedIdiom.length;i++){

      // log("词库中没有的成语=",词库中没有的成语)
      if(clickedIdiom[i].indexOf(idiomOutPut) != -1){
        // 1234
        // 3412
        // aaa3421=false
        // aaa4132=false
        if(clickedword.indexOf(idiomOutPut+"3412")==-1){
          sss=clickIdiom3412(idiomOutPut)+"3412"
          词库中没有的成语=词库中没有的成语+sss
        }else if(clickedword.indexOf(idiomOutPut+"4132")==-1){
          sss=clickIdiom4132(idiomOutPut)+"4132"
          词库中没有的成语=词库中没有的成语+sss

        }else if(clickedword.indexOf(idiomOutPut+"2413")==-1){
          sss=clickIdiom2413(idiomOutPut)+"2413"
          词库中没有的成语=词库中没有的成语+sss

        }else if(clickedword.indexOf(idiomOutPut+"2314")==-1){
          sss=clickIdiom2314(idiomOutPut)+"2314"
          词库中没有的成语=词库中没有的成语+sss

        }else if(clickedword.indexOf(idiomOutPut+"3124")==-1){
          sss=clickIdiom3124(idiomOutPut)+"3124"
          词库中没有的成语=词库中没有的成语+sss

        }else if(clickedword.indexOf(idiomOutPut+"3142")==-1){
          sss=clickIdiom3142(idiomOutPut)+"3142"
          词库中没有的成语=词库中没有的成语+sss

        }else if(clickedword.indexOf(idiomOutPut+"2143")==-1){
          sss=clickIdiom2143(idiomOutPut)+"2143"
          词库中没有的成语=词库中没有的成语+sss

        }else if(clickedword.indexOf(idiomOutPut+"1243")==-1){
          sss=clickIdiom1243(idiomOutPut)+"1243"
          词库中没有的成语=词库中没有的成语+sss

        }






        clicked=true
        break;
      }
    }
    if(clicked==false){
      sss=clickIdiom(idiomOutPut)
      词库中没有的成语=词库中没有的成语+sss

    }
    sleep(200)
    clickedIdiom.push(sss)
  }else{
    clickedword.push(chineseCharacter)
  }
}



function checkBeforeClick(){
  var img = captureScreen();
// 082356  40
  for(var name in randomChineseCharacterObjects){
    // let names
    // names+=name+": "+randomChineseCharacterObjects[name]+", ";
    // log(names)
    // log(x,y)
    let x=randomChineseCharacterObjects[name].x+40
    let y=randomChineseCharacterObjects[name].y
    // log(x,y)
    var color = images.pixel(img, x, y);
    if(colors.isSimilar(color, "#562308")){
      // log(x,y,"这里的颜色是黑色")
      press(x,y,50)
      sleep(200)
    }
  }
}

// 点击成语  知难行易  小心翼翼
function clickIdiom(idiom){
  log(idiom,"点击顺序1234")

  checkBeforeClick()
 log("clickIdiom接收的参数idiom=",idiom)
  let word1=idiom.slice(0,1)
  let word2=idiom.slice(1,2)
  let word3=idiom.slice(2,3)
  let word4=idiom.slice(3,4)
  let words=[word1,word2,word3,word4]
  let clickedWord=""
  for(let i=0;i<4;i++){
    let x=randomChineseCharacterObjects[words[i]].x
    let y=randomChineseCharacterObjects[words[i]].y


      if(clickedWord.indexOf(words[i]) != -1){

    x=randomChineseCharacterObjects[words[i]].xx
    y=randomChineseCharacterObjects[words[i]].yy

  }
  // log("x=",x,"y=",y)

    press(x,y,50)
    // log("1234点击了")
    clickedWord=clickedWord+words[i]
    sleep(200)
  }
  return idiom
}


// 点击成语
function clickIdiom3412(idiom){
  log(idiom,"点击顺序3412")

  checkBeforeClick()
 //log"clickIdiom接收的参数idiom=",idiom)
  let word1=idiom.slice(0,1)
  let word2=idiom.slice(1,2)
  let word3=idiom.slice(2,3)
  let word4=idiom.slice(3,4)
  let words=[word3,word4,word1,word2]
  let clickedWord=""
  for(let i=0;i<4;i++){
    let x=randomChineseCharacterObjects[words[i]].x
    let y=randomChineseCharacterObjects[words[i]].y


      if(clickedWord.indexOf(words[i]) != -1){

    x=randomChineseCharacterObjects[words[i]].xx
    y=randomChineseCharacterObjects[words[i]].yy

  }

    press(x,y,50)
    clickedWord=clickedWord+words[i]
    sleep(200)
  }
  return idiom

}

// 点击成语
function clickIdiom1243(idiom){
  log(idiom,"点击顺序1243")

  checkBeforeClick()
 //log"clickIdiom接收的参数idiom=",idiom)
  let word1=idiom.slice(0,1)
  let word2=idiom.slice(1,2)
  let word3=idiom.slice(2,3)
  let word4=idiom.slice(3,4)
  let words=[word1,word2,word4,word3]
  let clickedWord=""
  for(let i=0;i<4;i++){
    let x=randomChineseCharacterObjects[words[i]].x
    let y=randomChineseCharacterObjects[words[i]].y


      if(clickedWord.indexOf(words[i]) != -1){

    x=randomChineseCharacterObjects[words[i]].xx
    y=randomChineseCharacterObjects[words[i]].yy

  }

    press(x,y,50)
    clickedWord=clickedWord+words[i]
    sleep(200)
  }
  return idiom

}
function clickIdiom2143(idiom){
  log(idiom,"点击顺序2143")

  checkBeforeClick()
 //log"clickIdiom接收的参数idiom=",idiom)
  let word1=idiom.slice(0,1)
  let word2=idiom.slice(1,2)
  let word3=idiom.slice(2,3)
  let word4=idiom.slice(3,4)
  let words=[word2,word1,word4,word3]
  let clickedWord=""
  for(let i=0;i<4;i++){
    let x=randomChineseCharacterObjects[words[i]].x
    let y=randomChineseCharacterObjects[words[i]].y


      if(clickedWord.indexOf(words[i]) != -1){

    x=randomChineseCharacterObjects[words[i]].xx
    y=randomChineseCharacterObjects[words[i]].yy

  }

    press(x,y,50)
    clickedWord=clickedWord+words[i]
    sleep(200)
  }
  return idiom

}
function clickIdiom2314(idiom){
  log(idiom,"点击顺序2314")

  checkBeforeClick()
 //log"clickIdiom接收的参数idiom=",idiom)
  let word1=idiom.slice(0,1)
  let word2=idiom.slice(1,2)
  let word3=idiom.slice(2,3)
  let word4=idiom.slice(3,4)
  let words=[word2,word3,word1,word4]
  let clickedWord=""
  for(let i=0;i<4;i++){
    let x=randomChineseCharacterObjects[words[i]].x
    let y=randomChineseCharacterObjects[words[i]].y


      if(clickedWord.indexOf(words[i]) != -1){

    x=randomChineseCharacterObjects[words[i]].xx
    y=randomChineseCharacterObjects[words[i]].yy

  }

    press(x,y,50)
    clickedWord=clickedWord+words[i]
    sleep(200)
  }
  return idiom

}
function clickIdiom4132(idiom){
  log(idiom,"点击顺序4132")
  checkBeforeClick()
 //log"clickIdiom接收的参数idiom=",idiom)
  let word1=idiom.slice(0,1)
  let word2=idiom.slice(1,2)
  let word3=idiom.slice(2,3)
  let word4=idiom.slice(3,4)
  let words=[word4,word1,word3,word2]
  let clickedWord=""
  for(let i=0;i<4;i++){
    let x=randomChineseCharacterObjects[words[i]].x
    let y=randomChineseCharacterObjects[words[i]].y


      if(clickedWord.indexOf(words[i]) != -1){

    x=randomChineseCharacterObjects[words[i]].xx
    y=randomChineseCharacterObjects[words[i]].yy

  }

    press(x,y,50)
    clickedWord=clickedWord+words[i]
    sleep(200)
  }
  return idiom

}
function clickIdiom2413(idiom){
  log(idiom,"点击顺序2413")
  checkBeforeClick()
 //log"clickIdiom接收的参数idiom=",idiom)
  let word1=idiom.slice(0,1)
  let word2=idiom.slice(1,2)
  let word3=idiom.slice(2,3)
  let word4=idiom.slice(3,4)
  let words=[word2,word4,word1,word3]
  let clickedWord=""
  for(let i=0;i<4;i++){
    let x=randomChineseCharacterObjects[words[i]].x
    let y=randomChineseCharacterObjects[words[i]].y


      if(clickedWord.indexOf(words[i]) != -1){

    x=randomChineseCharacterObjects[words[i]].xx
    y=randomChineseCharacterObjects[words[i]].yy

  }

    press(x,y,50)
    clickedWord=clickedWord+words[i]
    sleep(200)
  }
  return idiom

}


function clickIdiom3142(idiom){
  log(idiom,"点击顺序3142")
  checkBeforeClick()
 //log"clickIdiom接收的参数idiom=",idiom)
  let word1=idiom.slice(0,1)
  let word2=idiom.slice(1,2)
  let word3=idiom.slice(2,3)
  let word4=idiom.slice(3,4)
  let words=[word3,word1,word4,word2]
  let clickedWord=""
  for(let i=0;i<4;i++){
    let x=randomChineseCharacterObjects[words[i]].x
    let y=randomChineseCharacterObjects[words[i]].y


      if(clickedWord.indexOf(words[i]) != -1){

    x=randomChineseCharacterObjects[words[i]].xx
    y=randomChineseCharacterObjects[words[i]].yy

  }

    press(x,y,50)
    clickedWord=clickedWord+words[i]
    sleep(200)
  }
  return idiom

}
function clickIdiom3124(idiom){
  log(idiom,"点击顺序3124")
  checkBeforeClick()
 //log"clickIdiom接收的参数idiom=",idiom)
  let word1=idiom.slice(0,1)
  let word2=idiom.slice(1,2)
  let word3=idiom.slice(2,3)
  let word4=idiom.slice(3,4)
  let words=[word3,word1,word2,word4]
  let clickedWord=""
  for(let i=0;i<4;i++){
    let x=randomChineseCharacterObjects[words[i]].x
    let y=randomChineseCharacterObjects[words[i]].y


      if(clickedWord.indexOf(words[i]) != -1){

    x=randomChineseCharacterObjects[words[i]].xx
    y=randomChineseCharacterObjects[words[i]].yy

  }

    press(x,y,50)
    clickedWord=clickedWord+words[i]
    sleep(200)
  }
  return idiom

}


function collectWords(){
  let s={}
  let words=""
  // var cc=className("android.view.View").bounds(132,822,258,948).find()
  // var cc=className("android.view.View").boundsContains( 115,  806,964, 1375,).find()
  // var cc=className("android.view.View").boundsContains(128,798,968,1218).find()
  // var cc=className("android.view.View").boundsContains(  114,  765, 966, 1320).find()
  var cc=className("android.view.View").boundsContains(129,792,966,1209).find()
  // log("cc=",cc)

  // cc.forEach(function(element) {
  //   element.children().forEach(function(child){
  //       log("child=",child);
  //   });
  // })








  // log("ccLength=",cc.length)
  cc.forEach(function(element) {

    element.children().forEach(function(child){

      child.children().forEach(function(child2){

        child2.children().forEach(function(child3){

          child3.children().forEach(function(child4){

            if(child4.text().length==1){
              // log("text的长度是1=",element.text().length)
              if(words.indexOf(child4.text()) == -1){

                words=words+child4.text()
              }



              // log("element.text()=",element.text())
              // log("words=",words)
              //这里处理重叠字
              // obj.hasOwnProperty('name'); // --> true

              if(!s.hasOwnProperty(child4.text())){

                s[child4.text()]={x:child4.bounds().centerX(),y:child4.bounds().centerY()}
              }else{
                s[child4.text()]['xx']=child4.bounds().centerX()
                s[child4.text()]['yy']=child4.bounds().centerY()




              }








            }else{
              // log("text的长度不是1=",element.text().length)
            }





                  });





                });





      });



  });

  });








  log("最终的words=",words)
  return [words,s]
}




function outputIdiom(word){
  // word="光" //----------------------------------

  // randomChineseCharacter="和光同尘"

  log("搜索的单个汉字是",word)




 //log"outputIdiom接收的参数word=",word)
  //遍历所有包含*左*的成语
  containWordResult=containWord(word)
//  log("containWordResult=",containWordResult)
  // exit()
  //遍历所有包含*左*的成语,的其余三个字符,是否在randomChineseCharacter中

  containWordResultLength=containWordResult.length

  let s=""
  let cursor=0
  // log("157行containWordResultLength=",containWordResultLength)
  while(cursor<containWordResultLength){
    let remainThreeWords=removeWord(containWordResult.slice(cursor,cursor+4),word)
    let count=0
    let cursor2=0
    while(cursor2<3){
      if(randomChineseCharacter.indexOf(remainThreeWords.slice(cursor2,cursor2+1)) != -1){
        count++;
      }
      cursor2++;
    }
    if(count==3){
      return containWordResult.slice(cursor,cursor+4)
    }
    cursor=cursor+4
  }
  return false
}

function removeStr2(str1,str2){
  let word1=str2.slice(0,1)
  let word2=str2.slice(1,2)
  let word3=str2.slice(2,3)
  let word4=str2.slice(3,4)

  let result
  result=str1.replace(word1,"");
  result=result.replace(word2,"");
  result=result.replace(word3,"");
  result=result.replace(word4,"");
  return result
}
function removeStr3(str1,str2){
  let result=str1.replace(str2,"");
  return result
}

function removeWord(idiom,word){
  return idiom.replace(word,"");
}


//返回包含指定字符的成语数组
function containWord(word){
  idiomOriginal=files.read(idiomFilePath)
  ////logidiomOriginal.slice(0,8))
  // exit()
  let s=""
  let cursor=0
  while(cursor<idiomOriginalLength){
    // sleep(1000)
    ////logidiomOriginal.slice(cursor,cursor+4))
    if(idiomOriginal.slice(cursor,cursor+4).indexOf(word) != -1){
      ////log"循环中")
      ////logidiomOriginal.slice(cursor,cursor+4))
      s=s+idiomOriginal.slice(cursor,cursor+4)
    }
    cursor=cursor+4
  }
  ////logs)
  // exit()
  return s
}

// cursor
