from django.shortcuts import render
from django.contrib.auth import get_user_model, authenticate

from rest_framework import viewsets, permissions
from rest_framework.response import Response

from knox.models import AuthToken

from .serializers import *
from .models import *

User = get_user_model()

# Inicio de sesión
class LoginViewSet(viewsets.ViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LoginSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(request, email=email, password=password)

            if user:
                _, token = AuthToken.objects.create(user)
                return Response(
                    {
                        "user": self.serializer_class(user).data,
                        "token": token
                    }
                )
            else:
                return Response({"error": "Credenciales incorrectas"}, status=401)
        
        else:
            return Response(serializer.errors, status=400)
        
# Registro de usuarios
class RegisterViewSet(viewsets.ViewSet):
    permission_classes = [
        permissions.AllowAny
    ]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors, status=400)
        
# Obtener datos del usuarios
class UserViewSet(viewsets.ViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def list(self, request):
        queryset = User.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)
