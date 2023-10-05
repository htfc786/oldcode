"""
实时生成命令行字符视频
By htfc786 2022-6-6
"""
import cv2 as cv
from PIL import Image
import os
import time

codelib = '''█▓▒@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,"^`'. '''[::-1]
#codelib = '''█▓▒@B%8&WM#/\|(1{[?-_+~<i!lI;:,*"^`'. '''[::-1]
#codelib = '''█▓▒ '''[::-1]
'''获取视频信息'''
cap = cv.VideoCapture('1.mp4') #加载视频
#cap = cv.VideoCapture(0) #摄像头
fps_video = cap.get(cv.CAP_PROP_FPS) # 获取帧率
width = int(cap.get(cv.CAP_PROP_FRAME_WIDTH)) # 获取宽度
height = int(cap.get(cv.CAP_PROP_FRAME_HEIGHT)) # 获取高度
print(fps_video,width,height)

fps_video = int(fps_video)
fps_time = 1 / fps_video

'''视频转图片'''
isOpened = cap.isOpened()

pic_num = 0
t1 = int(time.time())
t2 = time.time()
con_fps = False
fps = 0
while(isOpened):
    if  time.time()-t2 < fps_time and con_fps:
     #   print(time.time()-t2,fps_time,t2 - time.time() < fps_time)
        continue
        
    con_fps = True
    t2 = time.time()
    #print("fps_video="+str(time.time()-t2)+" fps="+str(fps))
    #print(t1)
    
    flag,frame=cap.read()
    if not flag:
        break
    
    cv.imshow("", frame)
    
    image_file = Image.fromarray(frame)
    image_file = image_file.convert('L')
    image_file = image_file.resize((int(width/7.5), int(height/15)),Image.ANTIALIAS)
    pic = "fps_video="+str(time.time()-t2)+" fps="+str(fps)+"\n"
    for h in range(0,image_file.size[1]):   #1:纵  2:横
        for w in range(0,image_file.size[0]):
            gray = image_file.getpixel((w,h))
            #print(codelib[int((len(codelib)*gray)/256)],end="")
            pic += codelib[int((len(codelib)*gray)/256)]
        #print()
        pic += "\n"
    pic += "="*(int(width/7.5)+1)+"\n"
    print(pic,end="")
    #print("="*(int(width/7.5)+1))
    
    pic_num += 1
    
    #print(t2-t1)
    #if (0.0283-(t2-t1))>0:
    #    time.sleep(0.0283-(t2-t1))
    #os.system('cls')
    
    if int(time.time()) == t1+1:
        fps = pic_num
        #print("fps_video="+str(fps_video)+" fps="+str(fps))
        pic_num = 0
        t1 = int(time.time())
        #print(t1)
    #else:
       #print("fps_video="+str(time.time()-t2)+" fps="+str(fps))
       #print(t1)
       
    
    cv.waitKey(1)
        
cap.release()
print('end')
