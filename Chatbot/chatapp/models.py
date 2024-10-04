from django.db import models
from django.contrib.auth import get_user_model
from datetime import datetime

reqd_user=get_user_model()

class Chat(models.Model):
    user=models.ForeignKey(reqd_user,on_delete=models.CASCADE,related_name='chats')
    message=models.CharField(max_length=100000)
    response=models.CharField(max_length=1000000)
    time=models.TimeField(default=datetime.now().time())
