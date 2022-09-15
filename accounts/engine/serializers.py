""" Serializers for API views """

# Module imports
from rest_framework import serializers
from django.contrib.auth import authenticate

# Application imports
from engine.handler import JWTHandler


class UserLoginSerializer(serializers.Serializer):
    """ Serializer for 'login/' endpoint """

    # Incoming data from request
    email = serializers.CharField(max_length=250)
    password = serializers.CharField(max_length=128, write_only=True)

    # response data generated
    refresh = serializers.CharField(max_length=1000, read_only=True)
    access = serializers.CharField(max_length=1000, read_only=True)

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass

    def validate(self, attrs):
        """ Method to validate the attributes received and to generate and output """

        # Authenticating the user credentials
        user = authenticate(email=attrs.get('email', None),
                            password=attrs.get('password', None))
        if user is None:
            raise serializers.ValidationError(
                'A user with this email and password is not found.'
            )

        # On a successfull authentication the user secret is updated
        user.generate_new_access_secret()
        user.generate_new_refresh_secret()
        user.save()

        # Getting new tokens based on the user secret
        response_tokens = JWTHandler(params={'user': user}).get_tokens()

        if response_tokens is None:
            raise serializers.ValidationError(
                'Error generating tokens for this user'
            )

        return {
            'email': user.email,
            'access': response_tokens['access'],
            'refresh': response_tokens['refresh']
        }


class RefreshTokenSerializer(serializers.Serializer):
    """ Serializer for refreshing access token """

    # Incoming information
    refresh = serializers.CharField(max_length=2000, write_only=True)

    # Response data
    validator_data = serializers.CharField(max_length=2000, read_only=True)

    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass

    def validate(self, attrs):
        """ Validating incoming information and generating response """
        token = attrs.get('refresh', None)
        validator_data = JWTHandler(params={'token': token}).refresh_tokens()
        return {
            'validator_attrs': validator_data
        }
