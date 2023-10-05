#                        python tkinter学习程序        
#python tkinter介绍
'''
Tkinter提供了允许显示、定位和
控件。顶层小部件是Tk和顶层小部件。其他
小部件包括框架、标签、条目、文本、画布、按钮、单选按钮，
复选按钮，缩放，列表框，滚动条，选项菜单，微调框
标签框和窗格窗口。
小部件的属性由关键字参数指定。
关键字参数与相应的资源同名
根据传统知识。
小部件的位置与几何管理器Place，Pack之一
或网格。可以使用方法place、pack、grid调用这些管理器
在每个小部件中都可用。
操作通过资源绑定到事件（例如关键字参数命令）或使用方法绑定。
'''
#1.弹出1个tkinter窗口
#原码：
import tkinter   #导入tkinter库
win = tkinter.Tk()   #定义一个窗口（win是一个变量，随意更改，但底下需要一致）
win.title('1')   #给窗口命名（''里的是名字，可随意更改）
win.geometry('250x300+500+200')   #这里设置的是窗口大小（250x300那里），可随意更改。后面设置的是窗口在屏幕上显示的位置（+500+200那里），可随意更改，现在输入的是屏幕中间位置。
win.resizable(width=False,height=False)   #这里是设置窗口的，可让窗口固定（width是宽，height是高，True是是，False是否）（可加可不加）
                                    #←这里是写组件区域，↓组件下面讲
win.mainloop()   #让上面的程序重复运行

#2.文字输入框（带进度条版）
#原码：
sy = tkinter.Scrollbar(win,orient=tkinter.VERTICAL)
sy.pack(fill=tkinter.Y, side=tkinter.RIGHT)
t = tkinter.Text(win,yscrollcommand=sy.set)
t.pack()
sy.config(command=t.yview)
#用到组件：Scrollbar、Text
#注意:↑上面的win是前面定义窗口的，前面是什么这里就填什么

#3.在窗口上输出文字
#原码：
tkinter.Label(win,text='2').pack()
#用到组件：Label
#注意:↑上面的win是前面定义窗口的，前面是什么这里就填什么。''里的内容是输出内容
