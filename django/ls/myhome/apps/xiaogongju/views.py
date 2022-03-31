from django.shortcuts import render

# Create your views here.
def xiaogonju_index(request):
    return render(request, 'index_xiaogongju.html')


def bmi(request):
    num = 0
    context = {'bmi': 0.00, 'tips': ''}
    if request.method == 'POST':
        num += 1
        try:
            weight = float(request.POST['weight'])
            height = float(request.POST['height'])
            bmi = weight / (height ** 2)
            context['bmi'] = round(bmi, 1)
            if context['bmi'] == 0.00:
                context['tips'] = ''
            if context['bmi'] <= 18:
                context['tips'] = "你的身体偏瘦，注意你的饮食!!"
            if 18 < context['bmi'] <= 24:
                context['tips'] = "你的身体很正常。"
            if 24 < context['bmi'] <= 27:
                context['tips'] = "你的身体超重了！！o(╥﹏╥)o"
            if 27 < context['bmi'] <= 30:
                context['tips'] = "你的身体肥胖，注意减肥，不要吃太多!!"
            if context['bmi'] > 30:
                context['tips'] = "你的身体严重肥胖，注意减肥，不要吃太多，在这样下去，你可能得“三高”!!"
        except Exception as e:
            if num < 1:
                context['bmi'] = '发生错误，可能因为身高体重没有输入正确的数值!!!'

    return render(request, 'bmi.html', context=context)


def feihuashengchengqi(request):
    return render(request, 'feihuashengchengqi.html')

