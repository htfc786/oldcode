from django.urls import path
from . import views

urlpatterns = [
    path('',views.xiaogonju_index),
    path('bmi/',views.bmi),
    path('feihuashengchengqi/',views.feihuashengchengqi)
]
