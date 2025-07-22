from django.urls import path
from . import views
from django.views.generic import TemplateView
from .views import car_make_list
from .views import create_car
from .views import sentiment_analyzer
from .views import get_dealers
from .views import add_review
from .views import dealer_details




urlpatterns = [
    path('', TemplateView.as_view(template_name='home.html'), name='home'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('register/', views.register_view, name='register'),
    path('dashboard/', TemplateView.as_view(template_name='dashboard.html'), name='dashboard'),
    path('about/', TemplateView.as_view(template_name='about.html'), name='about'),
    path('contact/', TemplateView.as_view(template_name='contact.html'), name='contact'),
    path('cars/', car_make_list, name='car_make_list'),
    path('create/', create_car, name='create_car'),
    path('sentiment/', sentiment_analyzer, name='sentiment'),
    path('', get_dealers, name='homepage'),
    path('review/', add_review, name='add_review'),
    path('dealer/<int:dealer_id>/', dealer_details, name='dealer_details'),
]


    
