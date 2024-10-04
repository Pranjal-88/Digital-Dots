from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import MessageSerializer
from .models import Message
from .gene import get_npresponse, get_ppresponse

@api_view(['GET'])
def comments_p(request):
    all_msgs = Message.objects.all()
    current_text = "".join(msg.actual_content for msg in all_msgs)
    resp = get_ppresponse(current_text)
    return Response({'response_p': resp})

@api_view(['GET'])
def comments_n(request):
    all_msgs = Message.objects.all()
    current_text = "".join(msg.actual_content for msg in all_msgs)
    resp = get_npresponse(current_text)
    return Response({'response_n': resp})

@api_view(['GET'])
def comments(request):
    all_messages = Message.objects.all()
    seria = MessageSerializer(all_messages, many=True)
    return Response(seria.data)