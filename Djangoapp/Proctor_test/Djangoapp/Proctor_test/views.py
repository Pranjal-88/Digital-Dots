from django.shortcuts import render, redirect
import cv2
from django.http import StreamingHttpResponse

face_cascade = cv2.CascadeClassifier(r"C:\Users\HP\OneDrive\Desktop\PranCode\Cfg\backend\Team-58\haarcascade_frontalface_default.xml")

def gen(camera):
    while True:
        ret, frame = camera.read()
        
        if not ret:
            break

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

        # Draw bounding boxes around faces
        for (x, y, w, h) in faces:
            cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)

        _, jpeg = cv2.imencode('.jpg', frame)
        frame = jpeg.tobytes()
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

def video_feed(request):
    camera = cv2.VideoCapture(0)
    
    # Check if multiple faces are detected
    def check_faces():
        while True:
            ret, frame = camera.read()
            if not ret:
                break
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
            if len(faces) > 1:
                return False
            return True
    
    if not check_faces():
        return redirect('/')
    
    return StreamingHttpResponse(gen(camera), content_type='multipart/x-mixed-replace; boundary=frame')

def test(request):
    return render(request, 'test.html')
