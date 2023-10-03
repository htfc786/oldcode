import pygame
import sys
import random

carnum = 5

pygame.init()
screen = pygame.display.set_mode((500, 880))
pygame.display.set_caption("634Game --作者：htfc786")

def getimg(name,size=None):
    img = pygame.image.load(name)
    if size == None:
        return img
    return pygame.transform.scale(img,size)

def getfont(size):
    return pygame.font.Font("ahronbd.ttf",size)

def getsound(name,volume=1):
    sound = pygame.mixer.Sound(name)
    sound.set_volume(volume)
    return sound

bgImage = getimg('.\\img\\bg.jpg')
tjgjlogoImage = getimg('.\\img\\tjgjlogo.jpg')

carImagename = ['.\\img\\cargreen.jpg','.\\img\\carred.jpg','.\\img\\caryellow.jpg']
carImagej = []
carImage = []
for carImagename in carImagename:
    carImageq = getimg(carImagename)
    carImagej.append(carImageq)
for i in range(carnum):
    carImageq = random.choice(carImagej)
    carImage.append(carImageq)

def exit():
    pygame.quit()
    sys.exit()

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit()

    screen.fill((255, 255, 255))

    screen.blit(bgImage,(0,80))
    screen.blit(tjgjlogoImage,(0,0))

    for i in range(9):
        screen.blit(carImage[1],(random.randint(0, 500),random.randint(0, 880)))
        screen.blit(carImage[0],(random.randint(0, 500),random.randint(0, 880)))
        screen.blit(carImage[2],(random.randint(0, 500),random.randint(0, 880)))


    pygame.display.update()