from django.urls import path
from .views import Roomveiw, CreateRoomView

urlpatterns = [
    path('home', Roomveiw.as_view()),
    path('create-room', CreateRoomView.as_view()),
]
