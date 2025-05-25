import os
import time
import datetime

#一堆时间常量
t_zk = datetime.datetime(2024, 6, 15, 9, 0, 0)

def h(t):
    m_z = int(t.total_seconds())
    month_f = m_z/60/60/24/30
    day_f = m_z/60/60/24
    day = int(day_f)
    m = (day_f - day)*24*60*60
    hou_f = m/60/60
    hou = int(hou_f)
    m = (hou_f - hou)*60*60
    min_f = m/60
    min = int(min_f)
    sec = int((min_f - min)*60)
    

    m = str(month_f) + '月' + str(day) + '天' + str(hou) + '小时' + str(min) + '分' + str(sec) + '秒'
    a = str(day) + '天' + str(hou) + '小时' + str(min) + '分' + str(sec) + '秒'
    b = str(day*24 + hou) + '小时' + str(min) + '分' + str(sec) + '秒'
    c = str(m_z) + '秒'

    z = m + '   ' + a + '（' + b + ')' + '（' + c + ')'
    return z

os.system("cls")
while True:
    t1 = time.time()
    t_now = datetime.datetime.now()

    t_zk_s = h(t_zk - t_now)

    print('-'*80)
    print('-'*35+'考试倒计时'+'-'*35)
    print('-'*80)
    print('当前时间：' , t_now)
    print('距中考开始还有：' , t_zk_s)
    print('-'*80)
    

    c = time.time() - t1
    time.sleep(0.1)
    os.system("cls")
