from django.urls import path
from .views import Roomveiw

urlpatterns = [
    path('home', Roomveiw.as_view()),
]
