from django.views.generic.base import TemplateView
from chat.serializers import MessageSerializer
from django.utils.safestring import mark_safe
from rest_framework import generics
from chat.models import Message
import json


class IndexView(TemplateView):
    template_name = "room_input.html"


class RoomView(TemplateView):
    template_name = "chat_room.html"

    def get_context_data(self, **kwargs):
        context = super(RoomView, self).get_context_data()
        context['room_name_json'] = mark_safe(json.dumps(self.kwargs['room_name']))
        return context


class MessagesListView(generics.ListAPIView):
    serializer_class = MessageSerializer

    def get_queryset(self):
        return Message.objects.filter(room_name=self.kwargs['room_name'])