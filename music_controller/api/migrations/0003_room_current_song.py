# Generated by Django 3.1.5 on 2021-04-08 17:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20201218_1626'),
    ]

    operations = [
        migrations.AddField(
            model_name='room',
            name='current_song',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
