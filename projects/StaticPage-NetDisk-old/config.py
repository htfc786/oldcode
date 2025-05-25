import os
import sys

#版本信息
VERSION = "BATE0.1.0"
VERSION_ID = 1
#当前版本支持的最低版本
COMPATIBLE_VERSION = "BATE0.1"
COMPATIBLE_VERSION_ID = 1
#魔术信息
MAGIC_TEXT = "StaticPage-NetDisk=>Static Page Based File Storage System Made by htfc786 242bbd3"
#打开文件时使用的编码
ENCODING = "utf-8"
#模板文件位置
TEMPLATS_PATH = os.path.join(sys.path[0],"web")