from asyncio.proactor_events import _ProactorBasePipeTransport
import os
import re
import time
import json
import tools
from config import *

def init():     #初始化网盘文件
    print("---欢迎使用基于静态页面的网盘的静态页面网盘创建向导---")
    MAKE_PATH = input("网盘创建路径：")
    if not os.path.isdir(MAKE_PATH): #检查路径是否可用
        print("请输入可用的路径。。。")
        return 
    #接受各种参数
    name = input("请输入网盘名称：")
    web_title = input("请输入网盘页面标题：")
    page_title = input("请输入网盘页面上方标题：")
    little_page_title = input("请输入网盘页面右上方小标题：")
    #创建文件夹
    name = name.replace('\\', '').replace('/', '').replace(':', '').replace('*', '').replace('?', '').replace('"', '').replace('<', '').replace('>', '').replace('|', '')  #替换非法名称
    path = os.path.join(MAKE_PATH,name)
    tools.make_folder(path, success_print=True)
    tools.set_wpfolder(path)  #设置网盘文件夹路径
    #生成webinfo.json
    tools.create_webinfo(name,
                        web_title=web_title,
                        page_title=page_title,
                        little_page_title=little_page_title,
                        is_separat = True,
                        separate_size = 25600000)
    #根目录fileinfo.json的生成
    tools.create_fileinfo("/", is_folder=True)
    print("已生成首页的fileinfo.json")
    #index.html相关
    ##读取模板文件的info.json
    html_info = tools.read_templats_info(TEMPLATS_PATH)
    templat_name = html_info["name"]
    print("使用",templat_name,"模板")
    ##创建index.html
    tools.add_index_html("/")
    print("已生成index.html")
    #复制文件
    os.system("xcopy .\\src\\ {}".format(path+"\\src\\"))
    print("提示：本程序在根目录处会占用根目录的文件夹名称的路径路径变成存储文件的路径，请注意占用情况！操作完成后请手动上传服务器")
    LocalNetDesk(path)

