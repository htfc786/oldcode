import os
import re
import sys
import time
import json
import platform
import shutil
from config import *

wp_folder = None

def set_wpfolder(wpfolder):
    """
    设置网盘文件夹路径（网盘在本地的路径（计算机文件夹的路径））
    wpfolder：网盘文件夹路径（网盘在本地的路径（计算机文件夹的路径））
    """
    global wp_folder
    wp_folder = wpfolder

def get_folder_paths(wppath):
    """
    得到网盘内部的文件夹在硬盘中的位置
    """
    path = wp_folder + os.sep + wppath + os.sep
    ##由于os.path.join有bug，所以手动替换（根据操作系统）
    if list(platform.uname())[0] == "Windows":
        path = path.replace('/', '\\')
        path = path.replace('\\/', '\\')
        path = path.replace('/\\', '\\')
        path = path.replace('\\\\', '\\')
    else:
        path = path.replace('\\', '/')
        path = path.replace('\\/', '/')
        path = path.replace('/\\', '/')
        path = path.replace('//', '/')
    return path

def make_folder(path, success_print=False):
    """
    新建文件夹函数
    path:文件路径
    success_print：是否打印成功信息
    """
    if os.path.exists(path):
        print(path+' 目录已存在，请删除后在执行本程序')
        exit()
    else:
        os.makedirs(path)
        if success_print:
            print(path+' 创建成功')

def create_webinfo(name, web_title, page_title, little_page_title, is_separat=False, separate_size=0):
    """
    生成webinfo.json函数
    name 网盘名称
    web_title 网盘页面title
    page_title 网盘页面标题
    little_page_title 网盘页面小标题
    is_separat 是否分包 默认不分包（False）
    separate_size 分包大小 单位bytes is_separate为False时为0
    """
    webinfo = {     #模板
        "magic": MAGIC_TEXT,
        "create_version": VERSION,
        "create_version_id": VERSION_ID,
        "compatible_version": COMPATIBLE_VERSION,
        "compatible_version_id": COMPATIBLE_VERSION_ID,
        "name": name,
        "web_title": web_title,
        "page_title": page_title,
        "little_page_title": little_page_title,
        "is_separat": is_separat,
        "separate_size": separate_size
    }
    webinfo_path = os.path.join(wp_folder,"webinfo.json")
    with open(webinfo_path,"w",encoding=ENCODING) as f:
        webinfo_text = json.dumps(webinfo)
        f.write(webinfo_text)
    print("已生成webinfo.json")

def create_fileinfo(wppath, is_folder=False):
    """
    生成fileinfo.json
    wppath: 添加到网盘的路径（网盘内部的路径）
    is_folder: 是文件夹吗？ 默认False
    """
    path = get_folder_paths(wppath)
    fileinfo_path = os.path.join(path,"fileinfo.json")
    index_fileinfo = {
        "path":wppath,
        "is_folder": is_folder,
        "file_list":[]
    }
    with open(fileinfo_path,"w",encoding=ENCODING) as f:
        fileinfo_text = json.dumps(index_fileinfo)
        f.write(fileinfo_text)

def read_templats_info(templats_path=TEMPLATS_PATH):
    """
    读取模板文件的info.json
    TEMPLATS_PATH：模板文件路径
    返回：模板文件的info.json内的信息
    """
    info_path = os.path.join(templats_path, "info.json")
    with open(info_path,"r",encoding=ENCODING) as f:
        info_text = f.read()
        html_info = json.loads(info_text)
    return html_info

def read_webinfo():
    """
    读取webinfo.json
    返回：webinfo.json内的信息
    """
    webinfo_path = get_folder_paths("/")
    info_path = os.path.join(webinfo_path, "webinfo.json")
    with open(info_path,"r",encoding=ENCODING) as f:
        info_text = f.read()
        webinfo = json.loads(info_text)
    return webinfo

def read_fileinfo(wp_path):
    """
    读取文件/文件夹（fileinfo.json）信息
    返回：fileinfo.json文件内的信息
    """
    path = get_folder_paths(wp_path)
    #print(path)
    fileinfo_path = os.path.join(path,"fileinfo.json")
    #读取
    with open(fileinfo_path,"r",encoding=ENCODING) as f:
        fileinfo_text = f.read()
        fileinfo = json.loads(fileinfo_text)
    return fileinfo

def add_index_html(wppath,fileList_tr=""):
    """
    （新建）添加html文件夹版的index文件
    """
    path = get_folder_paths(wppath)
    html_path = os.path.join(path,"index.html")
    ##html——info文件路径
    html_info = read_templats_info(TEMPLATS_PATH)
    html_templat_path = os.path.join(TEMPLATS_PATH,html_info["index"]["file"])
    with open(html_templat_path,"r",encoding=ENCODING) as f:
        html_templat = f.read()
    #读取信息
    webinfo = read_webinfo()
    web_title = webinfo["name"]
    page_title = webinfo["page_title"]
    little_page_title = webinfo["little_page_title"]
    #替换信息  
    html_info = read_templats_info(TEMPLATS_PATH)
    html_templat = html_templat.replace(html_info["index"]["title"], web_title)
    html_templat = html_templat.replace(html_info["index"]["pageTitle"], page_title)
    html_templat = html_templat.replace(html_info["index"]["littlePageTitle"], little_page_title)
    html_templat = html_templat.replace(html_info["index"]["nowPath"], wppath)
    html_templat = html_templat.replace(html_info["index"]["fileList-tr"], fileList_tr)
    #保存文件
    with open(html_path,"w",encoding=ENCODING) as f:
        f.write(html_templat)
    #print("已生成index.html")

