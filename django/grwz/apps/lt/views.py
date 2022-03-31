import json  #导入json
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render  # 引入HttpResponse
from django.views.decorators.csrf import csrf_exempt
from dwebsocket.decorators import accept_websocket  # 引入dwbsocket的accept_websocket装饰器
from utils import about_phone

# Create your views here.



def lt(request):
    return HttpResponse('<a>开发中，尽请期待,您可以先进入</a><a href="/lt/lts/">聊天室</a>')


clients = {}  # 创建客户端列表，存储所有在线客户端


@csrf_exempt
def lt_lts(request): # 聊天室主页
    is_api = request.GET.get('is_api')
    if is_api != 'true': # 如果是get请求，要返回页面
        #about_phone.judge_pc_or_mobile()
        context = {'fw':'pc'}
        return render(request, template_name='lt/lt_lts.html', context=context)
    elif is_api == 'true': # 如果是post就是各种接口，获取接口类型
        api_type = request.GET.get('api_type')
        if api_type == 'verify_username':
            username = request.GET.get('username')
            data = {
                'is_ok':True,
                'ts_msg':None,
            }
            nkk_un = username.replace(" ", "")
            if username == '' or nkk_un == '':
                data['is_ok'] = False
                data['ts_msg'] = '昵称不能为空！'
            elif len(username) > 8:
                data['is_ok'] = False
                data['ts_msg'] = '昵称太长，换一个小于8个字的吧！'
            elif username in list(clients.keys()):
                data['is_ok'] = False
                data['ts_msg'] = '昵称已经存在，换一个吧！'
            elif nkk_un in list(clients.keys()):
                data['is_ok'] = False
                data['ts_msg'] = '昵称已经存在，换一个吧！'
            return JsonResponse(data=data)


@accept_websocket # 开启ws的接口
def lt_lts_ws(request): # 聊天室ws服务器
    # 判断是不是ws请求
    if not request.is_websocket():
        return HttpResponse("请使用WebSocket方式连接")
    if request.is_websocket():
        # 保存客户端的ws对象，以便给客户端发送消息,每个客户端分配一个唯一标识
        username = request.GET.get('username') # 获取username
        clients[username] = request.websocket
        # 判断是否有客户端发来消息，若有则进行处理，表示客户端与服务器建立链接成功
        while True: # 这是一个长连接要要无需循环保持连接
            # 获取消息，线程会阻塞，
            # 他会等待客户端发来下一条消息，直到关闭后才会返回
            message = request.websocket.wait()
            if not message: # 当关闭时返回None，把此人的连接关掉，进入下方删除代码
                break
            else: # 接收用户发发来的信息
                msg = str(message, encoding="utf-8")
                # 发来test表示链接成功
                if msg == "test":
                    print("客户端链接成功：" + username)
                    # open('lt_lts_ltnr.txt', 'w', encoding='utf-8').write(open('lt_lts_ltnr.txt', 'r', encoding='utf-8').read() + str({"type": 1, "userfrom": 'system', 'userto': 'all',"time": time.strftime("%Y.%m.%d %H:%M:%S", time.localtime()),'userip': None, "msg": '%s进入了聊天室' % username}) + '\n')
                    # 第一次进入，返回在线列表和他的id
                    # request.websocket.send(json.dumps({"type": 0, "userlist": list(clients.keys()), "userid": username}).encode("'utf-8'"))
                    # 更新所有人的userlist
                    for client in clients:
                        clients[client].send(json.dumps({"type": 1, "data": {"msg": '“%s”进入了聊天室' % username, "user": 'system'}}).encode('utf-8'))
                        clients[client].send(json.dumps({"type": 0, "userlist": list(clients.keys()), "user": None}).encode("'utf-8'"))
                else:
                    msg = eval(str(msg))
                    if msg['type'] == '0':
                        msg_nk = msg['msg'].replace(" ", "")
                        if msg_nk == '':
                            pass
                        else:
                            for client in clients:
                                clients[client].send(json.dumps({"type": 1, "data": {"msg": msg['msg'], "user": msg['userfrom']}}).encode('utf-8'))
                    else:
                        pass
    # 删除
    # 客户端关闭后从列表删除
    if username in clients:
        del clients[username]
        print(username + "离线")
        # 更新所有人的userlist，并给所有人发信息
        for client in clients:
            clients[client].send(json.dumps({"type": 0, "userlist": list(clients.keys()), "user": None}).encode("'utf-8'"))
            clients[client].send(json.dumps({"type": 1, "data": {"msg": '“%s”退出了聊天室' % username, "user": 'system'}}).encode('utf-8'))
            # open('lt_lts_ltnr.txt', 'w', encoding='utf-8').write(open('lt_lts_ltnr.txt', 'r', encoding='utf-8').read() + str({"type": 1, "userfrom": 'system', 'userto': 'all',"time": time.strftime("%Y.%m.%d %H:%M:%S", time.localtime()),'userip': None, "msg": '%s退出了聊天室' % username}) + '\n')
