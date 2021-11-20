from django.http import HttpResponse, Http404
from django.template import context, loader
from django.shortcuts import get_object_or_404, render

from .models import Question

def index(request):
     ## 4th version from Tutorial Page 3, with template and render shortcut:

    # range of first 5 on the list (indexes 0-4), negative sign in front of "-pub_date" indicates descending order.
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    # pass loaded template a context - a dictionary mapping template variable names to Python objects.
    context = {
        'latest_question_list': latest_question_list
    }
    # render() takes the request object as its first argument, a template name as its second argument and a dictionary as its optional third argument.
    return render(request, 'polls/index.html', context) # import render from shortcuts first

def detail(request, question_id):
    ## 2nd version from Tutorial Page 3, with 404 the long way:
    try:
        question = Question.objects.get(pk = question_id)
    except Question.DoesNotExist:
        raise Http404("Question does not exist") # import Http404 first
    return render(request, 'polls/detail.html', {'question': question}) # last thing is the context dict w/o variable

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)