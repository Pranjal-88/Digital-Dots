import google.generativeai as genai

api_key="AIzaSyBqygtppxxrK3ryHT8hz-qUtVmyZIqamOw"
genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-1.5-flash')

def get_response(msg):

  response = model.generate_content("Answer in around 100 words"+msg)
  return response.text

