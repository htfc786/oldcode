import pygame
import random
import time
import sys

pygame.init()
screen = pygame.display.set_mode([920,518])   #,pygame.FULLSCREEN
pygame.display.set_caption("欢乐打常金轩")
pygame.mouse.set_visible(False)

def getimg(name,size):
    img = pygame.image.load(name + "img" + ".png")
    return pygame.transform.scale(img,size)

def getfont(size):
    return pygame.font.Font("ahronbd.ttf",size)

def getsound(name,volume=1):
    sound = pygame.mixer.Sound(name + "music" + ".wav")
    sound.set_volume(volume)
    return sound

def exit():
    pygame.quit()
    sys.exit()

getsound("bg",0.3).play(-1)
clock = pygame.time.Clock()
init_time = time.time() - 1
mouse_point = []
mouse_down = False
score = 0

mouse_home_map = {
    "m1":{"point":(289,144),"end_life":init_time},
    "m2":{"point":(468,142),"end_life":init_time},
    "m3": {"point": (647,144),"end_life": init_time},
    "m4": {"point": (179,210),"end_life": init_time},
    "m5": {"point": (379,211),"end_life": init_time},
    "m6": {"point": (582,211),"end_life": init_time},
    "m7": {"point": (779,210),"end_life": init_time},
    "m8": {"point": (473,283),"end_life": init_time},
    "m9": {"point": (710,283),"end_life": init_time},
    "m10": {"point": (852,392),"end_life": init_time},
    "m11": {"point": (782,450),"end_life": init_time},
    "m12": {"point": (611,363),"end_life": init_time},
    "m13": {"point": (469,451),"end_life": init_time},
    "m14": {"point": (350,361),"end_life": init_time},
    "m15": {"point": (143,450),"end_life": init_time},
    "m16": {"point": (61,362),"end_life": init_time}}

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            exit()
        if event.type == pygame.MOUSEMOTION:
            mouse_point = pygame.mouse.get_pos()
        if event.type == pygame.MOUSEBUTTONDOWN:
            mouse_down = True
        if event.type == pygame.MOUSEBUTTONUP:
            mouse_down = False
        if event.type == pygame.KEYDOWN:
            if event.key == 27:
                exit()

    screen.blit(getimg("bg",(920,518)),(0,0))

    currunt_mouse = []
    now_time = time.time()
    active_mouse_count = 0

    for key in mouse_home_map:
        mouse_detail = mouse_home_map[key]
        if now_time < mouse_detail["end_life"]:
            point = mouse_detail["point"]
            mouse_rect = pygame.Rect(point[0]-38,point[1]-80,76,80)
            screen.blit(getimg("dishu",(76,80)),mouse_rect)
            currunt_mouse.append({"rect":mouse_rect,"detail":mouse_detail})
            active_mouse_count += 1

    need_count = 3 - active_mouse_count

    if need_count > 0:
        active = 0
        for x in range(9999):
            index = random.randint(0,len(mouse_home_map))
            i = 0
            for key in mouse_home_map:
                if i == index:
                    mouse_detail = mouse_home_map[key]
                    if mouse_detail["end_life"] < now_time:
                        mouse_detail["end_life"] = now_time + random.randint(1,3)
                        point = mouse_detail["point"]
                        mouse_rect = pygame.Rect(point[0] - 38, point[1] - 80, 76, 80)
                        screen.blit(getimg("dishu", (76, 80)), mouse_rect)
                        currunt_mouse.append({"rect": mouse_rect, "detail": mouse_detail})
                        active += 1
                        getsound("dishuchuxian",0.3).play()
                if active >= need_count:
                    break
                i += 1

    hammer_rect = pygame.Rect(mouse_point[0],mouse_point[1],80,80)
    screen.blit(getimg("chuizi",(80,80)),hammer_rect)

    if mouse_down:
        for x in currunt_mouse:
            rect = x["rect"]
            detail = x["detail"]
            if hammer_rect.colliderect(rect):
                screen.blit(getimg("dishubaozha",(200,200)),(mouse_point[0]-80,mouse_point[1]-80))
                detail["end_life"] = now_time - 1
                score += 1
                getsound("dishudadiao",0.3).play()
                break

    screen.blit(getfont(30).render("score:" + str(score),True,(255,255,255)),(30,30))
    screen.blit(getfont(30).render("@ryxk", True, (255, 255, 255)), (760, 40))
    pygame.display.update()
    clock.tick(60)
