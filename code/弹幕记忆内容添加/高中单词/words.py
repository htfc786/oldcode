import json
import csv

czFile = "单词表.txt"
gzFile = "高中单词.json"

# 读取json文件
def readJson(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

# 初中单词
with open(czFile, 'r', encoding='utf-8') as file:
    words = file.readlines()
cz_list = [word.strip() for word in words]

# 高中单词
gz_words = readJson(gzFile)
zg_list = []
for word in gz_words["rows"]:
    if word["bookId"] != 1:
        continue

    is_cz = False
    if word["cardFront"] in cz_list:
        is_cz = True

    zg_list.append({
        "word": word["cardFront"],
        "voice": word["cardTip"],
        "chinese": word["cardBehind"],
        "isCz": is_cz,
    })

# 按照字母顺序排序
#忽略大小写
zg_list.sort(key=lambda x: x['word'].lower())

#初中单词放在高中前面
zg_list = [word for word in zg_list if word['isCz']] + [word for word in zg_list if not word['isCz']]

# 输出到csv文件
with open('高中单词.csv', 'w', encoding='utf-8', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(['单词', '音标', '中文解释', '是否为初中单词'])
    for word in zg_list:
        writer.writerow([word['word'], word['voice'], word['chinese'], word['isCz']])

