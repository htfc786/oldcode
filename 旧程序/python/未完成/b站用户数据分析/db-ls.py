import json
import os

start_mun = 60001
end_num = 80000
wz = "D:\\blilbili_uid_data\\"
#打包器
save_list = []

for i in range(start_mun,end_num+1):
    with open(wz+str(i),"r",encoding='utf-8') as f:
        load_dict = json.load(f)
    save_list.append(load_dict)
    print("已完成:"+str(i))
    os.remove(wz+str(i))
    
file_name = str(start_mun)+"～"+str(end_num)+".json"
with open(wz+"db\\"+file_name,"w",encoding='utf-8') as f:
    json.dump(save_list,f)
print("已保存文件...")
    
    
    

        
