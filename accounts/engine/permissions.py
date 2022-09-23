""" Custome permissions for the accounts app """

from rest_framework.permissions import BasePermission

# My imports
from engine.handler import JWTHandler

# Custom is authenticated permission


class IsAuthenticated(BasePermission):
    """ Custom permission to allow only authenticated users """

    def has_permission(self, request, view):
        """ Method to check if user is authenticated """

        try:
            token = request.META.get('HTTP_JWT', None)
            jwt_handler = JWTHandler(params={'token': token})
            request.user = jwt_handler.get_authenticated_user()
        except Exception as exc:
            request.user = None
            raise ValueError("Token parsing failed") from exc

        return request.user and request.user.is_authenticated
