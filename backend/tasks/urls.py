from django.urls import path
from .views import home, getTasks

urlpatterns = [
    path('', home),
    path('tasks/', getTasks),
]