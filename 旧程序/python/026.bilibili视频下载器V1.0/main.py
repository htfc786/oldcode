import requests
import re
import json
import os

def get_html(url,headers):
    try:
        response = requests.get(url=url,headers=headers)
        html = response.text
        return html
    except requests.exceptions.MissingSchema as e:
        return 404
    except Exception as e:
        return 503

def jiexi_html(html_date):
    video_title = re.findall(r'<title(.*?)>(.*?)</title>',html_date)[0][1]
   
    hpattern = r'\<script\>window\.__playinfo__=(.*?)\</script\>'
    result = re.findall(hpattern, html_date)[0]
    temp = json.loads(result)
    print(temp['data'])
    for item in temp['data']['durl']:
        if 'url' in item.keys():
            video_url = item['url']
    
    return {'video_title':video_title,'video_url':video_url}
    
def download(url,headers,name):
    with open(name, "wb") as f:
        f.write(requests.get(url=url, headers=headers, stream=True, verify=False).content)

def main():
    def work_path():
        path = os.path.dirname(os.path.abspath(__file__))
        return path + '\\'

    while True:
        #for i in range(1):
        try:
            url = input('请输入网址（输入q退出）：')
            if url == 'q':
                break
            else:
                headers = {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                    'Accept-Encoding': 'gzip, deflate, br',
                    'Accept-Language': 'zh-CN,zh;q = 0.9'
                }
                downloadheaders={
                        'Origin': 'https://www.bilibili.com',
                        'Referer': 'https://www.bilibili.com/video/av26522634',
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
                    }
                    
                print('开始请求地址')
                while True:
                    html_date = get_html(url,headers)
                    if html_date == 503:
                        print('网络错误，请求失败，重新请求')
                        break
                    elif html_date == 404:
                        raise Exception('请输入正确的网址')
                    else:
                        print('请求成功')
                        break
                print('开始解析')
                jiexi = jiexi_html(html_date)
                print('解析成功')
                print('开始下载，文件将下载到:"'+work_path()+'"，请不要在看到"下载成功"前关闭窗口')
                while True:
                    try:
                        download(jiexi['video_url'],downloadheaders,jiexi['video_title']+'.flv')
                        break
                    except Exception as e:
                        print('网络发生错误，下载失败，重新下载。')
                print('下载成功')
        except Exception as e:
            print('发生错误！！！')
    
if __name__ == '__main__':
    main()
