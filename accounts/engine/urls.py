""" Urls for the accounts engine. """
from django.urls import path
from engine.views import (
    GenerateTokensView,
    RefreshTokenView,
    RegisterUserView,
    ValidateTokenView,
    RevokeTokensView
)

# Url patterns used to get and refresh tokens
urlpatterns = [
    # Accepts user credentials and responds with a pair of tokens
    path('login/', GenerateTokensView.as_view()),
    # Revoke user tokens
    path('logout/', RevokeTokensView.as_view()),
    # Accepts refresh token and responds with new access token
    path('refresh/', RefreshTokenView.as_view()),
    # Checks if token is valid
    path('validate/', ValidateTokenView.as_view()),
    # Creates a new user
    path('register/', RegisterUserView.as_view()),

]
