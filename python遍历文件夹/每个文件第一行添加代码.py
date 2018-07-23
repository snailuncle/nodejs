#!/usr/bin/python
# -*- coding: utf-8 -*-
import os
ignore_dirs=["node_modules",".git",".gitignore",".cache",".vscode","dist","nodemon.json","python遍历文件夹","其他","test"]
def gci(filepath):
#遍历filepath下所有文件，包括子目录
  files = os.listdir(filepath)
  for fi in files:
    if fi in ignore_dirs:
      continue
    fi_d = os.path.join(filepath,fi)
    if os.path.isdir(fi_d):
      gci(fi_d)
    else:
      result=os.path.join(filepath,fi_d)
      ExtName =getExtensionName(result)
      if ExtName == "js":
        print(result)
        addFirstLine(result)


def getExtensionName(path):
  import os
  if "." in path:
    path_split_result=path.split('.')
    if path_split_result:
      return path_split_result[-1]
  return None

def addFirstLine(file):
  with open(file, 'r+',encoding="utf-8") as f:
    content = f.read()
    f.seek(0, 0)
    f.write('console.log(module.filename)\n'+content)




      # import sys
      # sys.exit(0)

#递归遍历/root目录下所有文件
path222="D:dejsDoubandejsdejsHelloWorld/douban"

gci(path222)



