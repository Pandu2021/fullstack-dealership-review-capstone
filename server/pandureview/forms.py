from django import forms
from .models import CarModel, CarMake 

class CarModelForm(forms.ModelForm):
    class Meta:
        model = CarModel
        fields = ['make', 'name', 'year']

class CarMakeForm(forms.ModelForm):
    class Meta:
        model = CarMake
        fields = ['name']