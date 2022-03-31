from django.urls import path
from . import views

urlpatterns = [
    path('', views.filegx_index, name='filegx_index'),
    # path('css/', views.filegx_css, name='filegx_css'),
    path('wj/', views.filegx_wj, name='filegx_wj'),
    path('download/', views.filegx_download, name='filegx_download'),
    path('downloadfolder/', views.filegx_downloadfolder, name='filegx_downloadfolder'),
    path('browse/', views.filegx_browse, name='filegx_browse'),
    path('upload/', views.filegx_upload, name='filegx_upload'),
]
