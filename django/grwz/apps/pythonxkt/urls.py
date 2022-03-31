from django.urls import path
from . import views

urlpatterns = [
    path('', views.pythonxkt_inedx, name='pythonxkt_inedx'),
    path('video/', views.pythonxkt_video, name='pythonxkt_pythonxkt_video'),
]
