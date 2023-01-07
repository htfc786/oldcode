# 导库
import xlrd

# 打开xls文件
xls = xlrd.open_workbook(r'C:\Users\admin\Desktop\西堤头村帮扶人群名单.xlsx')
# 获取所有sheet
print(xls.sheet_names())
# 根据sheet索引或者名称获取sheet内容
sheet2 = xls.sheet_by_index(1)  # sheet索引从0开始   索引
sheet2 = xls.sheet_by_name('Sheet1')  # 名字
# sheet的名称，行数，列数
print(sheet2.name, sheet2.nrows, sheet2.ncols)
# 获取整行和整列的值（数组）
rows = sheet2.row_values(3)  # 获取第四行内容 索引从0开始
cols = sheet2.col_values(2)  # 获取第三列内容 索引从0开始
print(rows)
print(cols)
# 获取单元格内容
print(sheet2.col_values(2)[2])  # 获取第三列第三行内容
