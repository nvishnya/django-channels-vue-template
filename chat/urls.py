from chat.views import IndexView, RoomView, MessagesListView
from django.urls.conf import path

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('<room_name>/', RoomView.as_view(), name='room'),
    path('api/messages/<room_name>/', MessagesListView.as_view()),
]