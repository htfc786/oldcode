# -*- coding: utf-8 -*-
import tkinter as tk
import tkinter.ttk as ttk
import tkinter.messagebox 
import requests
import parsel
import json

#设定城市库（中国城市名字）
city = {'list': ['北京', '重庆', '上海', '天津', '安徽', '福建', '甘肃', '广东', '广西', '贵州', '海南', '河北', '黑龙江', '河南', '湖北', '湖南', '江苏', '江西', '吉林', '辽宁', '内蒙古', '宁夏', '青海', '山东', '山西', '陕西', '四川', '西藏', '新疆', '云南', '浙江'], '北京': ['北京'], '重庆': ['重庆'], '上海': ['上海'], '天津': ['天津'], '安徽': ['合肥', '蚌埠', '芜湖', '淮南', '马鞍山', '安庆', '宿州', '阜阳', '亳州', '黄山', '滁州', '淮北', '铜陵', '宣城', '六安', '池州'], '福建': ['福州', '厦门', '宁德', '莆田', '泉州', '漳州', '龙岩', '三明', '南平', '钓鱼岛'], '甘肃': ['兰州', '定西', '平凉', '庆阳', '武威', '金昌', '张掖', '酒泉', '天水', '陇南', '临夏', '甘南', '白银', '嘉峪关'], '广东': ['广州', '韶关', '惠州', '梅州', '汕头', '深圳', '珠海', '佛山', '肇庆', '湛江', '江门', '河源', '清远', '云浮', '潮州', '东莞', '中山', '阳江', '揭阳', '茂名', '汕尾'], '广西': ['南宁', '崇左', '柳州', '来宾', '桂林', '梧州', '贺州', '贵港', '玉林', '百色', '钦州', '河池', '北海', '防城港'], '贵州': ['贵阳', '遵义', '安顺', '黔南', '黔东南', '铜仁', '毕节', '六盘水', '黔西南'], '海南': ['海口', '三亚', '东方', '儋州', '琼海', '文昌', '万宁', '西沙', '南沙岛', '五指山', '三沙'], '河北': ['石家庄', '保定', '张家口', '承德', '唐山', '廊坊', '沧州', '衡水', '邢台', '邯郸', '秦皇岛'], '黑龙江': ['哈尔滨', '齐齐哈尔', '牡丹江', '佳木斯', '绥化', '黑河', '大兴安岭', '伊春', '大庆', '七台河', '鸡西', '鹤岗', '双鸭山'], '河南': ['郑州', '安阳', '新乡', '许昌', '平顶山', '信阳', '南阳', '开封', '洛阳', '商丘', '焦作', '鹤壁', '濮阳', '周口', '漯河', '驻马店', '三门峡', '济源'], '湖北': ['武汉', '襄阳', '鄂州', '孝感', '黄冈', '黄石', '咸宁', '荆州', '宜昌', '十堰', '随州', '荆门'], '湖南': ['长沙', '湘潭', '株洲', '衡阳', '郴州', '常德', '益阳', '娄底', '邵阳', '岳阳', '张家界', '怀化', '永州'], '江苏': ['南京', '无锡', '镇江', '苏州', '南通', '扬州', '盐城', '徐州', '淮安', '连云港', '常州', '泰州', '宿迁'], '江西': ['南昌', '九江', '上饶', '抚州', '宜春', '吉安', '赣州', '景德镇', '萍乡', '新余', '鹰潭'], '吉林': ['长春', '吉林', '延边', '四平', '通化', '白城', '辽源', '松原', '白山'], '辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '铁岭', '朝阳', '盘锦', '葫芦岛'], '内蒙古': ['呼和浩特', '包头', '乌海', '乌兰察布', '通辽', '赤峰', '鄂尔多斯', '巴彦淖尔', '锡林郭勒', '呼伦贝尔', '兴安盟', '阿拉善盟'], '宁夏': ['银川', '石嘴山', '吴忠', '固原', '中卫'], '青海': ['西宁', '海东', '黄南', '果洛', '玉树', '海西', '海北', '格尔木'], '山东': ['济南', '青岛', '淄博', '德州', '烟台', '潍坊', '济宁', '泰安', '临沂', '菏泽', '滨州', '东营', '威海', '枣庄', '日照', '聊城'], '山西': ['太原', '大同', '阳泉', '晋中', '长治', '晋城', '临汾', '运城', '朔州', '忻州', '吕梁'], '陕西': ['西安', '咸阳', '延安', '榆林', '渭南', '商洛', '安康', '汉中', '宝鸡', '铜川'], '四川': ['成都', '攀枝花', '自贡', '绵阳', '南充', '达州', '遂宁', '广安', '巴中', '泸州', '宜宾', '内江', '资阳', '乐山', '眉山', '凉山', '雅安', '甘孜', '德阳', '广元'], '西藏': ['拉萨', '日喀则', '山南', '林芝', '昌都', '阿里'], '新疆': ['乌鲁木齐', '克拉玛依', '石河子', '吐鲁番', '巴州', '阿克苏', '喀什', '塔城', '哈密', '和田', '阿勒泰', '克州', '博州'], '云南': ['昆明', '大理', '曲靖', '保山', '玉溪', '普洱', '昭通', '临沧', '怒江', '迪庆', '丽江'], '浙江': ['杭州', '湖州', '嘉兴', '宁波', '绍兴', '台州', '温州', '丽水', '金华', '衢州', '舟山']}
#定义headers参数
headers = {'user-agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.97 Safari/537.36'}
#定义URL测试（用于存放城市天气url）
city_tq_url = ' '

def query_url(cxzw):
    global city_tq_url
    url = 'https://www.tianqi.com/tianqi/ctiy?keyword=' + cxzw
    req_text = requests.get(url=url,headers=headers).text
    req_list = json.loads(req_text)
    if req_list == []:
        if cxzw == '' or cxzw == ' ':
            tkinter.messagebox.showerror("错误", "请输入正确的省份和城市")
        else:
            tkinter.messagebox.showerror("错误", "暂时没有" + cxzw + "的天气信息")
    else:
        city_tq_url = req_list[0]['url']

        
def cx_water():
    def requests_url():
        req = requests.get(url=city_tq_url ,headers=headers)
        req.encodeing = 'gbk'
        return req.text
    
    def jx_html(html):
        tqlist = []
        html_parsel = parsel.Selector(html)

        now_qiwen = html_parsel.xpath('/html/body/div[5]/div/div[1]/dl/dd[3]/p/b/text()').extract_first()
        now_tianqi = html_parsel.xpath('/html/body/div[5]/div/div[1]/dl/dd[3]/span/b/text()').extract_first()
        now_shidu = html_parsel.xpath('/html/body/div[5]/div/div[1]/dl/dd[4]/b[1]/text()').extract_first()
        now_fengxiang = html_parsel.xpath('/html/body/div[5]/div/div[1]/dl/dd[4]/b[2]/text()').extract_first()
        now_ziwaixian = html_parsel.xpath('/html/body/div[5]/div/div[1]/dl/dd[4]/b[3]/text()').extract_first()
        now_kqzl = html_parsel.xpath('/html/body/div[5]/div/div[1]/dl/dd[5]/h5/text()').extract_first()
        now_PM = html_parsel.xpath('/html/body/div[5]/div/div[1]/dl/dd[5]/h6/text()').extract_first()

        nowtq = [now_qiwen,now_tianqi,now_shidu,now_fengxiang,now_ziwaixian,now_kqzl,now_PM]
        tqlist.append(nowtq)

        for i in range(1,8):
            day7_rq = html_parsel.xpath('/html/body/div[5]/div/div[2]/div[2]/ul[1]/li[{}]/b/text()'.format(i)).extract_first()
            day7_tianqi = html_parsel.xpath('/html/body/div[5]/div/div[2]/div[2]/ul[2]/li[{}]/text()'.format(i)).extract_first()
            day7_qiwen_g = html_parsel.xpath('/html/body/div[5]/div/div[2]/div[2]/div/ul/li[{}]/span/text()'.format(i)).extract_first()
            day7_qiwen_d = html_parsel.xpath('/html/body/div[5]/div/div[2]/div[2]/div/ul/li[{}]/b/text()'.format(i)).extract_first()
            day7_fenxiang = html_parsel.xpath('/html/body/div[5]/div/div[2]/div[2]/ul[3]/li[{}]/text()'.format(i)).extract_first()

            day7tq = [day7_rq,day7_tianqi,day7_qiwen_g,day7_qiwen_d,day7_fenxiang]
            tqlist.append(day7tq)

        return tqlist

    if city_tq_url == ' ':
        return None
    else:
        html = requests_url()
        return jx_html(html)


def xs_water(water_data,win):
    if water_data == None:
        return
    now_water = tk.LabelFrame(win,text='此城市当前天气')
    now_water.grid(row=1,column=0,padx=10,pady=10,sticky=tk.W+tk.E)

    tk.Label(now_water,text='天气：'+water_data[0][1]).grid(row=0,column=0,sticky=tk.W)
    tk.Label(now_water,text='温度：'+water_data[0][0]+'℃').grid(row=0,column=1,sticky=tk.W+tk.E)
    tk.Label(now_water,text=water_data[0][2]).grid(row=0,column=2,sticky=tk.W+tk.E)
    tk.Label(now_water,text=water_data[0][3]).grid(row=0,column=3,sticky=tk.E)
    tk.Label(now_water,text=water_data[0][4]).grid(row=1,column=0,sticky=tk.W)
    tk.Label(now_water,text=water_data[0][5]).grid(row=1,column=1,sticky=tk.W+tk.E)
    tk.Label(now_water,text=water_data[0][6]).grid(row=1,column=2,sticky=tk.W+tk.E)

    day7_water = tk.LabelFrame(win,text='此城市未来7天天气')
    day7_water.grid(row=2,column=0,padx=10,pady=10,sticky=tk.W+tk.E)

    for i in range(1,8):
        tk.Label(day7_water,text='日期：'+water_data[i][0]).grid(row=i,column=0,sticky=tk.W)
        tk.Label(day7_water,text='天气：'+water_data[i][1]).grid(row=i,column=1,sticky=tk.W)
        tk.Label(day7_water,text='温度：'+water_data[i][3]+'~'+water_data[i][2]).grid(row=i,column=2,sticky=tk.W)
        tk.Label(day7_water,text='方向：'+water_data[i][4]).grid(row=i,column=4,sticky=tk.W)



def main():
    '''
    主函数
    '''
    if True:
        win = tk.Tk() #创建窗口
        win.title("天气预报") #命名窗口
        win.geometry("380x400+500+200") #设置窗口大小
        win.resizable(width=False,height=False) #设置窗口不许缩放

        def getUsersInputSheng(event): #接受用户点的省名字
            shicomboxlist["values"] = city[Shengcomboxlist.get()]


    def cx_tq():
            cxzw = shicomboxlist.get()
            query_url(cxzw)
            water_data = cx_water()
            xs_water(water_data,win)

    def sx_tq():
        if city_tq_url == ' ':
            tkinter.messagebox.showerror('错误','您还没有查询天气')
            return
        water_data = cx_water()
        xs_water(water_data,win)

    xz_city = tk.LabelFrame(win,text='选择城市')
    xz_city.grid(row=0,column=0,padx=10,pady=10,sticky=tk.W+tk.E)

    tk.Label(xz_city,text="选择省份:").grid(row=0,column=0)#文字
    Shengcomvalue=tk.StringVar()#窗体自带的文本，新建一个值
    Shengcomboxlist=ttk.Combobox(xz_city,width=10,textvariable=Shengcomvalue) #初始化选择框
    Shengcomboxlist["values"]=city['list']
    Shengcomboxlist.bind("<<ComboboxSelected>>",getUsersInputSheng)  #绑定事件,(下拉列表框被选中时，绑定go()函数)
    Shengcomboxlist.grid(row=0,column=1)

    tk.Label(xz_city,text="选择城市:").grid(row=1,column=0)
    shicomvalue=tk.StringVar()#窗体自带的文本，新建一个值
    shicomboxlist=ttk.Combobox(xz_city,width=10,textvariable=shicomvalue) #初始化
    shicomboxlist["values"] = ['']
    shicomboxlist.grid(row=1,column=1)

    tk.Button(xz_city, text='查询天气' ,font=['微软雅黑',16] ,command=cx_tq).grid(row=0,column=2,rowspan=2)
    tk.Button(xz_city, text='刷新天气' ,font=['微软雅黑',16] ,command=sx_tq).grid(row=0,column=3,rowspan=2)

    tk.Label(xz_city,text="提示：查询天气和刷新天气时可能会未响应，不用管它就行了").grid(row=2,column=0,columnspan=4)

    win.mainloop()


#程序入口
if __name__ == '__main__':
    try:
        main()
    except Exception as e:
        tkinter.messagebox.showerror('错误','网络发生错误：'+str(e))