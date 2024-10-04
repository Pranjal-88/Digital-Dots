from django.shortcuts import render
from .models import Chat
from django.contrib.auth.models import User
from .gpt import get_response

def index(request):
    if request.method=="POST":
        msg=request.POST["msg"]
        response=get_response(msg)
        # response="Null"
        new_obj=Chat.objects.create(user=request.user,message=msg,response=response)
        new_obj.save()
    return render(request,"index.html")
