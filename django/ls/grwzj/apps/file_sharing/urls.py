from django.urls import path
from . import views

urlpatterns = [
    path('', views.toollist,name='index'),
    path('manage/',views.manage),
    path('upload/',views.upload,name='upload'),
    path('down-<int:sid>.html', views.stream_http_download, name='down'),
]