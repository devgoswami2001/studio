from django.db import models

# Create your models here.
# Example for Blog Post (can be expanded later)
# class BlogPost(models.Model):
#     slug = models.SlugField(unique=True, max_length=255)
#     title = models.CharField(max_length=255)
#     date = models.DateField()
#     author = models.CharField(max_length=100, default="ChartMind AI Team")
#     image_url = models.URLField(max_length=500, blank=True, null=True)
#     image_alt = models.CharField(max_length=255, blank=True, null=True)
#     data_ai_hint = models.CharField(max_length=50, blank=True, null=True) # For placeholder images
#     content_html = models.TextField() # Store pre-rendered HTML
#     excerpt = models.TextField(blank=True, null=True)

#     def __str__(self):
#         return self.title

#     def get_absolute_url(self):
#         from django.urls import reverse
#         return reverse('blog_post_detail', kwargs={'slug': self.slug})

#     class Meta:
#         ordering = ['-date']
