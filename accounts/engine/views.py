""" API endpoint views """

# Module imports
from rest_framework.views import APIView
from rest_framework.response import Response

# Application imports
from engine.serializers import (
    UserLoginSerializer,
    RefreshTokenSerializer
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
