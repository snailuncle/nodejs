importClass('java.io.ByteArrayOutputStream');
importClass('java.io.File');
importClass('java.io.FileInputStream');
importClass('java.io.FileNotFoundException');
importClass('java.io.IOException');






// result=java.lang.ClassLoader.getSystemResource("")
// result=java.lang.Class.ClassLoader.getSystemResource("")
r= java.lang.System.getProperty("java.vendor");

// importClass('java.io.File')
// importClass('java.io.PrintStream')
// r=getSystemProperty("java.class.path");

log(r)




//
exit()
// log(java.lang.ClassLoader)
function DiskClassLoader (path) {
// class DiskClassLoader222 extends java.lang.ClassLoader {
  // java.lang.ClassLoader().apply(this,arguments)
  mLibPath = path
  this.findClass=function(name){
    // TODO Auto-generated method stub
    fileName = getFileName(name);
    file = new File(mLibPath,fileName);
    try {
        is = new FileInputStream(file);
        bos = new ByteArrayOutputStream();
        len = 0;
        try {
            while ((len = is.read()) != -1) {
                bos.write(len);
            }
        } catch (e) {
            log(e.stack)
        }
        data = bos.toByteArray();
        is.close();
        bos.close();
        return defineClass(name,data,0,data.length);
    } catch (e) {
        // TODO Auto-generated catch block
        log(e.stack)
    }
    return java.lang.ClassLoader.findClass(name);
  }
  //获取要加载 的class文件名
  this.getFileName=function(name) {
    // TODO Auto-generated method stub
    index = name.lastIndexOf('.');
    if(index == -1){
        return name+".class";
    }else{
        return name.substring(index+1)+".class";
    }
  }
}
DiskClassLoader.prototype = Object.create(java.lang.ClassLoader.prototype);
diskLoader = new DiskClassLoader("/sdcard");
c = diskLoader.loadClass("org.jsoup.Jsoup;")
obj = c.newInstance();
method = c.getDeclaredMethod("Document parse",null);
//通过反射调用Test类的say方法
method.invoke(obj, null);
// function Person(name){
//   this.name=name; //1
//   this.className="person"
//  }
//  Person.prototype.getName=function(){
//   return (this.name)
//  }
//  function Man(name){
//    Person.apply(this,arguments)
//  }
//  //注意此处
//  Man.prototype = Object.create(Person.prototype);
//  var man1=new Man("Davin");
// // log(man1.name)
// log(man1.getName())
