﻿#import network
import socket as socket  # 引用socket模块


dz = ("0.0.0.0", 80)


# 响应头
responseHeaders = b'''
HTTP/1.1 200 OK
Content-Type: text/html
Connection: close

'''
# 响应头网页正文内容

content = """

<html>

<head>
    <meta charset="utf-8">
</head>

<body style="background-color:pink">
    <h1>Hi!欢迎来到我的主页～</h1>
    <h2>个人简介</h2>
    <p>姓名：王梅梅</p>
    <p>民族：汉族</p>
    <p>年龄：20岁</p>
    <p>生日：2000.10.20</p>
    <!--请在下面添加你最喜欢的编程作品名称，使用<h2></h2>和<p></p>-->
    <!--标题"编程作品"使用<h2>标签，内容如："我是打字王"等使用<p>标签-->
    <h2>编程作品</h2>
    <p>我是打字王</p>
    <p>迷宫探险</p>
    <p>欢乐打地鼠</p>
    <p>黑客爬新闻</p>
    <h2>我的爱好及优点</h2>
    <p>读书</p>
    <p>看电影</p>
    <p>逛街</p>
    <p>乐观开朗</p>
    <p>善解人意</p>
    <h2>我的语言技能</h2>
    <p>html</p>
    <p>css</p>
    <p>photoshop</p>
    <p>javascript</p>
    <h2>我和C站的故事</h2>
    <p style="color:green;">电脑真是一个非常有趣的东西，我和电脑有着不解之缘，尤其是编程。<br/>
        我爸爸是一个电脑工程师，笔记本电脑是他的随身之物，我就对电脑有着痴迷般的兴趣，从五岁起就开始玩电脑游戏，但开始时因为输给电脑而痛哭流涕，逐渐电脑成了我的手下败将，这锻炼了我的毅力。<br/>
        自从上了初中，同学就跟我谈起了电脑编程序，我当时很羡慕他们，自己也想学，从此我认识了C站。于是我便开始我的编程之路，开始很简单，可后来，程序就复杂了许多，我有时真想放弃，可是回想起以前玩电脑游戏时的毅力，我还是一步一步地走了过来，虽然这条路难走，满是泥泞，遍是荆棘，可我还是用当年学打游戏时的毅力坚持了过来，因为我知道行百里者半九十，坚持就是胜利，付出的心血不会白费。<br/>
        终于程序学得差不多了，“求公因数”、“阶乘”等都可以不费吹灰之力地完成，再复杂的程序也不在话下，我在C站上传了许多我自己做的小游戏，还认识到了许多跟我一样喜爱编程的同学们，同时也得到了C站老师的夸奖，我真是喜出望外。<br/>
        在C站我收获了好多小伙伴，得到了1000个赞，389个粉丝和986条留言，我还和C站的好朋友一起成立了自己的工作室，实在是太有成就感了！<br/>
    </p>
    <h2>我的文章</h2>
    <!--下面是我写的文章，《我的祖国》和《我的家乡》-->
    <h3>《我的祖国》</h3>
    <p>在旧中国，我们国家是贫穷落后的。在1949年10月1日，新中国成立了。这是一个值得纪念的日子。毛主席爷爷在天安门城楼上向全世界庄严宣誓：“中华人民共和国中央人民政府成立了！”这个宏亮的声音震撼了北京，震撼了中国，震撼了全世界。<br/>
        读了《我的祖国》这本书，我知道了：在新中国成立后，祖国只用了短短60年的时间就有了天翻地覆的变化！不管是农业、医疗技术发展方面，还是教育推进上，我国都有巨大的变化。
        遨游太空，一直是中华民族五千年来的梦想。嫦娥奔月这个神话故事，说明了我们的祖先早已对浩瀚无垠的宇宙有了浓厚的兴趣，并激发了美好的梦想。1970年4月，中国发射了第一颗人造地球卫星——东方红一号，从此开始了中国的航天事业。2003年10月15日，中国第一位航天员杨利伟乘坐神舟五号飞入太空，实现了中华民族千年的飞天梦想。<br/>
        走在街道上，阵阵清风吹来，长发在风中飘扬。哦，你瞧，道路不再是从前泥泞不堪的小路，而变成了一条条宽阔平坦的大道。不再是以前的交通缺乏，而是好多人家都有了小汽车。看着那一辆辆豪华的汽车飞驰而过，在阳光下闪烁着一种动人的金属光泽。笔直的大楼已经成了城市的标志性建筑物，优美大方的外观，直插云霄的高度，都让人惊叹不已。商店里的商品琳琅满目，让人看了眼花缭乱。城市中还有许多大型的购物广场。<br/>
        奔跑在乡间的小路上，呼吸着新鲜的空气，金色的阳光洒满了田野。看，菜地、麦地、庄稼田，还有白色的大棚中，庄稼们正在发芽，欢快地生长。农业正在飞速的发展中。哦，因为改革开放，农业的稳定发展，促使我们的生活走上了小康。<br/>
        走进学校的大门，浏览各个教室，高科技在学校充分的体现了出来。教室窗明几净、宽敞明亮。因为改革开放，教师、活动室都有了巨大的变化。为了能让同学们在良好的环境中学习，整个学校就像是一个大花园，美丽如画。可是以前呢，甚至连学都不能上，就算有教室，也只是很小的地方，课桌都是破破烂烂的。那时的条件是多么艰苦。<br/>
        祖国母亲是多么的优秀，她有着世界最高山峰——珠穆朗玛峰，世界最低盆地——新疆吐鲁番盆地，世界最深峡谷——雅鲁藏布大峡谷，世界文化遗产——万里长城，还有古人的四大发明也是雄居世界之最。神舟一号、神舟二号相继升天，大型航母下水试航……细数种种，我满心自豪！
    </p>
    <h4>作者：王梅梅</h4>
    <h4>时间：2020.12.30</h4>
<!--第一步：补充56行对标题《我的家乡》使用<h3>标签-->
    <h3>《我的家乡》</h3>
<!--第二步：补充58-61行把下面的整首诗内容放在<p>标签里，并且使用换行标签<br/>来进行换行-->
    <p>每个人都有自己的家乡 每个人都爱自己的家乡 而我当然也不例外啦！<br/>
    家乡是我们成长的地方 那里有我的美好时光 那里是我的梦工厂 <br/>
    我的爷爷的奶奶非常慈祥 <br/>
    所以家乡对于我来说就好比天堂</p>

    <h4>作者：曹博潇</h4>
    <h4>时间：634</h4>

</body>

</html>

""".encode('utf-8')

#ap = network.WLAN(network.AP_IF)
#ap.config(essid='634')#, authmode=4, password=None)
#ap.active(True)  # 开启无线热点


def main():
    s = socket.socket()
    s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1) # (重要)设置端口释放后立即就可以被再次使用
    s.bind(dz)  # 绑定地址
    s.listen(5)  # 开启监听（最大连接数5）

    while True:  # mian()函数中进行死循环，在这里保持监听浏览器请求与对应处理
        client_sock, client_addr = s.accept()  # 接收来自客户端的请求与客户端地址
        print('Client address:', client_addr)

        #while True:
        #    #h = client_sock.readline() # 按行读取来自客户端的请求内容
        #    #print(h.decode('utf8'), end='')
        #    if h == b'' or h == b'\r\n':  # 当读取到空行的时候表示接收到一个完整的请求头
        #        break

        client_sock.send(responseHeaders + content) # 向客户端发送响应头
        #client_sock.write(content) # 向客户端发送网页内容
        client_sock.close()

main()  # 运行main()函数