""" API endpoint views """

# Module imports
from rest_framework.views import APIView
from rest_framework.response import Response

# Application imports
from engine.permissions import IsAuthenticated
from engine.serializers import (
    UserLoginSerializer,
    RefreshTokenSerializer,
    UserSerializer
)


class GenerateTokensView(APIView):
    """ API for token generation """

    # API setup
    permission_classes = ()
    authentication_classes = ()

    # Response variables
    response = None
    response_code = None

    def post(self, request):
        """ Method handling post request made to this API endpoint """

        # Login serializer initialization with the incoming data
        login_serializer = UserLoginSerializer(data=request.data)

        # API logic
        if login_serializer.is_valid():
            self.response = login_serializer.data
            self.response_code = 200
        else:
            self.response = login_serializer.errors
            self.response_code = 400

        # API response using response variables
        return Response(self.response, self.response_code)


class RefreshTokenView(APIView):
    """ API for access token refreshing """

    # API setup
    permission_classes = ()
    authentication_classes = ()

    # Response variables
    response = None
    response_code = None

    def post(self, request):
        """ Method handling post request made to this API endpoint """

        # Refresh serializer initialization with the incoming data
        refresh_serializer = RefreshTokenSerializer(data=request.data)

        # API logic
        if refresh_serializer.is_valid():
            self.response = refresh_serializer.data
            self.response_code = 200
        else:
            self.response = refresh_serializer.errors
            self.response_code = 400

        # API response using response variables
        return Response(self.response, self.response_code)


class RegisterUserView(APIView):
    """ API for user registration """

    # API setup
    permission_classes = ()
    authentication_classes = ()

    # Response variables
    response = None
    response_code = None

    def post(self, request):
        """ Method handling post request made to this API endpoint """

        # User serializer initialization with the incoming data
        user_serializer = UserSerializer(data=request.data)

        # API logic
        if user_serializer.is_valid():
            user_serializer.save()
            self.response = user_serializer.data
            self.response_code = 200
        else:
            self.response = user_serializer.errors
            self.response_code = 400

        # API response using response variables
        return Response(self.response, self.response_code)


class ValidateTokenView(APIView):
    """ API for token validation """

    # API setup
    permission_classes = (IsAuthenticated,)
    authentication_classes = ()

    # Response variables
    response = None
    response_code = None

    def get(self, request):
        """ Method handling get request made to this API endpoint """

        # API logic
        self.response = {'message': 'Token is valid',
                         'user': request.user.email}
        self.response_code = 200

        # API response using response variables
        return Response(self.response, self.response_code)


class RevokeTokensView(APIView):
    """ API for token revocation """

    # API setup
    permission_classes = (IsAuthenticated,)
    authentication_classes = ()

    # Response variables
    response = None
    response_code = None

    def post(self, request):
        """ Method handling post request made to this API endpoint """

        # API logic
        request.user.revoke_tokens()
        self.response = {'message': 'Tokens revoked'}
        self.response_code = 200

        # API response using response variables
        return Response(self.response, self.response_code)
