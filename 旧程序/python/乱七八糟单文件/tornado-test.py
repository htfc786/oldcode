import tornado.ioloop
import tornado.web

class MainHandler(tornado.web.RequestHandler):      #首页
    def get(self):
        self.render("html.html")

class RegisterHandler(tornado.web.RequestHandler):      #注册
    def get(self):
        self.render("register.html")
        
class LoninHandler(tornado.web.RequestHandler):      #登录
    def get(self):
        self.render("login.html")
        
class LogoutSpaceHandler(tornado.web.RequestHandler):   #登出
   def get(self):
        self.write("Logout")

class MakeMlumHandler(tornado.web.RequestHandler):
   def get(self, story_id):
        self.write("this is story %s" % story_id)

def make_app():     #制作一个tornado web app
    return tornado.web.Application([    #路由
        tornado.web.url(r"/", MainHandler),     #首页
        tornado.web.url(r"/register", RegisterHandler), #注册
        tornado.web.url(r"/login", LoginHandler),   #登录
        tornado.web.url(r"/logout", LogoutHandler), #登出
        tornado.web.url(r"/space/([0-9]+)", UserSpaceHandler, name="story")     #用户个人空间
    ])

def main():    #程序入口
    app = make_app()    
    app.listen(80)    #监听端口：8000
    tornado.ioloop.IOLoop.current().start()    #循环监听网络
    
if __name__ == "__main__":
    main()  #程序入口
