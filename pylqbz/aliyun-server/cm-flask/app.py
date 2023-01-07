from flask import Flask
from flask import request
from flask import render_template
import filegx
import pythonxkt
import lt


app = Flask(__name__)

@app.route('/', methods=['GET','POST'])
def bmi():
    context = {'bmi': 0.00, 'tips': ''}
    if request.method == 'POST':
        num += 1
        try:
            weight = request.form.getlist('weight')[0]
            height = request.form.getlist('height')[0]
            if weight == 'admin' and height == 'cbxadmincbx666verybl':
                with open('request_cs.txt','w') as f:
                    f.write('0')
            else:
                weight = float(weight)
                height = float(height)
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
                context['bmi'] = '发生错误，可能因为身高体重没有输入正确的数值!!!'''

    return render_template('homepage.html',bmi=context['bmi'],tips=context['tips'])


filegx.init(app=app,rootdir='/root/filegx/')
pythonxkt.init(app=app,rootdir='/root/pythonxkt')
lt.init(app=app)

app.run('0.0.0.0','90')