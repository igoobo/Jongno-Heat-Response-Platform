from django.shortcuts import render

# Create your views here.
def map_view(request):
    context= {}
    return render(request, 'map_viewer/map.html')

