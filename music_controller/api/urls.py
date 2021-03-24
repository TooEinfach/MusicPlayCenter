from django.urls import path
from .views import Roomveiw, CreateRoomView, GetRoom

urlpatterns = [
    path('home', Roomveiw.as_view()),
    path('create-room', CreateRoomView.as_view()),
    path('get-room', GetRoom.as_view())
]
