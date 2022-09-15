""" Tests for API engine """

# Native imports
import json

# Module imports
from django.test import TestCase
from rest_framework.test import APIRequestFactory, APIClient

# Application imports
from engine.models import User


class EngineTests(TestCase):
    """ Tests for API engine """

    factory = APIRequestFactory()
    client = APIClient()
    REQUESTS = {
        'RefreshTokenView': {
            'route': 'http://127.0.0.1:8000/tokens/refresh/',
            'tests': [
                {
                    'body': {},
                    'assert': 400
                },
                {
                    'body': {'refresh': ''},
                    'assert': 400
                }
            ]
        },
        'GenerateTokensView': {
            'route': 'http://127.0.0.1:8000/tokens/login/',
            'tests': [
                {
                    'body': {'email': 'testuser@gmail.com', 'password': 'password'},
                    'assert': 200
                },
                {
                    'body': {'email': 'userthatdoesnotexist@gmail.com', 'password': 'password'},
                    'assert': 400
                },
                {
                    'body': {'email': 'testuser@gmail.com'},
                    'assert': 400
                }
            ]
        }
    }

    def test_refresh_tokens_view(self):
        """ Tests for token refresh view """

        # Creating the default user
        User.objects.create_user(
            email='testuser1@gmail.com', password='password')

        # Executing all the requests
        for request in self.REQUESTS['RefreshTokenView']['tests']:
            response = self.client.post(
                self.REQUESTS['RefreshTokenView']['route'],
                json.dumps(request['body']),
                content_type='application/json'
            )
            assert response.status_code == request['assert']

    def test_generate_tokens_view(self):
        """Tests for the token login view"""

        # Creating the default user
        User.objects.create_user(
            email='testuser@gmail.com', password='password')

        # Executing all the requests
        for request in self.REQUESTS['GenerateTokensView']['tests']:
            response = self.client.post(
                self.REQUESTS['GenerateTokensView']['route'],
                json.dumps(request['body']),
                content_type='application/json'
            )
            assert response.status_code == request['assert']
