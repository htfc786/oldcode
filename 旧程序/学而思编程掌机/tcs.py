from meowbit import *
from time import *
from random import randint

#全局状态变量
gameStart = False   #开始游戏
gameState = True    #记录游戏状态
newPoint = False    #记录新点是否被吃掉
pause = False       #暂停游戏

score = 0           #游戏得分
moveDir = 1         #0 暂停时；1上2下3左4右
snakeStep = 4
snake = [[32,60],[30,60]]
snakeHead=[32,60]
headNext=[0,0]
freshTime = 0.2
randomCookie = [60,80]     # 随机食物位置
cookieDisapper = 1 # 食物是否被吃掉


#按键中断定义
def up_pressed():
    global moveDir
    moveDir = 1
    sleep_ms(50) 

def down_pressed():
    global moveDir
    moveDir = 2
    sleep_ms(50) 
    
def left_pressed():
    global moveDir
    moveDir = 3
    sleep_ms(50) 
    
def right_pressed():
    global moveDir
    moveDir = 4
    sleep_ms(50) 

def a_pressed():
    global gameStart
    gameStart = True
    sleep_ms(50) 

def b_pressed():
    global pause
    pause = not pause
    sleep(0.5) 

sensor.btnTrig['up'] = up_pressed
sensor.btnTrig['down'] = down_pressed
sensor.btnTrig['left'] = left_pressed
sensor.btnTrig['right'] = right_pressed
sensor.btnTrig['a'] = a_pressed
sensor.btnTrig['b'] = b_pressed

#中断初始化
sensor.startSchedule()    

###功能函数
def snakeMove():
    global snakeHead
    global cookieDisapper
    global headNext
    global score
    ##增加蛇身

    if(snakeHead == randomCookie):
       snake.append([snakeHead[0],snakeHead[1]])
       buzzer.melody(CORRECT)
       score+=1
       cookieDisapper = 1
    else:
        #更新蛇身-增加蛇头，去掉蛇尾
        snake.append([snakeHead[0],snakeHead[1]])
        #print("new snake01"+str(snake))
        snake.pop(0)
        #print("new snake02"+str(snake))
    
    
    # 计算新蛇头位置
    if(moveDir == 1):
        snakeHead[1]+=-snakeStep
        headNext[1]=snakeHead[1]-snakeStep
    if(moveDir == 2):
        snakeHead[1]+=snakeStep
        headNext[1]=snakeHead[1]+snakeStep
    if(moveDir == 3):
        snakeHead[0]+=-snakeStep
        headNext[0]=snakeHead[1]-snakeStep
    if(moveDir == 4):
        snakeHead[0]+=snakeStep
        headNext[0]=snakeHead[1]+snakeStep
    #print("new Head"+str(snakeHead))
    
    
    

def aliveTest():
    global gameState
    global snake
    #坐标超界
    i=len(snake) -1
    if(snake[i-1][0]<2 or snake[i-1][0]>158 or snake[i-1][1]<15 or snake[i-1][1]>124):
        gameState=False
        print("out of range")
    #撞上自己

    if(snakeHead in snake):
        gameState=False
        print("kill yourself")
        print("Headnow"+str(snakeHead))
        print("snakenow"+str(snake))
        
    
     

def drawSnake():
    #关闭屏幕同步
    screen.clear()
    screen.sync = 0
    #妖娆的蛇
    for point in snake:
        screen.rect(point[0],point[1],snakeStep,snakeStep,(255,255,255),1)
    screen.textCh("分值:"+str(score),90,0,1,(255, 255, 255))
    screen.rect(2,15,156,109,(255,255,255))
    #小零食
    screen.rect(randomCookie[0],randomCookie[1],snakeStep,snakeStep,(255,255,0),1)
    screen.refresh()
    screen.sync = 1
    sleep(freshTime)

def getCookie():
    global randomCookie
    global cookieDisapper
    randomCookie[0] = randint(8,30)*snakeStep
    randomCookie[1] = randint(8,30)*snakeStep
    #确保没有砸中蛇身
    while (randomCookie in snake):
        randomCookie[0] = randint(8,30)*snakeStep
        randomCookie[1] = randint(8,30)*snakeStep
        #print("cake change"+str(cookieDisapper))
    cookieDisapper = 0
    #print("new cake"+str(randomCookie))
    
   
def gameOver():
    screen.clear()
    buzzer.melody(2)
    for i in range(140,10,-2):
        screen.textCh("Game",i,15,2,(255,0,0))
        screen.textCh("Over",i+50,45,2,(255,0,0))
        sleep(0.01)
        screen.textCh("Game",i,15,2,(0,0,0))
        screen.textCh("Over",i+50,45,2,(0,0,0))


    screen.textCh("Game",10,15,2,(255,0,0))
    screen.textCh("Over",60,45,2,(255,0,0))
    screen.textCh("得分:",30,90,1,(255,255,0))
    screen.textCh(score,110,85,2,(255,0,0))
    
    
def startShow():
    screen.clear()
    
    for i in range(140,20,-2):
        screen.textCh("贪吃蛇",i,15,3,(255,0,0))
        screen.textCh("V0.99",i+50,65,1,(255,255,0))
        sleep(0.01)
        screen.textCh("贪吃蛇",i,15,3,(0,0,0))
        screen.textCh("V0.99",i+50,65,1,(0,0,0))
    screen.textCh("贪吃蛇",20,15,3,(255,0,0))
    screen.textCh("V0.99",70,65,1,(255,255,0))
    buzzer.melody(RING)
    sleep(2)
    screen.clear()


#########主程序########
screen.fill((0, 0, 0))
#screen.textCh("score:"+str(score),70,5,1,(255, 255, 255))
#sleep(2)


##开场动画
startShow()

##游戏提示
colorSwitch = 0
while not gameStart:
    if(colorSwitch == 0):
        screen.textCh("  A键开始闯关",55,110,1,YELLOW)
    else:
        screen.textCh("  A键开始闯关",55,110,1,(0,0,0))
    colorSwitch =1 - colorSwitch
    
    screen.textCh("贪吃蛇 V0.9",30,2,1,RED)   
    screen.textCh("1.不要撞到边框和自己",5,25,1,RED)
    screen.textCh("2.不要玩杂技，如向上运动",5,45,1,RED)
    screen.textCh("  时，不要按“下键”",5,65,1,RED)
    screen.textCh("3.B键暂停/继续游戏",5,85,1,RED)
    sleep(1)

##随机出现一个cookie
getCookie()


while gameState:
    ##暂停游戏
    while pause:
        sleep(0.1)
        screen.textCh("PAUSED",13,40,2,RED)
    ##判定cookie是否被吃掉
    if(cookieDisapper == 0):
        drawSnake()
        snakeMove()
        aliveTest()
    else:
        print("need new cake")
        getCookie()

## GameOver。。。
gameOver()