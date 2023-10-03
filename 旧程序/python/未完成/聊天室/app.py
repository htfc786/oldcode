import socket
import sys
import threading
import time
import tkinter
import tkinter.messagebox
import tkinter.ttk

# 导库

VERSION = '1.0.0.1'
SERVER_VERSION = None
SERVER_HOST = ('127.0.0.1', 100)


class AppWin(threading.Thread):
    chat = None
    win_zj = {}

    def run(self):
        self.run_win()

    def choice_server():
        win = tkinter.Tk()
        win.title('选择服务器')
        win.resizable(width=False, height=False)
        win.geometry("100x200")
    

    def run_win(self):
        # 运行界面
        # 设置界面
        win = tkinter.Tk()
        win.title('聊天室')
        #win.resizable(width=False, height=False)
        win.geometry("800x500")

        # 头部菜单
        menu = tkinter.Menu(win)
        menu.add_command(label='退出', command=self.chat.close_app)
        menu.add_command(label='服务器', command=self.choice_server)
        win['menu'] = menu

        # 设置昵称区域 wix_jz创建nc_input
        win_nc_label = tkinter.Label(win, text='你的昵称：')
        win_nc_label.grid(row=0, column=0)
        win_nc_input = tkinter.Entry(win, width=33)
        win_nc_input.grid(row=0, column=1)
        win_nc_btn = tkinter.Button(win, text='设置昵称', width=None,
                                    command=self.chat.s_nc)  # lambda: self.sand_message())
        win_nc_btn.grid(row=0, column=2)
        self.win_zj['nc_input'] = win_nc_input

        # 清空聊天记录按钮
        win_clean_btn = tkinter.Button(win, text='清空聊天记录', width=None, command=None)  # lambda: self.sand_message())
        win_clean_btn.grid(row=0, column=3, columnspan=4, sticky=tkinter.W)

        # 在线人数显示框 win_zj创建rs_sz
        rs_xs = str(self.chat.rs)
        if len(str(self.chat.rs)) >= 9:
            rs_xs = '999999999+'
        win_rs_text = tkinter.StringVar()
        win_rs_text.set('在线人数：0')
        win_rs_label = tkinter.Label(win, textvariable=win_rs_text)
        win_rs_label.grid(row=0, column=7, columnspan=2, sticky=tkinter.W)
        self.win_zj['rs_sz'] = win_rs_text

        # 聊天信息显示组件 win_zj创建lt_text
        win_lt_text_gdt = tkinter.Scrollbar(win, orient=tkinter.VERTICAL)
        win_lt_text_gdt.grid(row=1, column=6, sticky=tkinter.N + tkinter.S)
        win_lt_text = tkinter.Text(win, borderwidth=2, relief='groove', width=100, height=40, bg='seashell',
                                   yscrollcommand=win_lt_text_gdt.set)
        win_lt_text.grid(row=1, column=0, columnspan=5)
        win_lt_text_gdt.config(command=win_lt_text.yview)
        win_lt_text.configure(state='disabled')
        self.win_zj['lt_text'] = win_lt_text

        # 在线的人显示组件 win_zj创建rs_text
        win_rs_text_gdt = tkinter.Scrollbar(win, orient=tkinter.VERTICAL)
        win_rs_text_gdt.grid(row=1, column=8, sticky=tkinter.N + tkinter.S)
        win_rs_text = tkinter.Text(win, borderwidth=2, relief='groove', width=32, height=40, bg='seashell',
                                   yscrollcommand=win_rs_text_gdt.set)
        win_rs_text.grid(row=1, column=7)
        win_rs_text_gdt.config(command=win_rs_text.yview)
        win_rs_text.configure(state='disabled')
        self.win_zj['rs_text'] = win_rs_text

        # 信息发送组件 win_zj创建msg_input
        win_msg_input = tkinter.Entry(win, width=50)
        win_msg_input.grid(row=2, column=0, columnspan=3)
        win_msg_btn = tkinter.Button(win, text='发送', width=10,
                                     command=self.chat.sand_message)  # lambda: self.sand_message())
        win_msg_btn.grid(row=2, column=3, columnspan=4)
        self.win_zj['msg_input'] = win_msg_input

        # 客户端版本显示框
        win_version = tkinter.Label(win, text=' 版本：V' + VERSION, font=[None, 6])
        win_version.grid(row=2, column=7, columnspan=2, sticky=tkinter.W + tkinter.S)

        win.protocol("WM_DELETE_WINDOW", self.chat.close_app)  # on_closing)

        win.mainloop()


