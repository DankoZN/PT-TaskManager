from django.urls import path
from .views import TaskList, TaskDetail, UserTaskList

urlpatterns = [
    path('', UserTaskList.as_view(), name='user-task-list'),
    path('tasks/', TaskList.as_view(), name='task-list'),
    path('tasks/<int:pk>/', TaskDetail.as_view(), name='task-detail'),
]
