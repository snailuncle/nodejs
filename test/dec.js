class Boy{
  @speak('中文')
  run(){
    console.log('i can run')
    console.log('i can speak '+this.language)
  }
}


function speak(language){
  return function(target,key,descriptor){
    console.log("target=",target)
    console.log("key=",key)
    console.log("descriptor=",descriptor)
    target.language=language
    return descriptor
  }

}



const luke=new Boy()


luke.run()
