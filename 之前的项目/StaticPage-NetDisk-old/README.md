# StaticPage-NetDisk
这个项目全名为：基于静态页面的文件存储系统 Static Page Based File Storage System

提示：因为作者是个中国人，不是很会英文，所以英文部分的内容是用百度翻译翻译的，所以英文部分可能出现语法错误等问题，请见谅，有条件的还是看中文吧！

[English RAEDME](README_EN.md)

介绍：这是一个基于静态页面的文件存储系统

初学者写的代码，不要学习！！！！！

## 命令行使用方法
cd <目录> 切换目录
ls 查看文件夹下的文件
rm <要删除的文件/文件夹> 删除文件
add <文件/文件夹在电脑上的位置> 添加文件/文件夹
md <文件夹名称> 新建文件夹
down 下载
help 不输出
exit quit q 退出
[""] 不输出
[其他] 报错

## 未来规划
1. 自动下载大文件 自制下载器
2. 文件分享页面
3. 连接的客户端 （在此基础上直接改）
4. 视频的播放 小：mp4 大：m3u8/一堆mp4

## 程序更新日志
### BATE0.1.0  id：1
更新了：切换目录，查看目录，删除文件，添加文件/文件夹，新建文件夹，下载文件,下载大文件功能
暂不支持UI窗口

## 程序部分
### 用到的开源软件
1. 7zip https://www.7-zip.org/

### python程序部分
#### main.py ： 主程序
#### tools.py ： 工具库

### html模板
#### info.json
```json
{
    //create_version：创建时使用的版本
    "create_version": "BATE0.0.1",
    //create_version_id: 创建时使用的版本的id，每发一个版本则个数就+1
    "create_version_id": 1,
    "compatible_version": "BATE0.0.1",
    //compatible_version:最低兼容版本
    "compatible_version_id": 1,
    //compatible_version:最低兼容版本
    //index:模板首页文件信息
    "index": {
        "have": true,
        "file": "index.html"
    },
    //download:模板下载文件信息
    "download": {
        "have": true,
        "file": "download.html"
    },
    //share:模板首页文件信息
    "share": {
        "have": true,
        "file": "share.html"
    },
    //player:模板首页文件信息
    "player": {
        "have": true,
        "file": "player.html"
    } 
}
```

### web页面相关
#### webinfo.json
webinfo.json是存储网站信息的文件，这个文件必须位于网盘首页下的"/webinfo.json"路径下
比如：网盘的路径是"http://xxx.github.io/mywebdisk/"
那么fileinfo.json的位置必须位于"http://xxx.github.io/mywebdisk/webinfo.json"

json参数：
```json
{
    "magic": "StaticPage-NetDisk=>Static Page Based File Storage System Made by htfc786 242bbd3",
    //magic：魔术，项目用来识别是不是自己的文件，其值必须为"StaticPage-NetDisk=>Static Page Based File Storage System Made by htfc786 242bbd3"
    "create_version": "BATE0.1",
    //create_version：创建时使用的版本
    "create_version_id": 1,
    //create_version_id: 创建时使用的版本的id，每发一个版本则个数就+1
    "compatible_version": "BATE0.1",
    //compatible_version:最低兼容版本
    "compatible_version_id": 1,
    //name:网盘名称
    "name": "我的网盘",
    //web_title:网页标题
    "web_title": "网盘",
    //page_tatle:页面上方标题
    "page_title": "欢迎使用网盘",
    //little_page_title:页面右上方小标题
    "little_page_title": "这个网盘是用静态页面做的",
    //is_separate:是否为分包文件 
    "is_separat": true,
    //separate_size:一个包大小 单位：bytes is_separate为false时为0
    "separate_size": 25600000
}
```

#### fileinfo.json
fileinfo.json:存储文件信息的地方
每个（程序内定义的）文件夹下都要有此文件，web页面不显示，目录下可以有1个和此文件同名文件
```json
{
    //paths:当前路径
    "path": "/",
    //filelist:文件列表
    "file_list":[
        //这里关心是文件还是文件夹
        {   
            //文件
            //id:文件id,旧版本默认全是1
            "id":1,
            //name:文件名
            "name":"111.mp3",
            //file_type:文件类型
            "file_type":".mp3",
            //date:修改日期
            "date":"2022-3-20 20:10:11",
            //size:大小 文件夹为空
            "size":"111k",
            //is_separate:是否为分包文件 看配置
            "is_separat": false,
            //is_folder:是否为文件夹
            "is_folder": false,
            //is_share:是否分享
            "is_share": false,
            //is_play: 是否开启播放器功能
            "is_play": false,
            //file_path：文件在网盘内的路径
            "file_path": "",
            //index_file:文件的index.html在网盘内的路径
            "index_file": "",
            //download_file:文件的download.html在网盘内的路径
            "download_file": "",
            //share_file:文件的share.html在网盘内的路径
            "share_file": "",
            //video_file:文件的video.html在网盘内的路径
            "video_file": "",
            "html_index_file":"",
            "html_download_file":"",
            "html_share_file":"",
            "html_play_file":"",
        },
        {   
            //文件夹
            //id:文件id,旧版本默认全是1
            "id":1,
            //name:文件夹名
            "name":"111",
            //file_type:类型：文件夹
            "file_type":"文件夹",
            //date:修改日期
            "date":"2022-3-20 20:10:11",
            //size:大小 文件夹为空
            "size":"",
            //is_folder:是否为文件夹
            "is_folder": true,
            //is_share:是否分享
            "is_share": false,
        },
    ]
}
```