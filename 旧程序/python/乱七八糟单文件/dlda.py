import requests
import sys, os
import urllib
from urllib.parse import urlparse

def get_filename(url_str):
    url = urlparse(url_str)
    i = len(url.path) - 1
    while i > 0:
        if url.path[i] == '/':
            break
        i = i - 1
    filename=url.path[i+1:len(url.path)]
    if not filename.strip():
        return False
    return filename

with open(sys._MEIPASS+"\\urls.txt","r") as f:     #读取url文件
    urls_text = f.read()
urls = urls_text.splitlines()       #按行分割
is_packzip = urls[0]                #提取是否拆包打开
urls.remove(is_packzip)             #移除
print(urls,is_packzip)

os.mkdir(".\\temp\\") 
for url in urls:
    filename = get_filename(url)
    r = requests.get(url)
    with open(".\\temp\\"+str(filename), "wb") as f:
        f.write(r.content)
    print(filename+" OK!")

os.system(sys._MEIPASS+r"\\7z x -o. .\temp\72.zip")

os.rmdir(r".\\temp\\")
    