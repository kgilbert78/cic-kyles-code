from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse

from .models import Question, Choice

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
        ## 3rd version from Tutorial Page 3, with 404 shortcut:
    question = get_object_or_404(Question, pk=question_id)
    return render(request, 'polls/detail.html', {'question': question})

def results(request, question_id):
    ## 2nd version, from Tutorial Page 4:
    question = get_object_or_404(Question, pk = question_id)
    # render() takes the request object as its first argument, a template name as its second argument and a dictionary as its optional third argument.
    return render(request, 'polls/results.html', {'question': question})

def vote(request, question_id):
    ## 2nd version, from Tutorial Page 4:
    question = get_object_or_404(Question, pk = question_id)
    try:
        # POST lets you access submitted data by key name - returns ID of selected choice as a string
        selected_choice = question.choice_set.get(pk = request.POST['choice'])
        # KeyError if choice wasn’t provided in POST data
    except (KeyError, Choice.DoesNotExist): 
        # https://dev.to/smotko/prefer-model-doesnotexist-over-objectdoesnotexist-in-django-4lb3
        return render(request, 'polls/detail.html', {
            'question': question,
            'error_message': "You didn't select a choice."
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # HttpResponseRedirect prevents data from being posted twice if user hits the back button.
        return HttpResponseRedirect(reverse('polls:results', args = (question.id,)))
        # HttpResponseRedirect takes 1 argument: URL to redirect to. reverse function returns string like '/polls/3/results/' for question 3.
        # args is a tuple. trailing comma is required for single-item tuples to disambiguate defining a tuple from an expression surrounded by parentheses
        # (next go write results view function above)

        # When a page is requested, Django creates an HttpRequest object (class instance) that contains metadata about the request. Then Django loads the appropriate view, passing the HttpRequest as the first argument to the view function. Each view is responsible for returning an HttpResponse object (class instance).