from django.urls import path
from .views import *


urlpatterns = [
    path('', index, name='index'),

    path('about', about, name='about'),

    path('contactus', contactus, name='contactus'),

    path('donate', donate, name='donate'),

    path('success', success, name='success'),

    path('failed', failed, name='failed'),

    path('whatwedo', whatwedo, name='whatwedo'),

    # path('donate/', stripe_donate, name='stripe_donate'),
]
