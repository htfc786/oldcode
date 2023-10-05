#https://youku.com-qq.net/20190623/7517_58cbe88a/1000k/hls/a15f2937a4c000373.ts
#000-373

import requests
from contextlib import closing
 
def download(url,name,suffix):
    with closing(requests.get(url, stream=True)) as response:
        chunk_size = 1024  # 单次请求最大值
        content_size = int(response.headers['content-length'])  # 内容体总大小
        data_count = 0
        with open(name + '.' + suffix, "wb") as file:
            for data in response.iter_content(chunk_size=chunk_size):
                file.write(data)
                data_count = data_count + len(data)
                now_jd = (data_count / content_size) * 100
                #print("\r 文件下载进度：%d%%(%d/%d) - %s" % (now_jd, data_count, content_size, url), end=" ")
                
for i in range(146):
	url = "https://apd-b48ef8d80ddc7c141dd825c7b6e843ef.v.smtcdns.com/moviets.tc.qq.com/A_gckwWlnKyu1-7uRdZdX-GIR-MeAC7xdw-Xu6fuCcNE/uwMROfz2r5zAoaQXGdGnC2df7D6u1AA6uayD691xBS5nIKpx/i4Zw0E93Q5iQvN5hEUTSfEwrCu7iN8bM9X2oPWUnnLWt5G6xQAytH1k-HljtAfc0kWD8OTqIqXyFAQMJYRI-jEWCk01zsccaWDtYc0idCHRnLOVaQIoKaFFcokTebUvtZBAH1PFhiuteGYmL5cuhRF9VosPXd8YbISqhi322Pq8/0{}_b0022jwhu10.320090.1.ts?index=0&start=0&end=9800&brs=0&bre=386151&ver=4".format(i)
	download(url,str(i),"ts")
	print("下载成功："+str(i)+'.ts')
