from django.db import models
from users.models import User


class Task(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('completed', 'Completed'),
    )

    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)

    assigned_to = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='tasks'
    )

    created_by = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='created_tasks'
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='pending'
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title