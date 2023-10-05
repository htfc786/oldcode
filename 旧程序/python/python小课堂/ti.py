import time
ti_dict = {
	'第1题':{'ti':'1、小数乘法的意义和整数乘法的意义完全相同。' ,'xuan':['A.√' ,'B.x'] ,'da':['b','B']},
	'第2题':{'ti':'2、一个数乘0.8，积比原来的数小。' ,'xuan':['A.√' ,'B.x'] ,'da':['b','B']},
	'第3题':{'ti':'3、近似数7.0和7的大小相等，但精确度不一样。' ,'xuan':['A.√' ,'B.x'] ,'da':['a','A']},
	'第4题':{'ti':'4、8.4×0.5就是求8.4的一半是多少。' ,'xuan':['A.√' ,'B.x'] ,'da':['a','A']},
	'第5题':{'ti':'5、一个数除以一个小数，商可能是小数。' ,'xuan':['A.√' ,'B.x'] ,'da':['a','A']}
	}
	
c = 0
tks = time.time()
for k,v in ti_dict.items():
	print(v['ti'])
	for xuan in v['xuan']:
		print(xuan)
	my_da = input('请回答' + k + ':')
	da = v['da']
	if my_da == da[0] or my_da == da[1]:
		print('回答正确')
		c += 1
	else:
		print('回答错误，继续努力。')
		time.sleep(6)
		print('揭秘答案：答案是' + da[1])
		
print(c)
tjs = time.time()
t = tjs - tks
print('%0.2f'%t)
	
	
	
