from django.urls import path
from . import views

urlpatterns=[
    path('test',views.test,name="test"),
    path('video_feed',views.video_feed,name="video_feed")
]