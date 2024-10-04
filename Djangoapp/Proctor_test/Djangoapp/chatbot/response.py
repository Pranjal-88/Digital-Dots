import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
api_key=os.getenv('API_KEY')

genai.configure(api_key=api_key)
model=genai.GenerativeModel('gemini-1.5-flash')

def get_response(msg):
    message=model.generate_content(msg+"in about 100 words")
    message=message.text.replace('**', '')
    message=message.replace('*', '')
    return message