class LocalNetDesk:
    """
    此函数仅用于本地网盘
    """
    wp_folder = None
    wpNowPath = "/"
    def __init__(self,wp_folder):
        """
        __init__
        wp_folder：网盘在本地的路径（计算机文件夹的路径）
        """
        self.wp_folder = wp_folder
        self.main()

    def main(self):
        ##检查网盘文件夹是否为合法的网盘
        try:
            webinfo_path = os.path.join(self.wp_folder,"webinfo.json")  #开文件
            with open(webinfo_path,"r",encoding=ENCODING) as f:
                webinfo = f.read()
                webinfo = json.loads(webinfo)
            if not webinfo["magic"] == MAGIC_TEXT:  #判断魔术
                print("错误：webinfo.json魔术不对")
                return
            elif webinfo["compatible_version_id"] > VERSION_ID: #判断版本
                print("错误：版本过低，无法打开网盘。请先升级")
                return
        except: #有错大概率是打不开文件造成的
            print("错误：此文件夹不是用此项目创建的网盘，请输入正确的地址")
            return
        print("成功打开网盘")
        ##打印信息
        print("网盘名称："+str(webinfo["name"]))
        print("创建版本："+str(webinfo["create_version"])+"  (id:"+str(webinfo["create_version_id"])+")")
        print("最低兼容版本："+str(webinfo["compatible_version"])+"  (id:"+str(webinfo["compatible_version_id"])+")")
        print("网页标题："+str(webinfo["web_title"]))
        print("页面上方标题："+str(webinfo["page_title"])) 
        print("页面右上方小标题："+str(webinfo["little_page_title"]))
        tools.set_wpfolder(self.wp_folder)
        #检查成功=>启动命令行
        self.wpNowPath = "/" #网盘当前操作路径
        while 1:    #类似cmd一样一直等待用户输入命令
            command = input(str(webinfo["name"]) + ":" + self.wpNowPath + ">")
            command_list =  command.split(" ")
            """
            cd
            ls
            rm 
            add
            md
            down
            help 
            exit quit q
            [""]
            [other] 
            """
            command_text = command_list[0]
            if command_text == "cd":
                self.chenge_dir(command_list[1])
            elif command_text == "ls":
                self.ls()
            elif command_text == "rm":
                self.rm(command_list[1])
            ##命令：add <file_path> 向网盘内添加文件
            elif command_list[0] == "add":
                self.add_file(self.wpNowPath,command_list[1])
            ##命令：md <folder_name> 新建文件夹
            elif command_list[0] == "md":
                self.make_dir(command_list[1])
            elif command_list[0] == "down":
                print()
                self.down_file(command_list[1],command_list[2])
            ##命令：help 帮助
            elif command_list[0] == "help":
                print("Help Info")
            ##命令：exit quit q 退出程序 
            elif command_list[0] == "exit" or command_list[0] == "quit" or command_list[0] == "q":
                print("Bye!")
                return
            ##输入为空不输出任何东西
            elif command == "":
                pass
            ##都没有判断通过执行
            else:
                print(command + " 不是一个可运行的命令！")

    def ls(self):
        """
        显示当前文件夹下的文件
        """
        ##读取文件夹内的fileinfo.json
        fileinfo = tools.read_fileinfo(self.wpNowPath)
        print("当前目录："+str(self.wpNowPath))
        if not fileinfo["is_folder"]:
            pass
        else:
            for i in fileinfo["file_list"]:
                if i["is_folder"]:
                    print("%20.20s\t%10.10s\t%s" % (i["date"],"<DIR>",i["name"]))
                else:
                    print("%20.20s\t%10.10s\t%s" % (i["date"],i["size"],i["name"]))
                #self.wpNowPath

    def chenge_dir(self,chenge_path):
        """
        切换目录
        此函数仅用于本地网盘
        chenge_path：要切换的目录
        返回：改变后的路径
        """
        ##读取文件夹内的fileinfo.json
        fileinfo = tools.read_fileinfo(self.wpNowPath)

        if chenge_path == "..":
            if self.wpNowPath != "/":
                wpNowPath = ""
                wpNowPath_list = self.wpNowPath.split("/")
                for i in range(len(wpNowPath_list)-2):
                    wpNowPath +=  wpNowPath_list[i] + "/" 
                self.wpNowPath = wpNowPath
        else:
            for i in fileinfo["file_list"]:
                if i["name"] == chenge_path and i["is_folder"]:
                    self.wpNowPath = self.wpNowPath + chenge_path + "/"
                    return        
            print("子目录 \""+ str(chenge_path) +"\" 不存在。")
    
    def rm(self,del_name):
        """
        添加文件函数（只能添加文件）
        此函数仅用于本地网盘
        del_path：要删除文件名称
        """
        #读取各种信息
        ##读网盘信息webinfo.json
        webinfo = tools.read_webinfo()
        ##读取文件夹内的fileinfo.json
        fileinfo = tools.read_fileinfo(self.wpNowPath)
        #各种判断
        ##判断文件或文件夹是否存在
        del_path = tools.get_folder_paths(self.wpNowPath)+del_name
        file_name = os.path.basename(del_path)
        for i in fileinfo["file_list"]:
            if i["name"] == file_name:
                #删除文件夹
                #print(del_path)
                tools.del_files(del_path)
                #修改fileinfo.json
                fileinfo["file_list"].remove(i)
                tools.save_fileinfo(fileinfo,self.wpNowPath)
                #生成index.html:
                ##生成</table>部分的html
                file_html = tools.create_filelist_html(self.wpNowPath)
                ##读取模板文件的info.json
                #html_info = tools.read_templats_info()
                #templat_name = html_info["name"]
                #print("使用",templat_name,"模板")
                ##添加文件
                tools.add_index_html(self.wpNowPath,file_html)
                return        
        print("子目录或文件 "+ str(file_name) +" 不存在。")

    def make_dir(self,folder_name,wpNowPath="@#$%^self"):
            """
            新建文件夹
            此函数仅用于本地网盘
            wp_folder：网盘在本地的路径（计算机文件夹的路径）
            wp_path：添加到网盘的路径（网盘内部的路径）
            folder_name：新建文件夹的名称:
            """
            if wpNowPath == "@#$%^self":
                wpNowPath = self.wpNowPath
            #读取各种信息
            ##读网盘信息webinfo.json
            webinfo = tools.read_webinfo()
            ##读取文件夹内的fileinfo.json
            fileinfo = tools.read_fileinfo(wpNowPath)
            #获取添加到网盘的路径（计算机文件夹的路径）
            folder_paths = tools.get_folder_paths(wpNowPath)
            #各种判断
            ##判断是否存在非法字符
            if folder_name != folder_name.replace('\\', '').replace('/', '').replace(':', '').replace('*', '').replace('?', '').replace('"', '').replace('<', '').replace('>', '').replace('|', ''):  #替换非法名称
                print("文件夹名称存在非法字符，文件夹名称不能包含：\\ / : * ? \" < > |")
                return
            ##判断文件是否重名 重名直接退出 判断是不区分大小写的 默认用大写判断
            for i in fileinfo["file_list"]:
                if i["name"].upper() == folder_name.upper():
                    print("子目录或文件 "+ str(folder_name) +" 已经存在。")
                    return
            ##在写入（数据）
            fileinfo_templats = {   #数据模板--文件夹
                "id":1,
                "name":folder_name,
                "file_type":"文件夹",
                "date":time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()),
                "size":"",
                "is_folder": True,
                "is_share": False,
            }
            fileinfo["file_list"].append(fileinfo_templats)
            ##最后保存
            tools.save_fileinfo(fileinfo,wpNowPath)
            #生成index.html:
            ##生成</table>部分的html
            file_html = tools.create_filelist_html(wpNowPath)

            ##添加html模板文件
            tools.add_index_html(wpNowPath,file_html)
            ##读取模板文件的info.json
            #创建新文件夹
            new_folder_paths = os.path.join(folder_paths,folder_name)
            #fileinfo_templats_file_path = path + os.esp + folder_name
            tools.make_folder(new_folder_paths)
            #创建新建的文件夹内部的fileinfo.json和index.html
            tools.create_fileinfo(wpNowPath+folder_name+"/", is_folder=True)
            tools.add_index_html(wpNowPath+folder_name+"/")

    def add_file(self,wpNowPath,file_path):
        """
        添加文件/文件夹函数
        此函数仅用于本地网盘
        wpNowPath：网盘当前路径
        file_path：要添加文件的路径
        """
        #文件
        if os.path.isfile(file_path):
            #读取各种信息
            ##读网盘信息webinfo.json
            webinfo = tools.read_webinfo()
            ##读取文件夹内的fileinfo.json
            fileinfo = tools.read_fileinfo(wpNowPath)
            #获取各种信息 文件名，修改日期，大小，文件类型
            file_name = os.path.basename(file_path)
            file_mtime = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(os.stat(file_path).st_mtime))
            file_size = str(round(os.path.getsize(file_path) / 1024 / 1024, 3)) + 'MB'
            if os.path.isfile(file_path):  # 如果是文件就设置文件类型
                file_type = os.path.splitext(file_path)[1]
            if not file_type:
                file_type = '文件'
            #各种判断
            ##判断文件是否重名 重名直接退出 判断是不区分大小写的 默认用大写判断
            for i in fileinfo["file_list"]:
                if i["name"].upper() == file_name.upper():
                    print("子目录或文件 "+ str(file_name) +" 已经存在。")
            ##判断是否需要分包
            is_separat = False
            if webinfo["is_separat"]:
                if os.path.getsize(file_path) >= webinfo["separate_size"]:
                    is_separat = True
            #生成文件的目录
            inpw_file_path = wpNowPath + file_name + "/"
            open_filename = file_name + "/"
            if os.path.exists(inpw_file_path):
                inpw_file_path = wpNowPath + file_name + "(1)/"
                open_filename = file_name + "(1)/"
            ##生成预览 下载 分享 播放等html文件的路径
            inpw_index_file = inpw_file_path + "index.html"
            inpw_download_file = inpw_file_path + "download.html"
            inpw_share_file = inpw_file_path + "share.html"
            inpw_play_file = inpw_file_path + "player.html"
            ##顺便生成填入HTML的
            html_index_file = "./" + open_filename + "index.html"
            html_download_file = "./" + open_filename + "download.html"
            html_share_file = "./" + open_filename + "share.html"
            html_play_file = "./" + open_filename + "player.html"
            ##创建写入数据
            fileinfo_templats = {       #数据模版
                "id":1,
                "name":file_name,
                "file_type":file_type,
                "date":file_mtime,
                "size":file_size,
                "is_separat": is_separat,
                "is_folder": False,
                "is_share": True,
                "is_play": False, #lslslsls
                "is_separat":is_separat,
                "file_path": inpw_file_path,      #在下面生成
                "index_file": inpw_index_file,
                "download_file": inpw_download_file,
                "share_file": inpw_share_file,
                "video_file": inpw_play_file,
                "html_index_file":html_index_file,
                "html_download_file":html_download_file,
                "html_share_file":html_share_file,
                "html_play_file":html_play_file,

            }
            fileinfo["file_list"].append(fileinfo_templats)
            ##最后保存
            tools.save_fileinfo(fileinfo,wpNowPath)
            #生成index.html:
            ##生成</table>部分的html
            
            file_html = tools.create_filelist_html(wpNowPath)

            ##读取模板文件的info.json
            #html_info = tools.read_templats_info()
            #templat_name = html_info["name"]
            #print("使用",templat_name,"模板")
            ##添加文件
            tools.add_index_html(wpNowPath,file_html)

            fileinfo_templats_file_path = tools.get_folder_paths(inpw_file_path)
            #print(fileinfo_templats_file_path)
            tools.make_folder(fileinfo_templats_file_path)
            if not fileinfo_templats["is_separat"]:
                #复制文件进来
                tools.copy_file(wpNowPath+file_name+"\\",file_path,file_name)
                #生成index.html
                tools.add_file_index_html(wpNowPath+file_name)
                #生成download.html
                fileHtml = "<h4>已经开始下载(还没开始？<a href=\".\\"+file_name+"\" target=\"_blank\">点击此处</a>)</h4>"
                tools.add_file_download_html(wpNowPath+file_name,fileHtml)
                #(如果有)生成share.html
                #BATE0.1.0暂无
                #(如果有)生成player.html
                #BATE0.1.0暂无
            #那么
            else:
                #文件分包 使用7zip 7z a -tzip Files.zip c:\test\* -r -v25600000
                ##分包命令
                com = ".\\src\\7z a -tzip \"{}\" \"{}\" -r -v{}".format(tools.get_folder_paths(wpNowPath)+file_name+"\\"+file_name,file_path,str(webinfo["separate_size"]))
                #print(com)
                ##执行
                os.system(com)
                #生成下载器
                #wphost = "http://127.0.0.1:8000/t"
                wphost = input("需要网盘服务器的地址：")
                #if wphost[len(wphost)-1] == "/":
                #    wphost[len(wphost)-1] = ""
                #https://www.cnblogs.com/xiaozi/p/12721960.html
                #生成3种 bat ==> curl powershell bitsadmin linux ==> wget
                ## powershell win7-win11 
                # powershell (new-object System.Net.WebClient).DownloadFile('URL','文件名')
                bat_command = ""
                bat_command += "chcp 65001\n"
                bat_command += "mkdir %Temp%\\downloadTemp\n"
                bat_command += "powershell (new-object System.Net.WebClient).DownloadFile('{}/src/7z.exe','%Temp%\\downloadTemp\\7z.exe')\n".format(wphost)
                bat_command += "powershell (new-object System.Net.WebClient).DownloadFile('{}/src/7z.dll','%Temp%\\downloadTemp\\7z.dll')\n".format(wphost)
                for i in range(1,int(os.path.getsize(file_path) / webinfo["separate_size"])+2):
                    print(i)
                    if i<10:
                        i = '.00'+str(i)
                    elif i<100:
                        i = '.0'+str(i)
                    else:
                        i = "."+str(i)
                    bat_command += "powershell (new-object System.Net.WebClient).DownloadFile('{}{}/{}','%Temp%\downloadTemp\{}')\n".format(wphost,wpNowPath+file_name,file_name+i,file_name+i)
                bat_command += "%Temp%\\downloadTemp\\7z x -o. \"%Temp%\\downloadTemp\\{}\"\n".format(file_name+".001")
                bat_command += "del /s /q %Temp%\\downloadTemp\n"
                bat_command += "rd /s /q %Temp%\\downloadTemp\n"
                bat_command += "exit\n"
                with open(tools.get_folder_paths(wpNowPath)+file_name+"\\"+file_name+"_powershellDownload.bat","w",encoding=ENCODING) as f:
                    f.write(bat_command)
                ## bitsadmin  XP-win10
                # bitsadmin /transfer n URL 文件名
                bat_command = ""
                bat_command += "chcp 65001\n"
                bat_command += "mkdir %Temp%\\downloadTemp\n"
                bat_command += "bitsadmin /transfer n \"{}/src/7z.exe\" \"%Temp%\\downloadTemp\\7z.exe\"\n".format(wphost)
                bat_command += "bitsadmin /transfer n \"{}/src/7z.dll\" \"%Temp%\\downloadTemp\\7z.dll\"\n".format(wphost)
                for i in range(1,int(os.path.getsize(file_path) / webinfo["separate_size"])+2):
                    if i<10:
                        i = '.00'+str(i)
                    elif i<100:
                        i = '.0'+str(i)
                    else:
                        i = "."+str(i)
                    bat_command += "bitsadmin /transfer n \"{}{}/{}\" \"%Temp%\downloadTemp\{}\"\n".format(wphost,wpNowPath+file_name,file_name+i,file_name+i)
                bat_command += "%Temp%\\downloadTemp\\7z x -o. \"%Temp%\\downloadTemp\\{}\"\n".format(file_name+".001")
                bat_command += "del /s /q %Temp%\\downloadTemp\n"
                bat_command += "rd /s /q %Temp%\\downloadTemp\n"
                bat_command += "exit\n"
                with open(tools.get_folder_paths(wpNowPath)+file_name+"\\"+file_name+"_bitsadminDownload.bat","w",encoding=ENCODING) as f:
                    f.write(bat_command)
                #生成index.html
                tools.add_file_index_html(wpNowPath+file_name)
                #生成download.html
                fileHtml = ""
                fileHtml += "<div>"
                fileHtml += "提示：由于分卷大小限制，大于规定字节，所以需要所以下载器下载（绝对不是p2p下载器）<br/>"
                fileHtml += "下载器1 (windows)powershell:<a href=\".\\"+file_name+"_powershellDownload.bat"+"\" download=\""+file_name+"_powershellDownload.bat"+"\" target=\"_blank\">点击下载</a>（最推荐使用，支持win7~win11有powershell的系统）<br/>"
                fileHtml += "下载器2 (windows)bitsadmin:<a href=\".\\"+file_name+"_bitsadminDownload.bat"+"\" download=\""+file_name+"_bitsadminDownload.bat"+"\" target=\"_blank\">点击下载</a>（支持XP~win10,非常不好使）<br/>"
                fileHtml += "</div>"
                tools.add_file_download_html(wpNowPath+file_name,fileHtml)
                #(如果有)生成share.html
                #BATE0.1.0暂无
                #(如果有)生成share.html
                #BATE0.1.0暂无
        #文件夹
        elif os.path.isdir(file_path):
            #文件夹名
            if file_path[len(file_path)-1] == "\\":
                file_path_n = ""
                for i in range(len(file_path)-1):
                    file_path_n += file_path[i]
                file_path = file_path_n
            #print(file_path)
            file_name = os.path.basename(file_path)
            #print(file_name,wpNowPath)
            self.make_dir(file_name,wpNowPath)
            for i in os.listdir(file_path):
                if os.path.isdir(file_path+"\\"+i):
                    #print(i,wpNowPath+file_name+"/",file_path+"\\"+i+"\\")
                    self.add_file(wpNowPath+file_name+"/",file_path+"\\"+i+"\\")
                elif os.path.isfile(file_path+"\\"+i):
                    #print(i,wpNowPath+file_name+"/",file_path+"\\"+i)
                    self.add_file(wpNowPath+file_name+"/",file_path+"\\"+i)

            #
        else:
            print("文件或文件夹可能不存在。")

    def down_file(self,file_name,file_path,wpNowPath="@#$%^self"):
        """
        下载（导出文件）
        file_name：文件名
        file_path:导出的位置
        wpNowPath:操作路径 "@#$%^self"=>self.wpNowPath
        """
        if wpNowPath == "@#$%^self":
            wpNowPath = self.wpNowPath
        print(file_path)
        #读取各种信息
        ##读网盘信息webinfo.json
        webinfo = tools.read_webinfo()
        ##读取文件夹内的fileinfo.json
        fileinfo = tools.read_fileinfo(wpNowPath)
        for i in fileinfo["file_list"]:
            #文件存在
            if i["name"] == file_name:
                #是文件
                if not i["is_folder"]:
                    #如果文件分包了 7z解压
                    if i["is_separat"]:
                        com = ".\\src\\7z x -o{} \"{}\"".format(file_path,tools.get_folder_paths(wpNowPath+file_name)+file_name+".001")
                        print(com)
                        os.system(com)
                    #没有分包 直接复制
                    else:
                        print(wpNowPath+file_name,file_path,file_name,sep="|")
                        tools.copy_file_out(wpNowPath+file_name,file_path,file_name)
                #是文件夹
                else:
                    #读取那个文件夹的信息
                    fileinfo_fd = tools.read_fileinfo(wpNowPath+i["name"]+"/")
                    tools.make_folder(file_path)
                    for j in fileinfo_fd["file_list"]:
                        print(j["name"],file_path+j["name"],wpNowPath+j["name"],sep=" | ")
                        self.down_file(j["name"],file_path+"\\"+j["name"],wpNowPath)
                return
        print("子目录或文件 "+ str(file_name) +" 不存在。")
        


