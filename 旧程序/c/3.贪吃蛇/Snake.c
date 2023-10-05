#include <stdio.h>
#include <conio.h>
#include <time.h>
#include <windows.h>

// 定义常量
#define I_WALL "■"  // 窗口边框图标 
#define I_SNAKE_HARD "#"  // 蛇头图标 
#define I_SNAKE_BODY "&"  // 蛇身图标 
#define I_APPLE "@"  // 苹果图标 
#define MENU_WIDTH 70  //菜单默认窗口宽 x 
#define MENU_HIGHT 20  //菜单默认窗口高 y 
#define WIDTH 70  //窗口宽 x 
#define HIGHT 20  //窗口高 y 


// 定义变量 
HANDLE hdl;		    // 命令行句柄 
int menu_x;         // 菜单中间位置x
int menu_y;         // 菜单中间位置y

// 各种函数 
void c_gotoxy(short x, short y); // 命令行光标移到函数
void draw_wall(); // 命令行光标移动函数 
void draw_menu_page(); // 画菜单页面函数
void draw_settings_menu_page(); // 画设置页面函数
void update_menu_page(); // 更新画面/管理菜单页面函数


int main()
{
	// 游戏初始化
	system("cls");
	hdl = GetStdHandle(STD_OUTPUT_HANDLE);

	update_menu_page();
	

	// 游戏开始
	// 贪吃蛇：获取当前时间，如果达到一定时间，就移动蛇
		// 按键检测 
		// 对蛇本身进行更改：删除尾巴，向前移动一格
		// 胜负决定，吃苹果判定
	/*while (1) {
		getchar();
	}*/

	c_gotoxy(0, 25);
	printf("hhh");
	return 0;
}

// 命令行光标移动函数 
void c_gotoxy(short x, short y)  
{  
	COORD pos = { x, y };
	SetConsoleCursorPosition(hdl, pos);
}
// 绘制游戏界面--边框 
void draw_wall()  
{  
	for (int i = 1; i < HIGHT + 2 + 2; i++) 
	{  // 绘制左边框 
		c_gotoxy(0, i);
		printf(I_WALL);
	}
	for (int i = 1; i < HIGHT + 2 + 1; i++) 
	{  // 绘制右边框 
		c_gotoxy(WIDTH + 2, i);
		printf(I_WALL);
	}
	for (int i = 0; i < WIDTH + 3; i += 2) 
	{  // 绘制上边框 
		c_gotoxy(i, 1);
		printf(I_WALL);
	}
	for (int i = 0; i < WIDTH + 2 + 1; i += 2) 
	{  // 绘制下边框 
		c_gotoxy(i, HIGHT + 2 + 1);
		printf(I_WALL);
	}
}
// 画主菜单
void draw_menu_page()
{
	c_gotoxy(menu_x-4, menu_y - 4);
	printf(" 贪  吃  蛇 ");
	c_gotoxy(menu_x, menu_y - 2);
	printf("--作者:(b站)htfc786");
	c_gotoxy(menu_x - 4, menu_y);
	printf("正 常 模 式");
	c_gotoxy(menu_x - 4, menu_y + 2);
	printf("穿 墙 模 式");
	c_gotoxy(menu_x - 4, menu_y + 4);
	printf("无 敌 模 式");
	c_gotoxy(menu_x - 4, menu_y + 6);
	printf("退出(按esc键)");
	printf("进入设置");
	c_gotoxy(menu_x - 10, menu_y + 11);
	
	//system("pause");
}
// 画设置页面函数
void draw_settings_menu_page() 
{
	c_gotoxy(menu_x - 2, menu_y - 4);
	printf(" 设  置 ");
}
// 更新画面/管理菜单页面函数
void update_menu_page()
{	
	//画边框
	draw_wall();
	//计算中心点位置
	menu_x = MENU_WIDTH / 2;
	menu_y = MENU_HIGHT / 2;

	//draw_settings_menu_page();
	draw_menu_page();
	short key;
	while (1){
		while (_kbhit()) {
			key = getch();   // 获取按键
			//printf("%d",key); 
			switch (key) {
			case 224: case 119: case 97: case 115: case 100: //  244:按方向键的标志数 119:w 97:a 115:s 100:d 
				if (key == 224) key = getch();     //  如果是标志数读取下一个数就是按键对应的数 
				switch (key) {
				case 72: case 119://72:上 119:w
					
					break;
				case 80: case 115://80:下 97:a
					
					break;
				}
			}
		}
	}
}
