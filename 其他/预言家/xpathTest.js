importClass('java.io.IOException')
importClass('javax.xml.xpath.XPath')
importClass('javax.xml.xpath.XPathConstants')
importClass('javax.xml.xpath.XPathFactory')


importClass('java.io.File')
importClass('java.io.PrintStream')

importClass('javax.xml.parsers.DocumentBuilder')



importClass('org.htmlcleaner.CleanerProperties')

r= java.lang.System.getProperty("java.class.path");




javax.xml.xpath.XPathFactory

javax.xml.parsers.DocumentBuilder


// ava中的相关类你可以到jdk api（java帮助文档）中找到。网上搜索java帮助文档下载一个
// dom解析器构建好像是固定的
// 1.先得到解析工厂实例
// DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
// 2.从工厂获得解析器
// DocumentBuilder db = dbf.newDocumentBuildr();
// 3.解析xml文档，得到一个Document对象，即dom树
// Document doc = db.parse("src/信息.xml");
// 之后进行相关操作了













url = "http://tv.youku.com/?spm=a2hww.20023042.m_223471.5~5~H2~A";
exp = "//*[@id='nav-second']/div/ul//li";

html = null;
try {
  connect = Jsoup.connect(url);
  html = connect.get().body().html();
} catch (e) {
  log(e.stack)
}
hc = new HtmlCleaner();
tn = hc.clean(html);
dom = new DomSerializer(new CleanerProperties()).createDOM(tn);
xPath = XPathFactory.newInstance().newXPath();
result;
result = xPath.evaluate(exp, dom, XPathConstants.NODESET);
if (result instanceof NodeList) {
  nodeList =result;
  System.out.println(nodeList.getLength());
  for (let i = 0; i < nodeList.getLength(); i++) {
    node = nodeList.item(i);
    /**
     * Node.getTextContent() 此属性返回此节点及其后代的文本内容。
     * Node.getFirstChild()  此节点的第一个子节点。
     * Node.getAttributes() 包含此节点的属性的 NamedNodeMap（如果它是 Element）；否则为 null
     * 如果想获取相应对象的相关属性，可以调用  getAttributes().getNamedItem("属性名") 方法
     */
    log(
        node.getNodeValue() == null ? node.getFirstChild().getAttributes().getNamedItem("href") : node.getNodeValue());
  }

}

