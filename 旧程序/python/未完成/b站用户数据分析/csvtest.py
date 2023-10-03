# coding:utf-8
import csv
import codecs
data = [
    ("1",'0011'),
    ("2",'1122'),
    ("3",'2233'),
    ("4",'3344'),
    ("5",'4455'),
]
f = codecs.open('222.csv','w','gbk')
writer = csv.writer(f)

for i in data:
    writer.writerow(i)
f.close()