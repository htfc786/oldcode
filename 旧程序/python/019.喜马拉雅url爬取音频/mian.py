#020.喜马拉雅url爬取音频
import time
import requests
import re
from contextlib import closing
from bs4 import BeautifulSoup

def fand_id(url,headers):
	def fand_page(dmy):
		pagedmy = dmy.findAll(name="div", attrs={"class": "pagination _Qp"})[0]
		pagedmy = pagedmy.findAll(name="ul", attrs={"class": "pagination-page _Xo"})[0]
		pagedmy = pagedmy.findAll(name="li", attrs={"class": "page-item _Xo"})
		pagedmy = pagedmy[len(pagedmy) - 1].findAll(name="span")[0]
		return int(pagedmy.string)

	while True:
		try:
			dmy = requests.get(url,headers=headers)
			break
		except Exception as e:
			print('网络发生错误，获取失败，重新获取。')

	dmy.encoding = dmy.apparent_encoding
	dmy = dmy.text
	dmy = BeautifulSoup(dmy,"lxml")
	page = fand_page(dmy) + 1

	id_dict = {}
	for i in range(1,page):
		while True:
			try:
				dmyurl = url + 'p{}/'.format(i)
				dmyt = requests.get(dmyurl, headers=headers)
				dmyt.encoding = dmyt.apparent_encoding
				dmyt = dmyt.text
				dmyt = BeautifulSoup(dmyt, "lxml")
				dmyt = dmyt.findAll(name="div", attrs={"class": "sound-list _Qp"})[0]
				dmyt = dmyt.findAll(name="ul")[0]
				dmyt = dmyt.findAll(name="li")
				for l in dmyt:
					id = l.findAll(name="a")[0]["href"] + '/'
					id = re.findall('/(.*?)/(.*?)/(.*?)/',id)[0][2]
					name = l.findAll(name="a")[0]["title"]
					id_dict[name] = id
				break
			except Exception as e:
				print('网络发生错误，获取失败，重新获取。')
	return id_dict

def fand_url(id_dict,headers):
	url_dict = {}
	for k,v in id_dict.items():
		while True:
			try:
				url = 'https://www.ximalaya.com/revision/play/v1/audio?id={}&ptype=1'.format(v)
				json = requests.get(url,headers=headers).json()
				if json['data']['canPlay'] == False:
					print(k + '可能是VIP音频，无法获取音频URL')
					break
				else:
					mp3url = json['data']['src']
					url_dict[k] = mp3url
					break
			except Exception as e:
				print('网络发生错误，{}获取失败，重新获取。'.format(k))
	return url_dict

def download(url,name,suffix):
	from contextlib import closing
	with closing(requests.get(url, stream=True)) as response:
		chunk_size = 1024  # 单次请求最大值
		with open(name + '.' + suffix, "wb") as file:
			for data in response.iter_content(chunk_size=chunk_size):
				  file.write(data)

def main():
	def adb_path():
		import os
		import sys
		path = os.path.dirname(sys.argv[0])
		return path
	url = input('请输入网站：')
	headers = {
		'Cookie': '_xmLog=xm_k877iudusvbua6; s&e=d7f1950e36ddf7ddfc43359382c5e7eb; x_xmly_traffic=utm_source%253A%2526utm_medium%253A%2526utm_campaign%253A%2526utm_content%253A%2526utm_term%253A%2526utm_from%253A; device_id=xm_1585133443220_k877iwlw5dwbh7; Hm_lvt_4a7d8ec50cfd6af753c4f8aee3425070=1585133444,1585133517; Hm_lpvt_4a7d8ec50cfd6af753c4f8aee3425070=1585144994; s&a=%1EP%05RWVK%06MQ%0B%07%04X%1F%07%10%0C[TYVBTB]%08V%0BX%1E%05VZ_O_OJTBG^UVSWYKZ',
		'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/5242.0.3945.130 Safari/537.36'
		}

	print("开始获取id")
	id_dict = fand_id(url,headers)
	print("id获取完成")
	print("开始获取下载地址")
	url_dict = fand_url(id_dict, headers)
	print("下载地址获取完成")

	print("开始下载")
	print('音频文件将会下载到：' + adb_path())
	for k,v in url_dict.items():
		while True:
			try:
				download(v,k,'mp3')
				print("下载成功：" + k + ".mp3")
				break
			except Exception as e:
				print('网络发生错误，{}下载失败，重新下载。'.format(k))
				time.sleep(1)
	print("下载完成")

if __name__ == '__main__':
	try:
		main()
	except Exception as e:
		print('发生错误：' + str(e))

#https://www.ximalaya.com/revision/play/v1/audio?id=261300596&ptype=1
#https://www.ximalaya.com/xiangsheng/8291856/
