""" Middleware that handles authentication on incoming requests """

# Django imports
from django.utils.deprecation import MiddlewareMixin

# Application imports
from engine.handler import JWTHandler


class AuthenticationMiddleware(MiddlewareMixin):
    """ Middleware that handles authentication on incoming requests """

    def process_request(self, request):
        """ Method that handles incoming requests """

        # Get token from header 'JWT'
        token = request.META.get('HTTP_JWT', None)

        # parsing the token
        try:
            jwt_handler = JWTHandler(params={'token': token})
            request.user = jwt_handler.get_authenticated_user()
            request.user.is_authenticated = True
        except Exception as exc:
            request.user = None
