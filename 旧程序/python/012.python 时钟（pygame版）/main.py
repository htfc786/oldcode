import pygame
import time
import sys

pygame.init()
screen = pygame.display.set_mode([310,100])
pygame.display.set_caption("clock")

fpsclock = pygame.time.Clock()

font = pygame.font.Font("ahronbd.ttf",100)

hour = int(time.strftime("%H", time.localtime()))
mins = int(time.strftime("%M", time.localtime()))
second = int(time.strftime("%S", time.localtime()))

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()

    clocktext = ""

    if hour < 10:
        clocktext = "0" + str(hour)
    else:
        clocktext = str(hour)

    if mins < 10:
        clocktext = clocktext + ":" + "0" + str(mins)
    else:
        clocktext = clocktext + ":" + str(mins)

    if second < 10:
        clocktext = clocktext + ":" + "0" + str(second)
    else:
        clocktext = clocktext + ":" + str(second)

    screen.fill((0,0,0))
    screen.blit(font.render(clocktext,12,(255,255,255)),(0,10))

    if second == 59:
        second = -1
        mins = mins + 1
    if mins == 60 and second == -1:
        mins = 0
        hour = hour + 1
    if hour == 24 and mins == 0 and second == -1:
        hour = 0

    second = second + 1

    pygame.display.update()
    fpsclock.tick(1)