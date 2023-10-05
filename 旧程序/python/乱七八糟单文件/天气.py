from bs4 import BeautifulSoup
from tkinter import ttk
import requests
import tkinter 

shengdict = {
	'list':['北京', '重庆', '上海', '天津', '安徽', '福建', '甘肃', '广东', '广西', '贵州', '海南', '河北', '黑龙江', '河南', '湖北', '湖南', '江苏', '江西', '吉林', '辽宁', '内蒙古', '宁夏', '青海', '山东', '山西', '陕西', '四川', '西藏', '新疆', '云南', '浙江'], 
	'北京':{
		'list':['北京'],
		'北京':{
			"list":["海淀","朝阳","顺义","怀柔","通州","昌平","延庆","丰台","石景山","大兴","房山","密云","门头沟","平谷","东城","西城"],
			'海淀': 'https://www.tianqi.com/haidian/', 
			'朝阳': 'https://www.tianqi.com/chaoyang/', 
			'顺义': 'https://www.tianqi.com/shunyi/', 
			'怀柔': 'https://www.tianqi.com/huairou/', 
			'通州': 'https://www.tianqi.com/tongzhou/', 
			'昌平': 'https://www.tianqi.com/changping/', 
			'延庆': 'https://www.tianqi.com/yanqing/', 
			'丰台': 'https://www.tianqi.com/fengtai/', 
			'石景山': 'https://www.tianqi.com/shijingshan/', 
			'大兴': 'https://www.tianqi.com/daxing/', 
			'房山': 'https://www.tianqi.com/fangshan/', 
			'密云': 'https://www.tianqi.com/miyun/', 
			'门头沟': 'https://www.tianqi.com/mentougou/', 
			'平谷': 'https://www.tianqi.com/pinggu/', 
			'东城': 'https://www.tianqi.com/dongchengqu/', 
			'西城': 'https://www.tianqi.com/xichengqu/'}}, 
	'重庆':{
		'list':['重庆']
		'重庆':{
			'list':['江北', '渝中', '大渡口', '沙坪坝', '九龙坡', '南岸', '开州', '永川', '合川', '南川', '江津', '万盛', '渝北', '北碚', '巴南', '长寿', '黔江', '万州', '涪陵', '开县', '城口', '云阳', '巫溪', '奉节', '巫山', '潼南', '垫江', '梁平', '忠县', '石柱', '大足', '荣昌', '铜梁', '璧山', '丰都', '武隆', '彭水', '綦江', '酉阳', '秀山'],
			'江北': 'https://www.tianqi.com/jiangbei/', 
			'渝中': 'https://www.tianqi.com/yuzhongqu/', 
			'大渡口': 'https://www.tianqi.com/dadukou/', 
			'沙坪坝': 'https://www.tianqi.com/shapingba/', 
			'九龙坡': 'https://www.tianqi.com/jiulongpo/', 
			'南岸': 'https://www.tianqi.com/nananqu/', 
			'开州': 'https://www.tianqi.com/kaizhou/', 
			'永川': 'https://www.tianqi.com/yongchuan/', 
			'合川': 'https://www.tianqi.com/hechuan/', 
			'南川': 'https://www.tianqi.com/nanchuan/', 
			'江津': 'https://www.tianqi.com/jiangjin/', 
			'万盛': 'https://www.tianqi.com/wansheng/', 
			'渝北': 'https://www.tianqi.com/yubei/', 
			'北碚': 'https://www.tianqi.com/beibei/', 
			'巴南': 'https://www.tianqi.com/banan/', 
			'长寿': 'https://www.tianqi.com/changshou/', 
			'黔江': 'https://www.tianqi.com/qianjiang/', 
			'万州': 'https://www.tianqi.com/wanzhou/', 
			'涪陵': 'https://www.tianqi.com/fuling/', 
			'开县': 'https://www.tianqi.com/kaixian/', 
			'城口': 'https://www.tianqi.com/chengkou/', 
			'云阳': 'https://www.tianqi.com/yunyang/', 
			'巫溪': 'https://www.tianqi.com/wuxi/', 
			'奉节': 'https://www.tianqi.com/fengjie/', 
			'巫山': 'https://www.tianqi.com/wushan/', 
			'潼南': 'https://www.tianqi.com/tongnan/', 
			'垫江': 'https://www.tianqi.com/dianjiang/', 
			'梁平': 'https://www.tianqi.com/liangping/', 
			'忠县': 'https://www.tianqi.com/zhongxian/', 
			'石柱': 'https://www.tianqi.com/shizhu/', 
			'大足': 'https://www.tianqi.com/dazu/', 
			'荣昌': 'https://www.tianqi.com/rongchang/', 
			'铜梁': 'https://www.tianqi.com/tongliang/', 
			'璧山': 'https://www.tianqi.com/bishan/', 
			'丰都': 'https://www.tianqi.com/fengdu/', 
			'武隆': 'https://www.tianqi.com/wulong/', 
			'彭水': 'https://www.tianqi.com/pengshui/', 
			'綦江': 'https://www.tianqi.com/qijiang/', 
			'酉阳': 'https://www.tianqi.com/youyang/', 
			'秀山': 'https://www.tianqi.com/xiushan/'}}, 
	'上海':{
		'list':['上海']
		'上海':{
			'list':['徐汇', '静安', '杨浦', '闵行', '宝山', '嘉定', '南汇', '金山', '青浦', '松江', '奉贤', '崇明', '徐家汇', '浦东', '长宁', '虹口', '黄浦'],
			'徐汇': 'https://www.tianqi.com/xuhui/', 
			'静安': 'https://www.tianqi.com/jinganqu/', 
			'杨浦': 'https://www.tianqi.com/yangpuqu/', 
			'闵行': 'https://www.tianqi.com/minhang/', 
			'宝山': 'https://www.tianqi.com/baoshan/', 
			'嘉定': 'https://www.tianqi.com/jiading/', 
			'南汇': 'https://www.tianqi.com/nanhui/', 
			'金山': 'https://www.tianqi.com/jinshan/', 
			'青浦': 'https://www.tianqi.com/qingpu/', 
			'松江': 'https://www.tianqi.com/songjiang/', 
			'奉贤': 'https://www.tianqi.com/fengxian/', 
			'崇明': 'https://www.tianqi.com/chongming/', 
			'徐家汇': 'https://www.tianqi.com/xujiahui/', 
			'浦东': 'https://www.tianqi.com/pudong/', 
			'长宁': 'https://www.tianqi.com/changningqu/', 
			'虹口': 'https://www.tianqi.com/hongkou1/', 
			'黄浦': 'https://www.tianqi.com/huangpu1/'}}, 
	'天津':{
		'list':['天津']
		'天津':{
			'list':['武清', '宝坻', '东丽', '西青', '北辰', '宁河', '汉沽', '静海', '津南', '塘沽', '大港', '蓟州', '红桥', '河西', '河东', '河北', '和平', '南开', '滨海'],
			'武清': 'https://www.tianqi.com/wuqing/', 
			'宝坻': 'https://www.tianqi.com/baodi/', 
			'东丽': 'https://www.tianqi.com/dongli/', 
			'西青': 'https://www.tianqi.com/xiqing/', 
			'北辰': 'https://www.tianqi.com/beichen',
			'宁河': 'https://www.tianqi.com/ninghe/', 
			'汉沽': 'https://www.tianqi.com/hangu/', 
			'静海': 'https://www.tianqi.com/jinghai/', 
			'津南': 'https://www.tianqi.com/jinnan/', 
			'塘沽': 'https://www.tianqi.com/tanggu/', 
			'大港': 'https://www.tianqi.com/dagang/', 
			'蓟州': 'https://www.tianqi.com/tianjinjizhou/', 
			'红桥': 'https://www.tianqi.com/hongqiaoqu/', 
			'河西': 'https://www.tianqi.com/hexiqu/', 
			'河东': 'https://www.tianqi.com/hedongqu/', 
			'河北': 'https://www.tianqi.com/hebeiqu/', 
			'和平': 'https://www.tianqi.com/hepingqu/', 
			'南开': 'https://www.tianqi.com/nankaiqu/', 
			'滨海': 'https://www.tianqi.com/binhaixinqu/'}},
	'安徽':{
		"list":['安庆', '蚌埠', '亳州', '巢湖', '池州', '滁州', '阜阳', '合肥', '淮北', '淮南', '黄山', '六安', '马鞍山', '宿州', '铜陵', '芜湖', '宣城'],
		'安庆':{
			'list':['枞阳', '太湖', '潜山', '怀宁', '宿松', '望江', '岳西', '桐城', '迎江', '宜秀', '大观']
			'枞阳': 'https://www.tianqi.com/zongyang/', 
			'太湖': 'https://www.tianqi.com/taihu/', 
			'潜山': 'https://www.tianqi.com/qianshan/', 
			'怀宁': 'https://www.tianqi.com/huaining/', 
			'宿松': 'https://www.tianqi.com/susong/', 
			'望江': 'https://www.tianqi.com/wangjiang/',
			'岳西': 'https://www.tianqi.com/yuexi/', 
			'桐城': 'https://www.tianqi.com/tongcheng1/', 
			'迎江': 'https://www.tianqi.com/yingjiangqu/', 
			'宜秀': 'https://www.tianqi.com/yixiuqu/', 
			'大观': 'https://www.tianqi.com/daguanqu/'}
		'蚌埠':{
			'list':['怀远', '固镇', '五河', '龙子湖', '禹会', '淮上', '蚌山']
			'怀远': 'https://www.tianqi.com/huaiyuan/', 
			'固镇': 'https://www.tianqi.com/guzhen/', 
			'五河': 'https://www.tianqi.com/wuhe/', 
			'龙子湖': 'https://www.tianqi.com/longzihu/', 
			'禹会': 'https://www.tianqi.com/yuhuiqu/', 
			'淮上': 'https://www.tianqi.com/huaishangqu/', 
			'蚌山': 'https://www.tianqi.com/bengshanqu/'}, 
		'亳州':{
			'list':['涡阳', '利辛', '蒙城', '谯城']
			'涡阳': 'https://www.tianqi.com/guoyang/', 
			'利辛': 'https://www.tianqi.com/lixin/', 
			'蒙城': 'https://www.tianqi.com/mengcheng/', 
			'谯城': 'https://www.tianqi.com/qiaochengqu/'}, 
		'巢湖':{
			'list':['庐江', '无为', '含山', '和县']
			'庐江': 'https://www.tianqi.com/lujiang/', 
			'无为': 'https://www.tianqi.com/wuwei1/', 
			'含山': 'https://www.tianqi.com/hanshan/', 
			'和县': 'https://www.tianqi.com/hexian/'}, 
		'池州':{
			'list':['东至', '青阳', '九华山', '石台', '贵池']
			'池州': 'https://www.tianqi.com/chizhou/', 
			'东至': 'https://www.tianqi.com/dongzhi/', 
			'青阳': 'https://www.tianqi.com/qingyang1/', 
			'九华山': 'https://www.tianqi.com/jiuhuashan/', 
			'石台': 'https://www.tianqi.com/shitai/', 
			'贵池': 'https://www.tianqi.com/guichiqu/'}, 
		'滁州':{
			'list':['凤阳','明光','定远','全椒','来安','天长','琅琊','南谯']
			'凤阳': 'https://www.tianqi.com/fengyang/', 
			'明光': 'https://www.tianqi.com/mingguang/', 
			'定远': 'https://www.tianqi.com/dingyuan/', 
			'全椒': 'https://www.tianqi.com/quanjiao/', 
			'来安': 'https://www.tianqi.com/laian/', 
			'天长': 'https://www.tianqi.com/tianchang/', 
			'琅琊': 'https://www.tianqi.com/langyaqu/', 
			'南谯': 'https://www.tianqi.com/nanqiaoqu/'}, 
		'阜阳':{}, 
		'合肥':{}, 
		'淮北':{}, 
		'淮南':{}, 
		'黄山':{}, 
		'六安':{}, 
		'马鞍山':{}, 
		'宿州':{}, 
		'铜陵':{}, 
		'芜湖':{}, 
		'宣城':{}},
	'福建':{}, 
	'甘肃':{}, 
	'广东':{}, 
	'广西':{}, 
	'贵州':{}, 
	'海南':{}, 
	'河北':{}, 
	'黑龙江':{}, 
	'河南':{}, 
	'湖北':{}, 
	'湖南':{}, 
	'江苏':{}, 
	'江西':{}, 
	'吉林':{}, 
	'辽宁':{}, 
	'内蒙古':{}, 
	'宁夏':{}, 
	'青海':{}, 
	'山东':{}, 
	'山西':{}, 
	'陕西':{}, 
	'四川':{}, 
	'西藏':{}, 
	'新疆':{}, 
	'云南':{}, 
	'浙江':{}
}

