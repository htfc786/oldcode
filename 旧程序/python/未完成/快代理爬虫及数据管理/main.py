import requests
import parsel

def requrst_html(base_url,headers):
	response = requests.get(url=base_url,headers=headers)
	return response.text
    
def get_date(html,headers):
	def fand_last_page(html_date):
		last_page = html_date.xpath('//*[@id="listnav"]/ul/li[9]/a/text()').extract_first()
		return int(last_page)
	
	html_date = parsel.Selector(html)
	last_page = fand_last_page(html_date)
	date = []
	for i in range(1,last_page + 1):
		print('正在爬取第{}页数据'.format(str(i)))
		url = 'https://www.kuaidaili.com/free/inha/{}/'.format(str(i))
		response = requests.get(url=url, headers=headers)
		print(response)
		html_date = parsel.Selector(response.text)
		alldaili = html_date.xpath('//*[@id="list"]/table/tbody/tr')
		for adl in alldaili:
			ip = adl.xpath('td[1]/text()').extract_first()
			port= adl.xpath('td[2]/text()').extract_first()
			ip_anonymity = adl.xpath('td[3]/text()').extract_first()
			ip_type = adl.xpath('td[4]/text()').extract_first()
			ip_position = adl.xpath('td[5]/text()').extract_first()
			response_speed = adl.xpath('td[6]/text()').extract_first()
			last_validation_time = adl.xpath('td[7]/text()').extract_first()
			date_dict = {'ip':ip,'port':port,'ip_anonymity':ip_anonymity,'ip_type':ip_type,'ip_position':ip_position,'response_speed':response_speed,'last_validation_time':last_validation_time}
			print(date_dict)
			date.append(date_dict)
		break

if __name__ == '__main__':
	headers = {'user-agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko)Chrome/79.0.3945.130 Safari/537.36'}
	base_url = 'https://www.kuaidaili.com/free/'

	html = requrst_html(base_url,headers)
	get_date(html,headers)

    



