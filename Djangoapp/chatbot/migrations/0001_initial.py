# Generated by Django 5.0.6 on 2024-07-27 17:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Query',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_input', models.TextField(max_length=1000)),
                ('gen_text', models.TextField(max_length=1000)),
            ],
        ),
    ]