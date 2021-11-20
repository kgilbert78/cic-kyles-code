from django.http import HttpResponse, Http404
from django.template import context, loader
from django.shortcuts import get_object_or_404, render

from .models import Question

def index(request):
    ## 2nd version from Tutorial Page 3 (page design hard-coded in the view, no template):
    latest_question_list = Question.objects.order_by('-pub_date')[:5] # range of first 5 on the list (indexes 0-4), negative sign in front of "-pub_date" indicates descending order.
    output = ', '.join([q.question_text for q in latest_question_list]) # string.join(iterable) --string is separator
    return HttpResponse(output)

def detail(request, question_id):
    return HttpResponse("You're looking at question %s." % question_id)

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)