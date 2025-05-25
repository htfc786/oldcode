import requests

MEMBERID = 356669
AUTH = "eyJhbGciOiJIUzUxMiJ9.eyJmdF9mcm9udF9sb2dpbl9lbWFpbF9rZXkiOiI2YjY0YjJmMy1mMjVjLTQ0NjgtODA3Mi1iZWZjOTY0Y2YyYjAifQ.X5uRVZ3vXp5OnTaismiUqg94Vom-YkSFHB-p_ZI0m1HJJ6cPRcqxh-TK9Lgn6WrOfAJvQDJ7j77_l3EMyJMdGQ"

headers = {
    "user-agent": "Dart/3.1 (dart:io)",
    "accept": "application/json",
    "memberid": str(MEMBERID),
    "accept-encoding": "gzip",
    "authorization": AUTH,
    "host": "www.xinlixi.cc",
}


examId = 44
isGetAnswer = True
saveFileName = f"心理系examId{examId}-答案.md"

def getQuesData(examId, memberId, pageNum):
    url = f"http://www.xinlixi.cc/web-api/api/exam_answer/start?examId={examId}&memberId={memberId}&pageNum={pageNum}&pageSize=25"
    return requests.get(url, headers=headers).json()

optionNameList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
quesList = []
quesTotal = 1
quesNum = 0
quesPage = 1
while quesNum < quesTotal:
    data = getQuesData(examId, MEMBERID, quesPage)
    quesTotal = data["total"]
    for question in data["data"]:
        quesNum+=1
        qId = question["questionId"]
        qText = question["name"].replace("\n", "")
        qType = question["typeName"]
        qScore = question["score"]
        qDifficulty = question["difficulty"]
        answerList = question["correctAnswer"].split(",")
        qOptions = []
        qAnswer = ""
        i = 0
        question["answers"].sort(key=lambda x: x["answerId"])
        for option in question["answers"]:
            qOptions.append(f'{optionNameList[i]}. {option["content"]}')
            if str(option["answerId"]) in answerList:
                qAnswer += optionNameList[i]
            i+=1
        quesList.append({
            "num": quesNum,
            "id": qId,
            "question": qText,
            "type": qType,
            "score": qScore,
            "difficulty": qDifficulty,
            "options": qOptions,
            "answer": qAnswer
        })
        print(f"{quesNum}. ({qType},{qScore}分) {qText} (难度:{qDifficulty}) id:{qId}")
    quesPage+=1

# print(quesList)
# 保存为md文档
mdText = ""
for q in quesList:
    mdText += f'{q["num"]}. **({q["type"]},{q["score"]}分)** {q["question"]} _(难度:{q["difficulty"]})_ `id:{q["id"]}`  \n'
    for option in q["options"]:
        mdText += f"{option}  \n"
    if isGetAnswer:
        mdText += f"> **答案**: {q['answer']}\n"
    mdText += "\n\n"

mdText += "\n\n\n## 参考答案:\n"
#参考答案
for q in quesList:
    mdText += f"{q['num']}、{q['answer']}；\t"
    if (q['num'] % 5 == 0):
        mdText += "  \n"

with open(saveFileName, "w", encoding="utf-8") as f:
    f.write(mdText)
    