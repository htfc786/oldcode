import os
import time

def adb_path():
    import os
    import sys
    path = os.path.dirname(sys.argv[0])
    path = path + '/adb/'
    return path

adb_path = adb_path()

while True:
    os.system(adb_path + 'adb.exe shell input swipe 340 865 370 202')
    time.sleep(2)
