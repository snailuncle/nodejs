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
c=className("android.widget.EditText").find()
c.forEach(element => {
  let x=element.bounds().centerX()
  let y=element.bounds().centerY()
  let e=element
  助记词随机.push({e:e,x:x,y:y})
});


for(let i=0;i<助记词原始.length;i++){
  log("i=",i)
  sleep(500)
  let x=助记词随机[i].x
  let y=助记词随机[i].y
  press(x,y,5)
  sleep(30)
  let text=助记词原始[i]
  助记词随机[i]["e"].setText(text)
  sleep(30)

}
