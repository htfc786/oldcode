from django.shortcuts import render
from .models import Tool
from django.http import HttpResponse, Http404, StreamingHttpResponse
from django.conf import settings
import os

# Create your views here.

def toollist(request):
    tools=Tool.objects.all()
    return render(request, 'file-sharing_toollist.html',locals())

def manage(request):
    return render(request, 'file-sharing_toollist2.html')

def upload(request):
    name=request.POST.get("name")
    filename = request.FILES.get("file", None)
    if request.method == "POST":
        myfile = request.FILES.get("file", None)
        if not myfile:
            return HttpResponse("nofiles for uplad")
        destination = open(os.path.join(settings.MEDIA_ROOT, 'files/' + myfile.name), 'wb+')
        for chunk in myfile.chunks():
            destination.write(chunk)
        destination.close()
    try:
        tool=Tool.objects.create()
        tool.name=name
        tool.desc=name
        tool.url='files/' + myfile.name
        tool.save()
    except:
        return HttpResponse('添加失败<br/>' + name + "<br/>" + filename.name)
    return HttpResponse('添加成功<br/>'+name+"<br/>"+filename.name)

def stream_http_download(request, sid):
    file_path=Tool.objects.get(id=sid)
    filepath = os.path.join(settings.MEDIA_ROOT, file_path.url)
    fp = open(filepath, 'rb')
    response = StreamingHttpResponse(fp)
    # response = FileResponse(fp)
    response['Content-Type'] = 'application/octet-stream'
    response['Content-Disposition'] = 'attachment;filename="%s"' % file_path.url
    return response
    fp.close()