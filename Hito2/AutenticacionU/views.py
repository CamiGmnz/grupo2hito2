from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm

def registro(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, 'Registro exitoso.')
            return redirect('inicio')
    else:
        form = UserCreationForm()
    return render(request, 'registro.html', {'form': form})

def inicio_sesion(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.info(request, f'Bienvenido, {username}.')
                return redirect('inicio')
    else:
        form = AuthenticationForm()
    return render(request, 'inicio_sesion.html', {'form': form})

def cerrar_sesion(request):
    logout(request)
    messages.info(request, 'Sesión cerrada con éxito.')
    return redirect('inicio')


# Create your views here.
