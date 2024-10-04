from django.urls import path
from . import views

urlpatterns=[
    path('',views.test,name="test"),
    path('video_feed',views.video_feed,name="video_feed"),
    path('check_malpractice', views.check_malpractice),
]
