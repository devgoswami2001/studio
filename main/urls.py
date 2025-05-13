from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('blog/', views.blog_list_view, name='blog_list'),
    path('blog/<slug:slug>/', views.blog_post_detail_view, name='blog_post_detail'),
    path('privacy-policy/', views.privacy_policy_view, name='privacy_policy'),
    path('terms-of-service/', views.terms_of_service_view, name='terms_of_service'),
]
