import os
import io
import time
import mimetypes
from django.http import HttpResponse, HttpResponseRedirect, FileResponse, HttpResponseBadRequest
from django.shortcuts import render
from django.utils.encoding import escape_uri_path
from app_settings.settings import FILEGX_WJGX_DIR, STATIC_DIR
from utils import zipfile


# 导库

# Create your views here.



'''
def filegx_css(request):
    file = request.GET.get('file')  # 获取文件
    file_dir = os.path.join(STATIC_DIR, 'css', str(file))  # 拼接文件得到路径
    if os.path.exists(file_dir) and os.path.splitext(file_dir)[1] == '.css':  # 判断文件
        file_b = open(file_dir, 'rb')  # 读取文件2进制
        response = FileResponse(file_b)  # 返回文件
        response['Content-Type'] = 'text/css'  # 设置 Content-Type(MIME)
        return response
    else:  # 如果文件不符合要求就向客户端报错
        return HttpResponseBadRequest('Open css file error!')'''


def filegx_index(request):  # 文件共享--文件查看器
    subdir = request.GET.get('subdir')  # 从请求里获取当前路径
    if not subdir or subdir == os.sep:
        subdir = ''  # 如果没有subdir或subdir里没有信息就设置subdir为空（防止卡bug）
    if os.path.exists(FILEGX_WJGX_DIR + subdir):  # 判断文件夹或文件是否存在
        if not os.path.isdir(FILEGX_WJGX_DIR + subdir):  # 如果用户点击返回的不是文件夹就跳转到下载文件的网址
            return HttpResponseRedirect('/file/download/?file=' + subdir)
        try:  # 错误检测
            current_list = os.listdir(FILEGX_WJGX_DIR + subdir)  # 列出用户选择文件夹里的所有文件夹或文件
            contents = []  # 存放文件信息的列表
            for i in sorted(current_list):  # 遍历文件夹里的文件
                filedir = FILEGX_WJGX_DIR + subdir + os.sep + i  # 文件夹里的文件的路径
                # 如果是目录，在后面添加一个sep
                if os.path.isfile(filedir):
                    extra = ''
                else:
                    extra = os.sep
                content = {}  # 存放遍历到文件信息的列表
                content['filename'] = i + extra  # 获取文件名
                content['mtime'] = time.strftime('%Y-%m-%d %H:%M:%S',
                                                 time.localtime(os.stat(filedir).st_mtime))  # 获取文件修改时间
                content['size'] = str(round(os.path.getsize(filedir) / 1024)) + 'k'  # 获取文件大小
                if os.path.isfile(filedir):  # 如果是文件就设置文件类型
                    content['type'] = os.path.splitext(filedir)[1]
                    if not content['type']:
                        content['type'] = '文件'
                else:  # 如果不是就文件就把文件类型设成文件夹并把大小设成空
                    content['type'] = '文件夹'
                    content['size'] = ''
                contents.append(content)  # 把信息增加近列表
            sc = os.path.dirname(subdir[0:len(subdir) - 2] + '.mp4') + os.sep  # 设置上一页的目录
            context = {'contents': contents, 'subdir': subdir, 'ossep': os.sep, 'sc': sc}  # 设置传到HTML的数据
            # 返回网页
            return render(request, template_name=r'filegx/filegx_index.html', context=context)
        except PermissionError as e:  # 如果发生权限错误就给提示
            return HttpResponse('<title>错误</title>错误：' + str(e))
    else:  # 不存在给出提示
        return HttpResponse('<title>错误</title>错误：没有此文件或文件夹')


def filegx_wj(request):  # 文件共享--返回文件
    file = request.GET.get('file')  # 获取文件
    file_dir = os.path.join(FILEGX_WJGX_DIR, str(file))  # 拼接文件得到路径
    if os.path.isfile(file_dir):  # 判断是不是文件
        file_b = open(file_dir, 'rb')  # 读取文件2进制
        content_type, encoding = mimetypes.guess_type(file_dir)  # 获取文件的content_type、 encoding信息
        content_type = content_type or 'application/octet-stream'  # 如果获取content_type不到就设置成默认的（下载文件）
        response = FileResponse(file_b, content_type=content_type)  # 设置返回文件
        if encoding:  # 如果文件有编码就设置
            response["Content-Encoding"] = encoding
        return response  # 返回文件
    else:  # 如果不是文件就向客户端报错
        return HttpResponseBadRequest('Open file error!')


def filegx_download(request):  # 文件共享--文件下载
    file = request.GET.get('file')  # 从前端获取下载文件的路径
    file = open(FILEGX_WJGX_DIR + file, 'rb')  # 读取文件2进制
    response = FileResponse(file)  # 设置返回文件
    response['Content-Type'] = 'application/octet-stream'  # 设置 Content-Type(MIME)（设置成下载模式）
    return response  # 返回文件


def filegx_downloadfolder(request):  # 文件共享--下载文件夹
    folder = request.GET.get('folder')  # 获取文件
    folder_dir = os.path.join(FILEGX_WJGX_DIR, str(folder))  # 拼接文件得到路径

    zip_b = io.BytesIO()
    zip = zipfile.ZipFile(zip_b, "w", zipfile.ZIP_STORED)
    for path, dirnames, filenames in os.walk(folder_dir):
        # 去掉目标跟路径，只对目标文件夹下边的文件及文件夹进行压缩
        fpath = path.replace(folder_dir, '')
        for filename in filenames:
            zip.write(os.path.join(path, filename), os.path.join(fpath, filename))
    zip.close()
    zip_b = zip_b.getvalue()

    filename = os.path.basename(folder[0:len(folder) - 1] + '.zip')
    print(filename)

    response = FileResponse(zip_b, content_type='application/octet-stream')
    response['Content-Disposition'] = "attachment; filename*=utf-8''{}".format(escape_uri_path(filename))
    print("attachment; filename*=utf-8''{}".format(escape_uri_path(filename)))

    return response


def filegx_browse(request):  # 文件共享--预览文件
    file = request.GET.get('file')
    type = request.GET.get('type')
    filename = file
    if type == '.bmp' or type == '.jpg' or type == '.jpeg' or type == '.png' or type == '.gif' or type == '.webp' or type == '.jpe' or type == '.dib':
        web_open_type = 'img'
    elif type == '.svg':
        web_open_type = 'svg'
    elif type == 'mp3':
        web_open_type = 'mp3'
    else:
        return HttpResponseRedirect('/file/download/?file=%s' % file)
    context = {'filename': filename, 'web_open_type': web_open_type}
    return render(request, template_name=r'filegx/filegx_browse.html', context=context)


def filegx_upload(request):  # 文件共享--上传文件
    uploaddir = request.GET.get('uploaddir')
    if request.method == 'GET':
        if not uploaddir == 'tjbus\\':
            return HttpResponse('提示：发生错误')
        return render(request, template_name=r'filegx/filegx_upload.html',context={'uploaddir':uploaddir})
    elif request.method == 'POST':
        file = request.FILES.get('wj')
        with open(os.path.join(FILEGX_WJGX_DIR,'tjbus\\',file.name),'wb') as f:
            for fpd in file.chunks():
                f.write(fpd)
                f.flush()
        return HttpResponse('ok')




