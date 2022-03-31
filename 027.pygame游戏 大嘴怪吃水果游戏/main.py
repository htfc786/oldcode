import pygame
import sys
import random

pygame.init()
screen = pygame.display.set_mode((700, 700))
pygame.display.set_caption("大嘴怪吃水果   --作者：htfc786")
pygame.mouse.set_visible(False)
bgImg = pygame.image.load("bgPic.png")
heroX = 300
heroY = 300
size = 100
speed = 50
c= 0
jc = 1
Font = pygame.font.Font("ahronbd.ttf",100)
heroImg = pygame.image.load("hero1.png")
heroImgs = pygame.transform.scale(heroImg, (size, size))
fruit1 = pygame.image.load("fruit1.png")
fruit2 = pygame.image.load("fruit2.png")
fruit3 = pygame.image.load("fruit3.png")
fruit4 = pygame.image.load("fruit4.png")
fruit5 = pygame.image.load("fruit5.png")
fImg = [fruit1, fruit2, fruit3, fruit4, fruit5]
fruit1 = pygame.transform.scale(fImg[random.randint(0, 4)], (40, 40))
fruit2 = pygame.transform.scale(fImg[random.randint(0, 4)], (40, 40))
fruit3 = pygame.transform.scale(fImg[random.randint(0, 4)], (40, 40))
fruit4 = pygame.transform.scale(fImg[random.randint(0, 4)], (40, 40))
fruit5 = pygame.transform.scale(fImg[random.randint(0, 4)], (40, 40))
hRect = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect1 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect2 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect3 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect4 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect5 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect6 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect7 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect8 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect9 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect10 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect11 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect12 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect13 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect14 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect15 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect16 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect17 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect18 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect19 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
fRect20 = pygame.Rect(random.randint(50, 650), random.randint(50, 650), 40, 40)
while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        elif event.type == pygame.MOUSEMOTION:
            hRect.center = event.pos

    # 范围为负数时比如(-40,-30)模拟消失的状态；范围内比如(50,650)出现在画布其他位置
    if hRect.colliderect(fRect1):
        c += jc
        fRect1.x = random.randint(50, 650)
        fRect1.y = random.randint(50, 650)
    if hRect.colliderect(fRect2):
        c += jc
        fRect2.x = random.randint(50, 650)
        fRect2.y = random.randint(50, 650)
    if hRect.colliderect(fRect3):
        c += jc
        fRect3.x = random.randint(50, 650)
        fRect3.y = random.randint(50, 650)
    if hRect.colliderect(fRect4):
        c += jc
        fRect4.x = random.randint(50, 650)
        fRect4.y = random.randint(50, 650)
    if hRect.colliderect(fRect5):
        c += jc
        fRect5.x = random.randint(50, 650)
        fRect5.y = random.randint(50, 650)
    if hRect.colliderect(fRect6):
        c += jc
        fRect6.x = random.randint(50, 650)
        fRect6.y = random.randint(50, 650)
    if hRect.colliderect(fRect7):
        c += jc
        fRect7.x = random.randint(50, 650)
        fRect7.y = random.randint(50, 650)
    if hRect.colliderect(fRect8):
        c += jc
        fRect8.x = random.randint(50, 650)
        fRect8.y = random.randint(50, 650)
    if hRect.colliderect(fRect9):
        c += jc
        fRect9.x = random.randint(50, 650)
        fRect9.y = random.randint(50, 650)
    if hRect.colliderect(fRect10):
        c += jc
        fRect10.x = random.randint(50, 650)
        fRect10.y = random.randint(50, 650)
    if hRect.colliderect(fRect11):
        c += jc
        fRect11.x = random.randint(50, 650)
        fRect11.y = random.randint(50, 650)
    if hRect.colliderect(fRect12):
        c += jc
        fRect12.x = random.randint(50, 650)
        fRect12.y = random.randint(50, 650)
    if hRect.colliderect(fRect13):
        c += jc
        fRect13.x = random.randint(50, 650)
        fRect13.y = random.randint(50, 650)
    if hRect.colliderect(fRect14):
        c += jc
        fRect14.x = random.randint(50, 650)
        fRect14.y = random.randint(50, 650)
    if hRect.colliderect(fRect15):
        c += jc
        fRect15.x = random.randint(50, 650)
        fRect15.y = random.randint(50, 650)
    if hRect.colliderect(fRect16):
        c += jc
        fRect16.x = random.randint(50, 650)
        fRect16.y = random.randint(50, 650)
    if hRect.colliderect(fRect17):
        c += jc
        fRect17.x = random.randint(50, 650)
        fRect17.y = random.randint(50, 650)
    if hRect.colliderect(fRect18):
        c += jc
        fRect18.x = random.randint(50, 650)
        fRect18.y = random.randint(50, 650)
    if hRect.colliderect(fRect19):
        c += jc
        fRect19.x = random.randint(50, 650)
        fRect19.y = random.randint(50, 650)
    if hRect.colliderect(fRect20):
        c += jc
        fRect2.x = random.randint(50, 650)
        fRect2.y = random.randint(50, 650)

    screen.blit(bgImg, (0, 0))
    screen.blit(heroImgs, hRect)
    screen.blit(fruit1, fRect1)
    screen.blit(fruit2, fRect2)
    screen.blit(fruit3, fRect3)
    screen.blit(fruit4, fRect4)
    screen.blit(fruit5, fRect5)
    screen.blit(fruit1, fRect6)
    screen.blit(fruit2, fRect7)
    screen.blit(fruit3, fRect8)
    screen.blit(fruit4, fRect9)
    screen.blit(fruit5, fRect10)
    screen.blit(fruit1, fRect11)
    screen.blit(fruit2, fRect12)
    screen.blit(fruit3, fRect13)
    screen.blit(fruit4, fRect14)
    screen.blit(fruit5, fRect15)
    screen.blit(fruit1, fRect16)
    screen.blit(fruit2, fRect17)
    screen.blit(fruit3, fRect18)
    screen.blit(fruit4, fRect19)
    screen.blit(fruit5, fRect20)
    if len(str(c)) < 10:
        text = 'score:' + str(c)
    else:
        text = 'score:------------'
    cText = Font.render(text,12,(0,255,0))
    screen.blit(cText, (0,10))
    pygame.display.update()
