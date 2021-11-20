from django.http import HttpResponse, Http404
from django.template import context, loader
from django.shortcuts import get_object_or_404, render

from .models import Question

def index(request):
    ## 3rd version from Tutorial Page 3, with template:
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    template = loader.get_template('polls/index.html') # import loader first
    # # pass loaded template a context - a dictionary mapping template variable names to Python objects.
    context = {
        'latest_question_list': latest_question_list,
    }
    return HttpResponse(template.render(context, request))

def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)