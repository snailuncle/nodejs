auto()
助记词原始=[ 'enforce',
'shallow',
'job',
'damp',
'flight',
'appear',
'couple',
'panic',
'picture',
'jelly',
'earn',
'load' ]

助记词随机=[]
c=className("android.widget.TextView").textMatches(/[a-z]+/).find()
c.forEach(element => {
  let word=element.text()
  let x=element.bounds().centerX()
  let y=element.bounds().centerY()
  助记词随机.push({word:word,x:x,y:y})
});


for(let i=0;i<助记词原始.length;i++){
  for(let j=0;j<助记词随机.length;j++){
    if(助记词原始[i]==助记词随机[j]["word"]){
      let x=助记词随机[j].x
      let y=助记词随机[j].y
      press(x,y,5)
      sleep(100)
    }



  }

}
