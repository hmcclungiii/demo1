from django.views.generic import TemplateView

class HomePageView(TemplateView):
    template_name = "demo1/home.html"


class AboutPageView(TemplateView):
    template_name = "demo1/about.html"


class SearchPageView(TemplateView):
    template_name = "demo1/search.html"
