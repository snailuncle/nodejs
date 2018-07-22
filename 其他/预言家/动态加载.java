package test.tool.gui.dbtool.util;

import java.io.File;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLClassLoader;
import org.apache.log4j.Logger;
import test.tool.gui.dbtool.consts.Const;

public class JarLoadUtil {

 private static Logger log = Logger.getLogger(JarLoadUtil.class);
 private static URL lib_url = ClassLoader.getSystemClassLoader().getResource("lib");
 private static URLClassLoader loader = null;
 /*
  * 加载lib目录下所有jar文件，并返回相应的的URLClassLoader
  */
 public static URLClassLoader getURLClassLoader(){

  if(loader == null){
   String fileNames[] = listFileNames();
   if(fileNames != null && fileNames.length > 0){
    URL urls[] = new URL[fileNames.length];
    for(int i = 0;i < fileNames.length;i++){
     try {
      urls[i] = new URL(lib_url+"/"+fileNames[i]);
     } catch (MalformedURLException e) {
      if("true".equals(ConfigUtil.getConfInfo().get(Const.IS_LOG)+"")){
       log.error("加载lib目录下jar文件出错！",e);
      }
      throw new RuntimeException("加载lib目录下jar文件出错！",e);
     }
    }
    loader = new URLClassLoader(urls);
  }
  }
  return loader;
 }
 /*
  * 查询lib目录下的所有文件名称
  */
 private static String[] listFileNames(){
  File file_directory = new File("lib");
  return file.list();
 }
}



使用：



URLClassLoader loader = JarLoadUtil.getURLClassLoader();
Class<?> clazz = loader.loadClass(ds.getDriverClassName());
Driver driver = (Driver)clazz.newInstance();

Properties p = new Properties();
p.put("user", ds.getUsername());
p.put("password", ds.getPwd());

Connection con = driver.connect(ds.getUrl(), p);
