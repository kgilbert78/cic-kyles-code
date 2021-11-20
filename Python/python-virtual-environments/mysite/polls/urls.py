from django.urls import path
from . import views


app_name = 'polls'
urlpatterns = [
    path('', views.index, name='index'), # /polls/ endpoint
    path('<int:question_id>/', views.detail, name='detail'), # for example /polls/5/ supplies 5 to the detail function in views.py using <int:question_id> matched to route parameter. int is converter.
    path('<int:question_id>/results/', views.results, name='results'), # for example /polls/5/results/
    path('<int:question_id>/vote/', views.vote, name='vote'), # for example /polls/5/vote/ 
]
