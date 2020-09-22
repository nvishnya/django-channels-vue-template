from django.db import models

class Message(models.Model):
    room_name = models.TextField(max_length=50)
    text = models.TextField(max_length=300)
    datetime = models.DateTimeField(auto_now_add=True)