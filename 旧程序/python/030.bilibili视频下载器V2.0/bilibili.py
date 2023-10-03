import requests
import re
import json
import os


def get_html(url, headers):
    '''
    请求URL得到HTML
    '''
    try:
        response = requests.get(url=url, headers=headers)
        html = response.text
        return html
    except requests.exceptions.MissingSchema as e:
        return 404
    except Exception as e:
        return 503


def jiexi_html(html_date):
    '''
    解析URL，输出下载链接
    '''
    video_title = re.findall(r'<title(.*?)>(.*?)</title>', html_date)[0][1]

    hpattern = r'\<script\>window\.__playinfo__=(.*?)\</script\>'
    result = re.findall(hpattern, html_date)[0]
    videoinfo = json.loads(result)
    try:
        video_type = 'flv'
        for item in videoinfo['data']['durl']:
            if 'url' in item.keys():
                video_url = item['url']
    except Exception as e:
        video_type = 'm4s'
        video_url = videoinfo['data']['dash']['video'][0]['baseUrl']
        audio_url = videoinfo['data']['dash']['audio'][0]['baseUrl']
        video_url = {'video_url': video_url, 'audio_url': audio_url}

    return {'video_type': video_type, 'video_title': video_title, 'video_url': video_url}


def download(url, headers, name):
    '''
    下载文件
    '''
    req = requests.get(url=url, headers=headers)
    with open(name, 'wb') as f:
        f.write(req.content)
    # os.system('aria2c.exe "' + url + '" -o "' + name + '" -user-agent "' + headers + '"')


def main():
    '''
    主函数
    '''

    print('''**************************************
**欢迎使用bilibili视频下载器（V2.0）**
**************************************''')

    def work_path():
        '''
        获取文件的工作路径
        '''
        path = os.path.dirname(os.path.abspath(__file__))
        return path + '\\'

    while True:
        '''
        主循环
        '''
        #for i in range(1):
        try:
            '''
            错误检测
            '''
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
                downloadheaders = {
                    'Origin': 'https://www.bilibili.com',
                    'Referer': 'https://www.bilibili.com/video/av26522634',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36',
                }

                print('开始请求地址')
                while True:
                    html_date = get_html(url, headers)
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
                print('开始下载，文件将下载到:"' + work_path() + '"，请不要在看到"下载成功"前关闭窗口')
                video_title = jiexi['video_title'].replace('\\', '').replace('/', '').replace(':', '').replace('*', '').replace('?', '').replace('"', '').replace('<', '').replace('>', '').replace('|', '')
                if jiexi['video_type'] == 'flv':
                    while True:
                        try:
                            download(jiexi['video_url'], downloadheaders['User-Agent'], video_title + '.flv')
                            print('下载成功！')

                            break
                        except Exception as e:
                            print('网络发生错误，下载失败，重新下载。')
                    print('下载成功')
                elif jiexi['video_type'] == 'm4s':
                    while True:
                        try:
                            download(jiexi['video_url']['video_url'], downloadheaders, video_title + r'-video.mp4')
                            download(jiexi['video_url']['audio_url'], downloadheaders, video_title + r'-audio.mp4')
                            print('下载成功！“' + video_title + r'-video.mp4”是视频，“' + video_title + r'-audio.mp4“是音频，请自行用软件合并音视频。')
                            break
                        except Exception as e:
                            print('网络发生错误，下载失败，重新下载。')
                    print('下载成功')
        except Exception as e:
            print('发生错误！！！')


if __name__ == '__main__':
    main()
