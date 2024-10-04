from django.db import models

class Message(models.Model):
    user_name=models.CharField(max_length=100)
    actual_content=models.TextField(max_length=10000)
    time=models.TimeField()