win = tkinter.Tk() #构造窗体
win.title("天气预报--城市选择")
win.geometry("300x200+500+200")
win.resizable(width=False,height=False)
		
tkinter.Label(win,text="选择省份:").pack()		
comvalue=tkinter.StringVar()#窗体自带的文本，新建一个值  
comboxlist=ttk.Combobox(win,textvariable=comvalue) #初始化 
comboxlist["values"] = shengdict['list']  
#comboxlist.bind("<<ComboboxSelected>>",sheng)  #绑定事件,(下拉列表框被选中时，绑定go()函数)    
comboxlist.pack()
		
tkinter.Label(win,text="选择城市:").pack()		
comvalue=tkinter.StringVar()#窗体自带的文本，新建一个值  
comboxlist1=ttk.Combobox(win,textvariable=comvalue) #初始化 
#comboxlist1["values"]=shi
#comboxlist1.bind("<<ComboboxSelected>>",go)  #绑定事件,(下拉列表框被选中时，绑定go()函数)    
comboxlist1.pack()

tkinter.Label(win,text="选择县\区:").pack()		
comvalue=tkinter.StringVar()#窗体自带的文本，新建一个值  
comboxlist1=ttk.Combobox(win,textvariable=comvalue) #初始化 
#comboxlist1["values"]=shi
#comboxlist1.bind("<<ComboboxSelected>>",go)  #绑定事件,(下拉列表框被选中时，绑定go()函数)    
comboxlist1.pack()
		
tkinter.Button(win,text="ok").pack()#,command=binddef

win.mainloop() #进入消息循
