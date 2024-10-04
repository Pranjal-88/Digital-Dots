import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
api_key=os.getenv('API_KEY')

genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-1.5-flash')

# with open('data.txt','r') as file:
#     curr_data=file.read()

def get_ppresponse(msg):
    response=model.generate_content("Create a summarization of positive reviews from this data:"+msg)
    return response.text

def get_npresponse(msg):
    response=model.generate_content("Create a summarization of negative reviews from this data:"+msg)
    return response.text

