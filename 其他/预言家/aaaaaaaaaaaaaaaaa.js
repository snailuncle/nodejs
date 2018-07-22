// 支持  xpath  和  document
// javax.xml.xpath.XPathFactory
// javax.xml.parsers.DocumentBuilder
// javax.xml.parsers.DocumentBuilderFactory


importClass('java.io.File')
importClass('org.xml.sax.InputSource')
importClass('java.io.ByteArrayInputStream')
importClass('javax.xml.parsers.DocumentBuilderFactory')


function documentDenerate(xmlfile){
  let factory=javax.xml.parsers.DocumentBuilderFactory.newInstance();
  factory.setNamespaceAware(true);
  factory.setIgnoringComments(false);
  factory.setIgnoringElementContentWhitespace(false);
  factory.setValidating(false);
  factory.setCoalescing(false);
  let builder = factory.newDocumentBuilder();


  // result=builder.parse
  // log("result=",result)
  // exit()


  // function parse() {/*
  //   org.w3c.dom.Document parse(org.xml.sax.InputSource)
  //   org.w3c.dom.Document parse(java.lang.String)
  //   org.w3c.dom.Document parse(java.io.InputStream)
  //   org.w3c.dom.Document parse(java.io.File)
  //   org.w3c.dom.Document parse(java.io.InputStream,java.lang.String)
  //   */}








  return builder.parse(new File(xmlfile));
}




  // XPathFactory factory = XPathFactory.newInstance();
  // XPath xpath = factory.newXPath();
  // XPathExpression expr
  //  = xpath.compile("//book[author='Neal Stephenson']/title/text()");

  // Object result = expr.evaluate(doc, XPathConstants.NODESET);
  // NodeList nodes = (NodeList) result;
  // for (int i = 0; i < nodes.getLength(); i++) {
  //     System.out.println(nodes.item(i).getNodeValue());
  // }

















question="月球能够发光是因为"
// question="月球能够发光是因为?"
options=["反射太阳光","自己发光"]
url="http://www.baidu.com/s?wd="+question
log(url)
console.show();
var r = http.get(url);


function outputObj(obj) {
	var description = "";
	for (var i in obj) {
		description += i + " = " + obj[i] + "\n";
	}
	log(description);
}

// statusCode = 200
// statusMessage = OK
// headers = [object Object]
// body = [object Object]
// request = Request{method=GET, url=http://www.baidu.com/s?wd=%E6%9C%88%E7%90%83%E8%83%BD%E5%A4%9F%E5%8F%91%E5%85%89%E6%98%AF%E5%9B%A0%E4%B8%BA, tag=null}
// url = http://www.baidu.com/s?wd=%E6%9C%88%E7%90%83%E8%83%BD%E5%A4%9F%E5%8F%91%E5%85%89%E6%98%AF%E5%9B%A0%E4%B8%BA
// method = GET


log(r.body.string())



// { string: [Function],
//   bytes: [Function],
//   json: [Function],
//   contentType: text/html;charset=utf-8 }



baiduAnswer=r
// baiduAnswer=r.body.string()
log("baiduAnswerLength=",baiduAnswer.length)


var text = baiduAnswer;
//写入文件
path="/sdcard/abc.html"
files.write(path, text);
//用其他应用查看文件
// app.viewFile("/sdcard/1.txt");


log("开始转换doc")
doc=documentDenerate(path)
// doc=documentDenerate(baiduAnswer)
log("结束转换doc")
{/* <html><head></head><body><div>测试</div></body></html> */}

log(doc)

