auto()
console.show()
// importClass('java.io.File');
// path='/sdcard/jsoup.jar'
// jarToAdd = new File(path);
// log(jarToAdd)


r= java.lang.System.getProperty("java.class.path");

// r=java.lang.class.getClass().getResource("/").getPath()

log(r)



exit()
// new URLClassLoader(((URLClassLoader) ClassLoader.getSystemClassLoader()).getURLs()) {
//     @Override
//     public void addURL(URL url) {
//          super.addURL(url);
//     }
// }.addURL(jarToAdd.toURI().toURL());


// importClass('org.junit.Test');
//             Thread.currentThread().getContextClassLoader().getResource("").getPath();
// r=java.lang.Thread.currentThread().getContextClassLoader().getResource("").getPath();

r = new ClassPathResource("java/io/File.class");
// r=java.lang.getClass().getResource("")
log(r)

// path='/sdcard/jsoup.jar'
// runtime.loadJar(path)

// importClass(Packages.org.jsoup.Jsoup);


// html = "<html><head><title> 这里是字符串内容</title></head"+ ">"+"<body><p class='p1'> 这里是 jsoup 作用的相关演示</p></body></html>";
// doc = Jsoup.parse(html);
// links = doc.select("p[class]");

// log(links)

exit()


// function outputObj(obj) {
// 	var description = "";
// 	for (var i in obj) {
// 		description += i + " = " + obj[i] + "\n";
// 	}
// 	log(description);
// }

// function outputObj(obj) {
// 	var description = "";
// 	for (var i in obj) {
// 		description += i + "\n";
// 	}
// 	log(description);
// }

// outputObj(runtime)
// log(runtime.class)

exit()
log(java.lang.System.getProperty("java.class.path"));//系统的classpaht路径
log(java.lang.System.getProperty("user.dir"));//系统的classpaht路径

classPath = java.lang.Thread.currentThread().getContextClassLoader().getResource("")
			log(classPath)




path2 = java.lang.Thread.currentThread().getContextClassLoader().getResource("")
// .getPath();


log("path2=",path2)

importClass('java.lang.Thread');
importClass('java.io.BufferedReader');
importClass('java.io.IOException');
importClass('java.io.InputStream');
importClass('java.io.InputStreamReader');
importClass('java.io.OutputStream');
importClass('java.io.PrintWriter');
importClass('java.net.Socket');
importClass('java.net.ServerSocket');
importClass('java.io.File');
importClass('java.net.URL');



path = java.lang.System.getProperty("java.class.path");
log("path========================",path)
path4 = java.lang.Thread.currentThread().getContextClassLoader ().getResource("")

log("path3333333333========================",path4)



java.lang.Class.class.getClass().getResource("/").getPath()










classLoader = Thread.currentThread().getContextClassLoader().getResource("")
// classLoader = getClass().getClassLoader();
log("classLoader=",classLoader)
/**
getResource()方法会去classpath下找这个文件，获取到url resource, 得到这个资源后，调用url.getFile获取到 文件 的绝对路径
*/
// URL url = classLoader.getResource(fileName);
// /**
//  * url.getFile() 得到这个文件的绝对路径
//  */
// System.out.println(url.getFile());
// File file = new File(url.getFile());




importPackage(Packages.jsoup);
// importPackage(Packages.org.jsoup);
// import java.io.IOException;
// import org.jsoup.Jsoup;
// import org.jsoup.nodes.Document;
// import org.jsoup.nodes.Element;
// import org.jsoup.select.Elements;


html = "<html><head><title> 这里是字符串内容</title></head"+ ">"+"<body><p class='p1'> 这里是 jsoup 作用的相关演示</p></body></html>";
doc = Jsoup.parse(html);
links = doc.select("p[class]");

log(links)












exit()
// question=questionExtract()
// id=tv_question_content
// bounds=60,472,1020,653
// text=月球能够发光是因为



// options=optionsExtract()
// id=tv_option_text
// bounds=210,850,870,907
// text=反射太阳光


question="月球能够发光是因为"
// question="月球能够发光是因为?"
options=["反射太阳光","自己发光"]

// 句子分值100分,
// 分词之后,每个词语得分100/n
// 查看每个分词出现的次数
// 在同样的搜索结果中对比









url="http://www.baidu.com/s?wd="+question
log(url)
console.show();
var r = http.get(url);

baiduAnswer=r.body.string()

// log(baiduAnswer)

var text = baiduAnswer;
//写入文件
files.write("/sdcard/1.txt", text);
//用其他应用查看文件
app.viewFile("/sdcard/1.txt");

//使用百度AI的短文本相似度

// 显示=[]
// 引擎 = ["百度:", "搜狗:", "360:", "UC"]
// 搜索网址 = []
// 搜索网址[0] = "www.baidu.com/s?word=" + 题目
// 搜索网址[1] = "https://www.sogou.com/web?query=" + 题目
// 搜索网址[2] = "http://m.so.com/s?q=" + 题目
// 搜索网址[3] = "http://so.m.sm.cn/s?q=" + 题目
// for (var a = 0; a < 4; a++) {
// threads.start(function(){
// //在新线程执行的代码
// 搜索(搜索网址[a],引擎[a])

// });
// sleep(100)
// }
// // http.get("http://www.zhinengweixiu.cn/fuzhu/ucdt/index.asp?"+str)
// ui.run(function(){
//     settings= w.aa.getSettings()
//     settings.setSupportZoom(true);
//  settings.setUseWideViewPort(true);
// // settings.setLayoutAlgorithm(LayoutAlgorithm.NARROW_COLUMNS);
// // settings.setLoadWithOverviewMode(true);
//     settings.setTextZoom(40); //设置字体
//     w.aa.loadUrl("http://www.baidu.com/s?word="+题目);//设置网址
// // w.aa.loadUrl("http://m.sogou.com/web/searchList.jsp?keyword="+str);
// //w.aa.loadUrl("http://m.so.com/s?q="+str);
// });
// });
// }
