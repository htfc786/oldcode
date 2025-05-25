import re
from docx import Document
import os

# file_path = 'C:\\Users\\htfc786\\Desktop\\example.docx'

def rename_one(file_path):
    doc = Document(file_path)
    name_text = doc.tables[0].rows[0].cells[0].text
    match = re.search(r'姓名：_*(.*?)_*$', name_text)
    if match:
        name = match.group(1).strip()
        if name:
            # 使用os.rename()重命名文件
            # 扩展名
            ext = os.path.splitext(file_path)[1]
            new_name = name + ext
            os.rename(file_path, new_name)
            print(f'操作成功：{new_name}')
        else:
            print("姓名为空", file_path)
    else:
        print("姓名提取失败",file_path)


# 批量重命名
def rename_all(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            try:
                rename_one(file_path)
            except Exception as e:
                print(f"操作失败：{file_path}，错误信息：{e}")


rename_all('C:\\Users\\htfc786\\Desktop\\重命名\\')
