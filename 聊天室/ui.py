import tkinter
import tkinter.messagebox
import tkinter.ttk
import socket
import time
import threading

# 导库

VERSION = '1.0.0.1'
SERVER_VERSION = None
SERVER_HOST = ('127.0.0.1', 100)


class AppWin(threading.Thread):
    chat = None
    win_zj = {}

    def run(self):
        self.run_win()

    def run_win(self):
        # 运行界面
        # 设置界面
        win = tkinter.Tk()
        win.title('聊天室')
        win.resizable(width=False, height=False)
        win.geometry("600x300")

        menu = tkinter.Menu(win)
        menu.add_command(label='文件', command=None)
        win['menu'] = menu

        win_nc_label = tkinter.Label(win, text='你的昵称：')
        win_nc_label.grid(row=0, column=0)
        win_nc_input = tkinter.Entry(win, width=33)
        win_nc_input.grid(row=0, column=1)
        win_nc_btn = tkinter.Button(win, text='设置昵称', width=None,
                                    command=self.chat.s_nc)  # lambda: self.sand_message())
        win_nc_btn.grid(row=0, column=2)
        self.win_zj['nc_input'] = win_nc_input

        win_clean_btn = tkinter.Button(win, text='清空聊天记录', width=None, command=None)  # lambda: self.sand_message())
        win_clean_btn.grid(row=0, column=3, columnspan=4, sticky=tkinter.W)

        rs_xs = str(self.chat.rs)
        if len(str(self.chat.rs)) >= 9:
            rs_xs = '999999999+'
        win_rs_label = tkinter.Label(win, text='在线人数：' + rs_xs)
        win_rs_label.grid(row=0, column=7, columnspan=2, sticky=tkinter.W)

        win_lt_text_gdt = tkinter.Scrollbar(win, orient=tkinter.VERTICAL)
        win_lt_text_gdt.grid(row=1, column=6, sticky=tkinter.N + tkinter.S)
        win_lt_text = tkinter.Text(win, borderwidth=2, relief='groove', width=63, height=18, bg='seashell',
                                   yscrollcommand=win_lt_text_gdt.set)
        win_lt_text.grid(row=1, column=0, columnspan=5)
        win_lt_text_gdt.config(command=win_lt_text.yview)
        self.win_zj['lt_text'] = win_lt_text

        win_rs_text_gdt = tkinter.Scrollbar(win, orient=tkinter.VERTICAL)
        win_rs_text_gdt.grid(row=1, column=8, sticky=tkinter.N + tkinter.S)
        win_rs_text = tkinter.Text(win, borderwidth=2, relief='groove', width=16, height=18, bg='seashell',
                                   yscrollcommand=win_rs_text_gdt.set)
        win_rs_text.grid(row=1, column=7)
        win_rs_text_gdt.config(command=win_rs_text.yview)
        self.win_zj['rs_text'] = win_rs_text

        win_msg_input = tkinter.Entry(win, width=50)
        win_msg_input.grid(row=2, column=0, columnspan=3)
        win_msg_btn = tkinter.Button(win, text='发送', width=10,
                                     command=self.chat.sand_message)  # lambda: self.sand_message())
        win_msg_btn.grid(row=2, column=3, columnspan=4)
        self.win_zj['msg_input'] = win_msg_input

        win_version = tkinter.Label(win, text=' 版本：V' + VERSION, font=[None, 6])
        win_version.grid(row=2, column=7, columnspan=2, sticky=tkinter.W + tkinter.S)

        win.protocol("WM_DELETE_WINDOW", exit)  # on_closing)

        win.mainloop()


# 信息处理类
class Msg:
    appwin = None
    client = None

    nc = ''
    rs = 0

    def run(self):
        time.sleep(1)
        self.connect()

    def connect(self):
        self.client = socket.socket()
        self.client.connect(SERVER_HOST)
        while True:
            msg = self.client.recv(1024).decode()
            msg = str(msg).split('$')
            if msg[0] != 'systemmsg':
                try:
                    if msg[0] != self.nc:
                        self.show_lt_text(msg[1], 'others')
                except Exception as e:
                    pass
            else:
                systemmsg = eval(msg[1])
                print(systemmsg)
                r_type = systemmsg['type']
                if r_type == 'yz':
                    SERVER_VERSION = systemmsg['server_version']
                    self.show_lt_text('system：连接成功', 'other')
                if r_type == 'rs':
                    rs = systemmsg['rs']


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
            self.client.send(bytes(nc + '$' + nc + '：' + msg, encoding='utf-8'))
            self.appwin['msg_input'].delete(0, 'end')

    def show_lt_text(self, text, how):
        self.appwin['lt_text'].insert('end', text + '\n', how)
        self.appwin['lt_text'].see('end')

    def s_nc(self):
        nc = self.appwin['nc_input'].get()
        if len(nc) > 8:
            tkinter.messagebox.showerror('错误', '昵称字符不能大于8个字符！')
        else:
            self.nc = nc
            tkinter.messagebox.showinfo('提示', '昵称设置成功')


def main():
    msg = Msg()
    win = AppWin()

    win.chat = msg

    win.start()
    msg.appwin = win.win_zj

    msg.run()


if __name__ == '__main__':
    main()
