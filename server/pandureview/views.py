from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib import messages
from .models import CarMake
from .forms import CarModelForm
from pandureview.services.sentiment_api import analyze_sentiment
import requests
from pandureview.services.dealer_api import get_all_dealers 
from django.http import HttpResponseRedirect

def dealer_details(request, dealer_id):
    dealer = {}
    review_text = ''
    sentiment = ''

    # Ambil data dealer
    try:
        response = requests.get(f'http://localhost:5000/api/dealer/{dealer_id}')
        if response.ok:
            dealer = response.json()
    except:
        dealer = {}

    # Cek form review
    review_text = ''
    if request.method == 'POST':
        review_text = request.POST.get('review', '')
        sentiment = analyze_sentiment(review_text)

    return render(request, 'dealer_details.html', {
        'dealer': dealer,
        'review': review_text,
        'sentiment': sentiment
    })

    ## return render(request, 'dealer_details.html', {'dealer': dealer})


def add_review(request):
    review = ''
    if request.method == 'POST':
        review = request.POST.get('review', '')
    return render(request, 'add_review.html', {'review': review})


def get_dealers(request):
    try:
        response = requests.get('http://localhost:5000/api/dealers')
        dealers = response.json()
    except:
        dealers = []
    return render(request, 'homepage.html', {'dealers': dealers})


def sentiment_analyzer(request):
    review = request.GET.get('review', '')
    sentiment = None
    if review:
        sentiment = analyze_sentiment(review)
    return render(request, 'sentiment_result.html', {
        'review': review,
        'sentiment': sentiment
    })


def car_make_list(request):
    carmakes = CarMake.objects.all()
    return render(request, 'cars.html', {'carmakes': carmakes})

def create_car(request):
    if request.method == 'POST':
        form = CarModelForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('success')  # ganti sesuai nama URL kamu
    else:
        form = CarModelForm()
    return render(request, 'create_car.html', {'form': form})


def logout_view(request):
    logout(request)
    return redirect('/login/')

def logout_view(request):
    logout(request)
    return render(request, "logged_out.html")


def login_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(request, username=username, password=password)
        if user:
            login(request, user)
            return redirect("/dashboard/")
        else:
            return render(request, "login.html", {"error": "Invalid credentials"})
    return render(request, "login.html")

def register_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")
        confirm = request.POST.get("confirm")

        if password != confirm:
            return render(request, "register.html", {"error": "Passwords do not match"})
        elif User.objects.filter(username=username).exists():
            return render(request, "register.html", {"error": "Username already taken"})
        else:
            User.objects.create_user(username=username, password=password)
            return redirect("/login/")
    return render(request, "register.html")