/*	扫雷 
	1.游戏逻辑=>通过2维数组存放数据 
	2.用户交互
		1 初始化:赋值各种变量。。。 
		2 埋雷:随机生成mine_num个雷,存入2维数组(注意去重问题) 雷=>-1
		3 添加附近雷的数量:以雷为中心的九宫格数字+1(雷除外) 
		4 循环：检测键盘按键 调用对应函数
				(1)更新光标位置 
				(2)更新画面 
				(3)左键事件 
					x 空白打开 
				(4)中键事件
				(5)右键事件 
	
	 
*/ 
#include <stdio.h>
#include <conio.h>
#include <time.h>
#include <windows.h>

// 常量 
#define D_ROW 10    // 默认行 x 
#define D_COL 10    // 默认列 y  
#define D_MINE_NUM 10    // 默认雷数  
#define D_CURSER_X 0    // 默认光标位置x 
#define D_CURSER_Y 0    // 默认光标位置y
#define M_ROW 40    // 程序支持的最大行 x 
#define M_COL 40    // 程序支持的最大列 y
#define I_CURSOR ">"    // 光标图标 


int main(){
	
}
