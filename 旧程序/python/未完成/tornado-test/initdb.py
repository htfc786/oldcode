import json
import config

try:
    with open(config.db_paths,"r") as f:    #查看数据库是否已被初始化
        jsondata = json.load(f)             #在这里发生任何错误都直接跳到下面的代码
    isInit = jsondata["isInit"]
    if isInit:
        print("已经初始化完成了，不需要再次初始化。")
        exit()
    else:
        raise Exception('')     #没有初始化就抛出错误，然他跳到下面
except:
    db_json = {         #定义数据库最初的样子
        "isInit":True,
        "users":[],
        "groupList":[],
        "nameList":[],
        "teskList":[]
    }

    jsondata = json.dumps(db_json)      #保存他！
    with open(config.db_paths,"w") as f:
        f.write(jsondata)
    print("初始化成功！")