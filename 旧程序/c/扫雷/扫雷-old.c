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
#define M_ROW 10//40    // 程序支持的最大行 x 
#define M_COL 10//40    // 程序支持的最大列 y
#define I_CURSOR ">"    // 光标图标 
 
// 定义变量 
HANDLE hdl;		    // 命令行句柄 
short row;    // 行 x
short col;    // 列 y
short mine_num;    //雷数
COORD cursor;    //光标位置 
_Bool is_gameover;    //是否gameover 
int testnum = 0;

// 定义2维数组 
// 定义地图的2维数组 
// [列][行]	[col][row]	[y][x]	[i][j] 
// 地图数值定义 -1=>雷  0=>没有  1-8=>附近雷的数 
short map[M_COL][M_ROW] = {
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},
	{0,0,0,0,0,0,0,0,0,0},		
};    // 存储地图->2维数组  行列暂时写死到程序支持的最大值 
// 地图状态数值定义 0=>没有打开 1=>打开 2=>标旗子 3=>标问号 
short map_type[M_COL][M_ROW];     // 存储地图状态->2维数组  行列暂时写死到程序支持的最大值 

// 各种函数 
void c_gotoxy(int x,int y); // 命令行光标移动函数 
void initgame();    // 赋值各种变量 初始化游戏 
void random_mine();    // 随机生成雷 直接修改地图 
void update();     // 更新画面
void cursor_update(short x,short y);    // 更新光标位置 
void left_event();    // 左键事件 
void middle_event();     // 中键事件 
void right_event();    // 右键事件 
void open_white(short x,short y);    // 左键空白地方的炸开效果 

int main()
{
	// 1初始化
	system("cls");
	hdl = GetStdHandle(STD_OUTPUT_HANDLE);
	//short map[D_COL][D_ROW];
	initgame();
	
	// 2埋雷 3添加附近雷的数量
	//random_mine(); 
	
	update();
	
	short key; 
	// 检测键盘按键 调用对应函数
	while(1){
		if(is_gameover == TRUE){
			update();
			c_gotoxy(0,0);
			printf("gamover");
			c_gotoxy(14,14);
			break;
		}
		while (_kbhit()){	// 当按键按下来在检测 
			key = getch();   // 获取按键
			//printf("%d",key); 
			switch (key) {
				case 224: case 119: case 97: case 115: case 100: //  244:按方向键的标志数 119:w 97:a 115:s 100:d 
					if(key == 224) key = getch();     //  如果是标志数读取下一个数就是按键对应的数 
					switch (key) {
						case 72: case 119://72:上 119:w
							cursor_update(cursor.X,cursor.Y-1);
							break;
						case 80: case 115://80:下 97:a
							cursor_update(cursor.X,cursor.Y+1);
							break;
						case 75: case 97: //75:左 115:s
							cursor_update(cursor.X-1,cursor.Y);
							break;
						case 77: case 100://77:右 100:d
							cursor_update(cursor.X+1,cursor.Y);
							break;
					}
					break;
				case 122://z
					left_event();
					//update();
					break;
				case 120://x
					middle_event();
					break;
				case 99://c
					right_event();
					break;
			}
		}
	}
	return 0;
} 
 
void c_gotoxy(int x,int y)  // 命令行光标移动函数 
{
	COORD pos = { x, y };
	SetConsoleCursorPosition(hdl, pos); 
}

void initgame()  // 赋值各种变量 初始化游戏 
{
	row = D_ROW;  // 先使用默认行列和雷数 
	col = D_ROW;
	mine_num = D_MINE_NUM;   
	is_gameover = FALSE;    //gameover设为：否 
	//for(int i=0;i<row;i++){      // 2维数组赋值 初始化赋值0 
	//	for(int j=0;j<col;j++){
	//		map[i][j] = 0; 
	//	}
	//}
	for(int i=0;i<row;i++){ 
		for(int j=0;j<col;j++){
			map_type[i][j] = 0;
		}
	}
	cursor.X = D_CURSER_X;   // 初始化光标
	cursor.Y = D_CURSER_Y;
	cursor_update(cursor.X,cursor.Y);
} 

void random_mine() // 随机生成雷和附近雷的数 直接修改地图 
{
	// 2埋雷
	// 设置随机种子 
	srand((unsigned)time(NULL));  
	// 随机生成mine_num个雷 
	for(int i=0;i<mine_num;){	
		short x = rand() % row;  // 随机位置 
		short y = rand() % col;
		if(map[x][y] != -1){  // 判断位置是否有雷  
			map[x][y] = -1;  // i不++=>死循环 随机位置有雷时=>在随机一遍 无雷时=>i++ 
			i++;
		} 
	}
	// 3添加附近雷的数量
	// 添加附近雷的数量
	for(int i=0;i<row;i++){    // 便利2维数组
		for(int j=0;j<col;j++){
			if(map[i][j] == -1){   // 判断是否是雷 
				for(int x=i-1;x<=i+1;x++){  // 便利已设为中心的9宫格 
					for(int y=j-1;y<=j+1;y++){
					 	if(map[x][y] != -1){  //排除雷本身 
					 		if(x>=0 && x<row && y>=0 && y<col){  // 排除不合法坐标 
							 	map[x][y]++;     
							}
						}
					} 
				} 
			}
		}
	} 
}

