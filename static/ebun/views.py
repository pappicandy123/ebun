import stripe
from django.conf import settings
from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import TeamMember

# Create your views here.

stripe.api_key = settings.STRIPE_SECRET_KEY

def index(request):
   
    return render(request, 'index.html')

def donate(request):
    context = {
        'stripe_publishable_key': settings.STRIPE_PUBLISHABLE_KEY,
    }
   
    return render(request, 'donate.html',context)


def about(request):
   team_members = TeamMember.objects.all()
   return render(request, 'about.html', {'team_members': team_members})

def contactus(request):
   
    return render(request, 'contactus.html')

def success(request):
   
    return render(request, 'success.html')

def failed(request):
   
    return render(request, 'failed.html')

def whatwedo(request):
   
    return render(request, 'whatwedo.html')

def stripe_donate(request):
    if request.method == 'POST':
        amount = int(float(request.POST.get('amount')) * 100)  # amount in cents
        token = request.POST.get('stripeToken')

        try:
            charge = stripe.Charge.create(
                amount=amount,  # Amount in cents
                currency='usd',
                description='Donation to EbunOluwa Foundation',
                source=token
            )
            return render(request, 'success.html')  # Redirect to success page after successful payment
        except stripe.error.StripeError:
            return render(request, 'failed.html')  # Handle payment failure

    return render(request, 'donate.html', {
        'stripe_publishable_key': settings.STRIPE_PUBLISHABLE_KEY
    })