# 信息处理类
class Msg:
    appwin = None
    client = None

    nc = ''
    rs = 0

    def run(self):
        time.sleep(1)
        self.client = socket.socket()
        self.client.connect(SERVER_HOST)
        while True:
            response = b''
            rec = self.client.recv(10240)
            response += rec
            msg = response.decode()
            msg = str(msg).split('$')
            if msg[0] != 'systemmsg':
                if msg[0] != self.nc:
                    self.show_lt_text(msg[0]+":"+msg[1], 'others')
            else:
                if msg[1] == 'none':
                    self.show_lt_text('system：你的主机中的软件中止了和服务器建立的连接。', 'other') #system：你可能关闭了软件，也有可能你的主机中的一些软件中止了和服务器建立的连接。
                systemmsg = eval(msg[1])
                print(systemmsg)
                r_type = systemmsg['type']
                if r_type == 'connection_information':
                    self.SERVER_VERSION = systemmsg['server_version']
                    self.show_lt_text('系统提示：连接成功，服务器版本：' + self.SERVER_VERSION, 'other')
                    self.appwin['rs_sz'].set('在线人数：' + systemmsg['number_of_people_online'])


    def sand_message(self):
        # 发送信息
        nc = self.nc
        msg = self.appwin['msg_input'].get()

        if not nc:
            tkinter.messagebox.showerror('错误', '你还没有设置昵称呢！')
        elif not msg:
            pass
        else:
            self.show_lt_text('我：' + msg, 'me')
            self.client.send(bytes(nc + '$' + msg, encoding='utf-8'))
            self.appwin['msg_input'].delete(0, 'end')

    def show_lt_text(self, text, how):
        self.appwin['lt_text'].configure(state='normal')
        self.appwin['lt_text'].insert('end', text + '\n', how)
        self.appwin['lt_text'].see('end')
        self.appwin['lt_text'].configure(state='disabled')

    def s_nc(self):
        nc = self.appwin['nc_input'].get()
        if nc == '':
            self.show_lt_text('错误：昵称不能为空。', 'other')
            tkinter.messagebox.showerror('错误', '昵称不能为空')
        elif self.nc != '':
            self.show_lt_text('错误：您已经设置了昵称了，不能重复设置。', 'other')
            tkinter.messagebox.showerror('错误', '您已经设置了昵称了，不能重复设置。')
        elif len(nc) > 8:
            self.show_lt_text('错误：昵称字符不能大于8个字符！', 'other')
            tkinter.messagebox.showerror('错误', '昵称字符不能大于8个字符！')
        else:
            self.nc = nc
            self.client.send(bytes('systemmsg${"type":"send_nick","nick":"'+ self.nc +'"}', encoding='utf-8'))
            self.show_lt_text('系统提示：昵称设置成功', 'other')
            tkinter.messagebox.showinfo('提示', '昵称设置成功')

    def close_app(self):
        #time.sleep(0.5)
        #self.client.shutdown()
        #self.client.send(bytes('', encoding='utf-8'))
        print('000')
        sys.exit(1)


def main():
    msg = Msg()
    win = AppWin()

    win.chat = msg

    win.start()
    msg.appwin = win.win_zj

    msg.run()


if __name__ == '__main__':
    main()
