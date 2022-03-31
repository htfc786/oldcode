from django.urls import path
from . import views

urlpatterns = [
    path('', views.lt, name='lt'),
    path('lts/', views.lt_lts, name='lt_lts'),
    path('lts/ws/', views.lt_lts_ws, name='lt_lts_ws'),
]
