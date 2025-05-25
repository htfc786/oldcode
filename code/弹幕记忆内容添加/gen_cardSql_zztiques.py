import time

# 1.读取文件，把文件的每一行转成列表
def read_file(file_path):
    lines = []
    with open(file_path, 'r', encoding='utf-8') as file:
        for line in file:
            line = line.strip()
            if line:
                lines.append(line)
    return lines

# quesList = read_file('政治八上全.txt')
# quesList = read_file('政治八下全.txt')
# data1 = read_file('./政治九上/第1课.txt')
# data2 = read_file('./政治九上/第2课.txt')
# data2.pop(0)
# data3 = read_file('./政治九上/第3课.txt')
# data3.pop(0)
# data4 = read_file('./政治九上/第4课.txt')
# data4.pop(0)
# data5 = read_file('./政治九上/第5课.txt')
# data5.pop(0)
# data6 = read_file('./政治九上/第6课.txt')
# data6.pop(0)
# data7 = read_file('./政治九上/第7课.txt')
# data7.pop(0)
# data8 = read_file('./政治九上/第8课.txt')
# data8.pop(0)
# quesList = data1 + data2 + data3 + data4 + data5 + data6 + data7 + data8

data1 = read_file('./政治九下/第1单元.txt')
data2 = read_file('./政治九下/第2单元.txt')
data2.pop(0)
quesList = data1 + data2

lastId = 2227

#####
result = ""
i = 1
id = 0
while i < len(quesList):
    ques = quesList[i]; ans = quesList[i+1]
    ansList = ans.split('\\n')

    _id = id + 1 + lastId
    bookId = 6
    cardFront = ques
    cardBehind = ' '.join(ansList)
    createTime = int(time.time())

    cardBehindMk = '<html><body>'
    for ans in ansList:
        cardBehindMk += '<p>' + ans + '</p>'
    cardBehindMk += '</body></html>'
    
    sql = f"""INSERT INTO "main"."Card" ("_id", "bookId", "cardFront", "cardBehind", "cardBehindMk", "createTime", "cardType", "repetitions", "interval", "easinessFactor", "lapsesCount", "stepsIndex", "isStar", "isChop", "templateType", "popupCount", "learnSort", "lastNewTime", "lastRevTime") VALUES ({_id},{bookId},"{cardFront}","{cardBehind}","{cardBehindMk}",{createTime},1,0,0.0,2.5,0,0,0,0,1,0,0,946656000000,946656000000);"""
    
    result += sql + '\n'

    id += 1
    i += 2

with open('result.sql', 'w', encoding='utf-8') as f:
    f.write(result)