void update()	// 更新画面  --ls 
{
	c_gotoxy(0,0);
	printf("score:\n");
	for(int i=0;i<row;i++){      // 便利2维数组--临时 
	 	for(int j=0;j<col;j++){
	 		if(map_type[i][j] == 0){
	 			printf(" #");
	 		}else if(map_type[i][j] == 2){
				printf(" $");
	 		}else if(map_type[i][j] == 3){
			 	printf(" ?");
			}else if(map[i][j] == 0){
	 			printf("  ");
	 		}else if(map[i][j] == -1){
	 			printf(" @");
	 		}else{
	 			printf(" %d",map[i][j]);
	 		}
	 	}
	 	printf("\n");
	}
	printf("====================\n");
	for(int i=0;i<row;i++){      // 便利2维数组--临时 
		for(int j=0;j<col;j++){
			if(map[i][j] == 0){
		 		printf("  ");
		 	}else if(map[i][j] == -1){
		 		printf(" @");
		 	}else{
		 		printf(" %d",map[i][j]);
			}
	 	}
		printf("\n");
	}
	printf("====================\n");
	for(int i=0;i<row;i++){      // 便利2维数组--临时 
		for(int j=0;j<col;j++){
		 	printf(" %d",map_type[i][j]);
		}
		printf("\n");
	}
	cursor_update(cursor.X,cursor.Y);
} 

void cursor_update(short x,short y)    // 更新光标位置 
{
	if(y >= col) y = 0;     // 检测位置合法性 
	if(y < 0) y = col-1;    // 不合法更改一下 
	if(x >= row) x = 0;
	if(x < 0) x = row-1;
	c_gotoxy(cursor.X*2,cursor.Y+1);    // 清空原来的光标 *2:跳过中间输出雷的地方 
	printf(" ");
	cursor.X = x;    // 新的值更新进数组 
	cursor.Y = y; 
	c_gotoxy(x*2,y+1);     // 打印新的光标 
	printf(I_CURSOR); 
} 

void left_event()    // 左键事件 
{ 	
	c_gotoxy(40,testnum);
	printf("in left_event:%d %d %d",cursor.X,cursor.Y,map[cursor.X][cursor.Y]); 
	testnum++;
	if(map_type[cursor.X][cursor.Y] == 2 || map_type[cursor.X][cursor.Y] == 3){
		return;
	} else if(map[cursor.X][cursor.Y] == -1){  //如果是雷就game over 
		map_type[cursor.X][cursor.Y] = 1;
		is_gameover = TRUE; 
	} else if(map[cursor.X][cursor.Y] == 0){
		map_type[cursor.X][cursor.Y] = 1;
		open_white(cursor.X,cursor.Y);
	} else if(map[cursor.X][cursor.Y]>=1 && map[cursor.X][cursor.Y]<=8){
		map_type[cursor.X][cursor.Y] = 1;
	}
	update();
}

void middle_event()    // 中键事件 
{
	
	for(int i=cursor.X-1;i<=cursor.X+1;i++){  // 便利已设为中心的9宫格 
		for(int j=cursor.Y-1;j<=cursor.Y+1;j++){
			
		}
	}
}

void right_event()    // 右键事件 
{
	if(map_type[cursor.X][cursor.Y] == 0){  //什么都没有=>标旗子 
		map_type[cursor.X][cursor.Y] = 2;
	} else if(map_type[cursor.X][cursor.Y] == 2){  //有旗子=>标问号 
		map_type[cursor.X][cursor.Y] = 3; 
	}  else if(map_type[cursor.X][cursor.Y] == 3){  //有问号=>改回什么都没有 
		map_type[cursor.X][cursor.Y] = 0; 
	}
	update();
}

void open_white(short x,short y)
{
	if(map[x][y] == 0){
		for(int i=x-1;i<=x+1;i++){  // 便利已设为中心的9宫格 
			for(int j=y-1;j<=y+1;j++){
				if(i>=0 && i<row && j>=0 && j<col){  // 排除不合法坐标 
					if(map_type[i][j] == 0){
						c_gotoxy(40,testnum);
						printf("in open_white:%d %d",i,j); 
						testnum++;
						map_type[i][j] = 1;
						open_white(i,j);
						
					}
				}
			} 
		}
	}
		
} 
