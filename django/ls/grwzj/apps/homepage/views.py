from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.conf import settings
import os

# Create your views here.
def upload(request):
    if request.method =="GET":
        return render(request,'file-sharing_upload.html')
    else:
        file = request.FILES.get("file")
        media_root = settings.MEDIA_ROOT
        filepath = os.path.join(media_root,file.name)
        with open(filepath,'wb') as fp:
            for chunk in file.chunks():
                fp.write(chunk)
            return HttpResponse("文件上传成功！")