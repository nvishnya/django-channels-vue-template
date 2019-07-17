from django.views.generic.base import TemplateView
from chat.serializers import MessageSerializer
from django.utils.safestring import mark_safe
from rest_framework import generics
from chat.models import Message
import json


class IndexView(TemplateView):
    template_name = "index.html"


class MessagesListView(generics.ListAPIView):
    serializer_class = MessageSerializer

    def get_queryset(self):
        return Message.objects.filter(room_name=self.kwargs['room_name'])