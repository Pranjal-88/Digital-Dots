from django.urls import path
from . import views

urlpatterns=[
    path('commentsp/',views.comments_p,name="comments_p"),
    path('commentsn/',views.comments_n,name="comments_n"),
    path('comments/',views.comments,name="comments")
]