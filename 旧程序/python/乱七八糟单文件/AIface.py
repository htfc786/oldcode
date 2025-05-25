import pygame
from xes.AIspeak import *
from xes.AI import *

age_flag = False
gender_falg = False
glasses_flag = False
happy_flag = False
# 文字颜色
COLOR = (255,255,255)
# 程序边框大小
WEIGHT,HEIGHT = 1200,1600

def age():
    global age_flag
    age_flag = True
def gender():
    global gender_falg
    gender_falg = True
def glasses():
    global glasses_flag
    glasses_flag = True
def num():
    global happy_flag
    happy_flag = True

def getSound(num):
    nn=getVoice(num)
    ans = speechToText(nn)
    return ans 

def getPicture(image_name = ''):
    if image_name == '':
        a = getPic()#拍照，
        picture_name = a['file_url']
    else:
        picture_name = image_name

    print("欢迎使用网校最强大最完美的智能相机")
    print("3,2,1,开始拍照")
    print("提示：爱笑的人分数最高！")

    image_name = picture_name
    # image_name = '1-1.jpg'
    # 获取数据
    result = faceInfo(image_name)
    # 颜值
    happy = result['res'][0]['faceAttributes']['emotion']['happiness']
    happy_text = '笑容指数:'+str(happy*100)
    sad = result['res'][0]['faceAttributes']['emotion']['sadness']
    # 年龄
    age = result['res'][0]['faceAttributes']['age']
    age_text = str(age)+'岁左右'
    # 眼镜
    glasses = result['res'][0]['faceAttributes']['glasses']
    if glasses == 'NoGlasses':
        glasses_text = '没戴眼镜'
    else:
        glasses_text = '戴眼镜'
    # 性别
    gender = result['res'][0]['faceAttributes']['gender']
    if gender == 'female':
        gender_text = '女'
    else:
        gender_text = '男'


    pygame.init()
    screen = pygame.display.set_mode((WEIGHT,HEIGHT))
    image = pygame.image.load(image_name)

    # 自动调整载入图片的大小
    width = image.get_rect().width
    height = image.get_rect().height
    if width >= height:
        a = 900 / width
        change_width = 900
        change_height = height * a
    else:
        a = 1000 / height
        change_width = width * a
        change_height = 1000
    image = pygame.transform.scale(image, (change_width, change_height))

    # 添加系统时钟
    clock = pygame.time.Clock()
    clock.tick(60)

    # 确定文字居中显示的位置
    font = pygame.font.Font("", 50)
    y_pos2 = 180
    y_pos3 = 300


    screen.fill((120,130,200))
    screen.blit(image, ( (WEIGHT - change_width) / 2, 400+(HEIGHT- 400 - change_height) / 2))

    text1 = font.render('识别的图片内容为：', True, COLOR)
    screen.blit(text1, (340, y_pos2))
    words = ''
    if gender_falg:
        words = words + gender_text + '，'
    if age_flag:
        words = words + age_text + '，'
    if glasses_flag:
        words = words + glasses_text + '，'
    if happy_flag:
        words = words + happy_text
    text2 = font.render(words, True, COLOR)
    x_pos = int(600 - len(words) / 2 * 56)
    screen.blit(text2, (x_pos, y_pos3))

    pygame.display.update()

