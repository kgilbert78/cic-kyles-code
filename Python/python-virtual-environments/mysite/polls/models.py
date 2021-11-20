import datetime
from django.db import models
from django.utils import timezone

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    # print() should display the text not the structure ( https://www.educative.io/edpresso/what-is-the-str-method-in-python )
    # otherwise >>> Question.objects.all() prints <QuerySet [<Question: Question object (1)>]>
    def __str__(self):
        return self.question_text

    def was_published_recently(self):
        # select where pub_date is within 1 day before current time ( https://www.geeksforgeeks.org/python-datetime-timedelta-function/ )
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1) # import timezone & datetime 1st


class Choice(models.Model):
    # when deleted, also delete objects that have reference to question ( https://stackoverflow.com/questions/38388423/what-does-on-delete-do-on-django-models )
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text