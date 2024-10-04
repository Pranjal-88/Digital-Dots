from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .response import get_response

@api_view(['POST'])
def chatbot(request):
    data=request.data
    prompt=request.get('prompt')

    ans=get_response(prompt)

    return Response({'question':prompt,'answer':ans})






