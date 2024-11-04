from django.db import models

# Create your models here.
class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    bio = models.TextField()
    more_text = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='team_images/')

    def __str__(self):
        return self.name