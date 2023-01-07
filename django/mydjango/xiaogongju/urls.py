from . import views
from django.urls import path

urlpatterns = {
    path('', views.index),
    path('jisuanlai/bmi/', views.bmi),
    path('yuyanlei/feihuashengchengqi/', views.feihuashengchengqi),
}
