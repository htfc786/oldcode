from tqdm import trange
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

enList = read_file('en.txt')
cnList = read_file('chinese.txt')

tempList = {}
resultList = []

print("单词去重")
# 2. 遍历两个列表，逐行比较，找到匹配的行
minLen = min(len(enList),len(cnList))
for i in trange(minLen):
    en = enList[i]; cn = cnList[i]

    if en not in tempList:
        tempList[en] = len(resultList)
        resultList.append([en,[cn]])
    else:
        resultList[tempList[en]][1].append(cn)
del tempList

result = ""
# 3. 输出结果
for i in trange(len(resultList)):
    en = resultList[i][0]; cnList = resultList[i][1]

    _id = i + 1
    bookId = 1
    cardFront = en
    cardBehind = ' '.join(cnList)
    createTime = int(time.time())

    cardBehindMk = '<html><body>'
    for cn in cnList:
        cardBehindMk += '<p>' + cn + '</p>'
    cardBehindMk += '</body></html>'
    
    sql = f"""INSERT INTO "main"."Card" ("_id", "bookId", "cardFront", "cardBehind", "cardBehindMk", "createTime", "cardType", "repetitions", "interval", "easinessFactor", "lapsesCount", "stepsIndex", "isStar", "isChop", "templateType", "popupCount", "learnSort", "lastNewTime", "lastRevTime") VALUES ({_id},{bookId},"{cardFront}","{cardBehind}","{cardBehindMk}",{createTime},1,0,0.0,2.5,0,0,0,0,1,0,0,946656000000,946656000000);"""
    
    result += sql + '\n'

# 4. 保存结果
with open('result.sql', 'w', encoding='utf-8') as f:
    f.write(result)

