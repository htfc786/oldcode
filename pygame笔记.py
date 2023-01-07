#pygame笔记

#1.pygame基本框架
'''
import pygame
import sys

pygame.init()
screen = pygame.display.set_mode(窗口xy大小（元组）)
pygame.display.set_caption(窗口名称)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
'''

#2.显示图片
'''
2.1 加载图片：变量(对象) = pygam.image.load(文件名)  #(主循环之外)
2.2 缩放图片(可省略)：变量(对象) = pygame.transform.scale(图片的变量(对象),缩放后的像素（元组）)  #(主循环之外)
2.3 绘制图片：screen.blit(图片的变量(对象), 图片在画布上绘制的位置xy（元组）)
'''

#3.播放音乐
'''
2.1 加载音乐：sound = pygame.mixer.Sound(文件名)  #(主循环之外)
2.2 调整音乐大小(可省略)：音乐的变量(对象).set_volume(音量大小（数字）)#(主循环之外)
2.3 绘制图片：音乐的变量(对象).paly(写-1代表无限循环播放，不写播放一次)
'''




