from django.db import models

# Create your models here.

class Tool(models.Model):
    name=models.CharField('工具名称',max_length=20)
    url=models.CharField('工具地址',max_length=200)
    desc=models.CharField('描述',max_length=200)
    class Meta:
        verbose_name='工具表'
        verbose_name_plural=verbose_name