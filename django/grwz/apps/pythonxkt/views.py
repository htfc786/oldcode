import os
import time
from django.shortcuts import HttpResponse, render
from app_settings.settings import PYTHONXKT_VIDEO_DIR


# Create your views here.

def pythonxkt_inedx(request):
    subdir = ''
    current_list = os.listdir(PYTHONXKT_VIDEO_DIR)
    contents = []
    for i in sorted(current_list):
        fullpath = PYTHONXKT_VIDEO_DIR + os.sep + i
        # 如果是目录，在后面添加一个sep
        if os.path.isdir(fullpath):
            extra = os.sep
        else:
            extra = ''
        content = {}
        content['filename'] = i + extra
        content['mtime'] = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(os.stat(fullpath).st_mtime))
        content['size'] = str(round(os.path.getsize(fullpath) / 1024)) + 'k'
        contents.append(content)
    context = {'contents': contents, 'subdir': subdir, 'ossep': os.sep}
    return render(request, 'pythonxkt\pythonxkt.html', context=context)


def pythonxkt_video(request):
    video = request.GET.get('video')
    if video == None:
        return HttpResponse('')
    else:
        try:
            path = PYTHONXKT_VIDEO_DIR + video
            file_one = open(path, "rb")
            return HttpResponse(file_one.read(), content_type='video/mp4')
        except FileNotFoundError as e:
            return HttpResponse('<title>错误</title>错误：没有找到此视频')