def save_fileinfo(fileinfo,path):
    """
    保存fileinfo.json
    fileinfo：保存的内容
    path：保存目录(网盘内部文件夹)
    """
    fileinfo_path = get_folder_paths(path)
    fileinfo_path = os.path.join(fileinfo_path,"fileinfo.json")
    with open(fileinfo_path,"w",encoding=ENCODING) as f:
        fileinfo_text = json.dumps(fileinfo)
        f.write(fileinfo_text)

def create_filelist_html(wp_path):
    fileinfo = read_fileinfo(wp_path)
    file_html = ""      #添加html
    for i in fileinfo["file_list"]:     #生成一堆的话就for循环
        #print(i)
        file_html += "<tr>"     #生成一个文件的html
        if i["is_folder"]:
            file_html += "<td class=\"file-title\"><a href=\"./" + i["name"] + "\">" + i["name"] + "</a></td>"      #文件夹名（带连接）
        else:
            file_html += "<td>" + i["name"] + "</td>"      #文件名 
        file_html += "<td class=\"file-title\">" + i["file_type"] + "</td>" #文件类型
        file_html += "<td class=\"file-title\">" + i["date"] + "</td>"      #修改日期
        file_html += "<td class=\"file-title\">" + i["size"] + "</td>"      #文件大小
        file_html += "<td class=\"file-title\">"   #操作
        if i["is_folder"]:
            file_html += "暂无"
             #file_html += "<a href=\"\">下载</a> "
            #if i["is_share"]:
            #    file_html += "<a <a href=\""+html_is_share +"\">分享</a> "
        else:
            file_html += "<a <a href=\"" + i["html_index_file"] + "\">预览</a> "
            file_html += "<a <a href=\"" + i["html_download_file"] + "\">下载</a> "
            if i["is_share"]:
                file_html += "<a <a href=\"" + i["html_share_file"] + "\">分享</a> "
            if i["is_play"]:
                file_html += "<a <a href=\"" + i["html_play_file+"] + "\">播放</a> "
        file_html += "</td>"
        file_html += "<tr>" 
    return file_html

def del_files(dir_path):
    """
    删除文件/文件夹
    dir_path:删除文件的路径
    """
    if os.path.isfile(dir_path):
        try:
            os.remove(dir_path) # 这个可以删除单个文件，不能删除文件夹
        except BaseException as e:
            print(e)
    elif os.path.isdir(dir_path):
        file_lis = os.listdir(dir_path)
        for file_name in file_lis:
            tf = os.path.join(dir_path, file_name)
            del_files(tf)
        os.rmdir(dir_path)

def add_file_index_html(wppath,fileHtml=""):
    """
    （新建）添加html文件版的index文件
    """
    path = get_folder_paths(wppath)
    html_path = os.path.join(path,"index.html")
    ##html——info文件路径
    html_info = read_templats_info(TEMPLATS_PATH)
    html_templat_path = os.path.join(TEMPLATS_PATH,html_info["file_index"]["file"])
    with open(html_templat_path,"r",encoding=ENCODING) as f:
        html_templat = f.read()
    #读取信息
    webinfo = read_webinfo()
    web_title = webinfo["name"]
    page_title = webinfo["page_title"]
    little_page_title = webinfo["little_page_title"]
    #替换信息  
    html_info = read_templats_info(TEMPLATS_PATH)
    html_templat = html_templat.replace(html_info["file_index"]["title"], web_title)
    html_templat = html_templat.replace(html_info["file_index"]["pageTitle"], page_title)
    html_templat = html_templat.replace(html_info["file_index"]["littlePageTitle"], little_page_title)
    html_templat = html_templat.replace(html_info["file_index"]["nowPath"], wppath)
    html_templat = html_templat.replace(html_info["file_index"]["fileList-tr"], fileHtml)
    #保存文件
    with open(html_path,"w",encoding=ENCODING) as f:
        f.write(html_templat)
    #print("已生成index.html")

def copy_file(wpPath,filepath,filename):
    """
    从网盘外部拷贝文件到内部
    wpPath：内部路径
    filepath：外部路径
    """
    
    shutil.copyfile(filepath, get_folder_paths(wpPath)+filename)

def add_file_download_html(wppath,fileHtml=""):
    """
    （新建）添加html文件版的download文件
    """
    path = get_folder_paths(wppath)
    html_path = os.path.join(path,"download.html")
    ##html——info文件路径
    html_info = read_templats_info(TEMPLATS_PATH)
    html_templat_path = os.path.join(TEMPLATS_PATH,html_info["download"]["file"])
    with open(html_templat_path,"r",encoding=ENCODING) as f:
        html_templat = f.read()
    #读取信息
    webinfo = read_webinfo()
    web_title = webinfo["name"]
    page_title = webinfo["page_title"]
    little_page_title = webinfo["little_page_title"]
    #替换信息  
    html_info = read_templats_info(TEMPLATS_PATH)
    html_templat = html_templat.replace(html_info["download"]["title"], web_title)
    html_templat = html_templat.replace(html_info["download"]["pageTitle"], page_title)
    html_templat = html_templat.replace(html_info["download"]["littlePageTitle"], little_page_title)
    html_templat = html_templat.replace(html_info["download"]["nowPath"], wppath)
    html_templat = html_templat.replace(html_info["download"]["fileList-tr"], fileHtml)
    #保存文件
    with open(html_path,"w",encoding=ENCODING) as f:
        f.write(html_templat)
    #print("已生成index.html")
def copy_file_out(wpPath,filepath,filename):
    """
    从网盘内部拷贝文件到外部
    wpPath：内部路径
    filepath：外部路径
    """
    
    shutil.copyfile(get_folder_paths(wpPath)+filename, filepath+filename)