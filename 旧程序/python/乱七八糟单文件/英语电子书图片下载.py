from urllib.request import urlretrieve
import os
import requests
import parsel


url = 'https://mp.weixin.qq.com/s/Z_yNmrXqBeHl7MGx3a-yag'
headers = {'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'}


def save_img(img_url,file_name,file_path=''):
    try:

        if not os.path.exists(file_path):
            print('文件夹',file_path,'不存在，重新建立')
            os.makedirs(file_path)
        #获得图片后缀
        file_suffix = '.jpg'
        #拼接图片名（包含路径）
        filename = '{}{}{}{}'.format(file_path,os.sep,file_name,file_suffix)
        print(filename)
       #下载图片，并保存到文件夹中
        urlretrieve(img_url,filename=filename)
        print('下载成功：',file_name,file_suffix)
    except IOError as e:
        print('文件操作失败',e)
    except Exception as e:
        print('错误 ：',e)


html = requests.get(url=url,headers=headers).text
html_parsel = parsel.Selector(html)
div = html_parsel.xpath('//*[@id="js_content"]')#.extract_first()

print(div)

save_img(img_url, 1)