def main():     #程序从这里课时执行
    #程序标题部分
    print("+===================================================+")
    print("|欢迎使用基于静态页面的网盘  "+ str(VERSION) +"  by：htfc786 |")
    print("|<https://github.com/htfc786/StaticPage-NetDisk>    |")
    print("|<https://gitee.com/htfc786/StaticPage-NetDisk>     |")
    print("+===================================================+")
    #网盘文件位置输入部分
    ##提示信息和输入
    print("输入网盘的url地址，也可以把网盘文件夹的链接输入或拖动到这里，也可以输入“new”来新建网盘")
    wp_path = input("打开网盘地址：")
    ##检查http和https的正则表达式
    c_http = re.compile(r"http://[^\s]*")
    c_https = re.compile(r"https://[^\s]*")
    ##判断是网站还是本地文件,还是新建网盘
    if c_http.match(wp_path) or c_https.match(wp_path):  #云端网盘 url
        print("提示：当前版本暂不支持网页")
    elif os.path.isdir(wp_path):    #本地网盘
        LocalNetDesk(wp_path)
    elif wp_path == "new":  #新建网盘
        init()
    elif wp_path == "exit" or wp_path == "quit" or wp_path == "q" or wp_path == "": #退出程序
        print("Bye!")
        return
    else:   #都没通过
        print("请输入正确的地址!!!")    

if __name__ == "__main__":
    main()