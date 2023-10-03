import tornado.ioloop
import tornado.web
import config

class MainHandler(tornado.web.RequestHandler):   #首页
   def get(self):
        self.render("templats/index.html")  #返回HTML文件

class UpdateHandler(tornado.web.RequestHandler):   #提交数据的接口
    def post(self):
        self.write("ok")

class AdminHander(tornado.web.RequestHandler):  #后台管理页面
    def get(self):
        self.render("templats/admin.html")


def make_app():     #制作一个tornado web app
    return tornado.web.Application([    #路由
        tornado.web.url(r"/", MainHandler),     #首页
        tornado.web.url(r"/update", UpdateHandler),
        tornado.web.url(r"/admin", AdminHander),
    ])

def main():    #程序入口
    app = make_app()    
    app.listen(8000)    #监听端口：8000
    tornado.ioloop.IOLoop.current().start()    #循环监听网络
    
if __name__ == "__main__":
    main()  #程序入口
