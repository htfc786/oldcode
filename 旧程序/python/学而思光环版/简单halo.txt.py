import halo
import time
import os
while True:    
    print("T0:",halo.touchpad0.is_touched()," ") 
    print("T1:",halo.touchpad1.is_touched()," ")  
    print("T2:",halo.touchpad2.is_touched()," ") 
    print("T3:",halo.touchpad3.is_touched()," ")    
    time.sleep(1)
    os.system("cls")
